#!/usr/bin/env python3
"""Resize and compress portfolio images; emit WebP siblings for HTML <picture> tags."""

from __future__ import annotations

import os
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
MAX_SIDE = 2000
JPEG_QUALITY = 82
WEBP_QUALITY = 82
MIN_BYTES = 80 * 1024  # skip tiny assets


def optimize_image(path: Path) -> tuple[int, int, int]:
    """Return (original_bytes, optimized_bytes, webp_bytes)."""
    original_bytes = path.stat().st_size
    if original_bytes < MIN_BYTES:
        return original_bytes, original_bytes, 0

    ext = path.suffix.lower()
    if ext not in {".png", ".jpg", ".jpeg"}:
        return original_bytes, original_bytes, 0

    with Image.open(path) as img:
        img = ImageOps.exif_transpose(img)
        w, h = img.size
        longest = max(w, h)
        if longest > MAX_SIDE:
            scale = MAX_SIDE / longest
            new_size = (max(1, int(w * scale)), max(1, int(h * scale)))
            img = img.resize(new_size, Image.Resampling.LANCZOS)

        if ext == ".png":
            has_alpha = img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info)
            if has_alpha:
                alpha = img.convert("RGBA").getchannel("A")
                has_alpha = alpha.getextrema()[0] < 255
            if has_alpha:
                img = img.convert("RGBA")
                img.save(path, format="PNG", optimize=True, compress_level=9)
            else:
                img = img.convert("RGB")
                jpg_path = path.with_suffix(".jpg")
                img.save(
                    jpg_path,
                    format="JPEG",
                    quality=JPEG_QUALITY,
                    optimize=True,
                    progressive=True,
                )
                path.unlink(missing_ok=True)
                path = jpg_path
        else:
            if img.mode not in ("RGB", "L"):
                img = img.convert("RGB")
            img.save(
                path,
                format="JPEG",
                quality=JPEG_QUALITY,
                optimize=True,
                progressive=True,
            )

        webp_path = path.with_suffix(".webp")
        webp_img = img
        if webp_img.mode == "P":
            webp_img = webp_img.convert("RGBA" if "transparency" in img.info else "RGB")
        webp_img.save(webp_path, format="WEBP", quality=WEBP_QUALITY, method=6)

    optimized_bytes = path.stat().st_size
    webp_bytes = webp_path.stat().st_size if webp_path.exists() else 0
    return original_bytes, optimized_bytes, webp_bytes


def main() -> int:
    patterns = ("*.png", "*.jpg", "*.jpeg", "*.PNG", "*.JPG", "*.JPEG")
    files: list[Path] = []
    for pattern in patterns:
        files.extend(ASSETS.glob(pattern))
    files = sorted(set(files))

    total_before = 0
    total_after = 0
    total_webp = 0
    count = 0

    for path in files:
        before, after, webp = optimize_image(path)
        if before >= MIN_BYTES:
            count += 1
            total_before += before
            total_after += after
            total_webp += webp
            saved = 100 * (1 - after / before) if before else 0
            print(f"{path.name}: {before // 1024}KB -> {after // 1024}KB ({saved:.0f}% saved), webp {webp // 1024}KB")

    print(f"\nProcessed {count} images")
    print(f"Raster total: {total_before // 1024 // 1024}MB -> {total_after // 1024 // 1024}MB")
    print(f"WebP siblings: {total_webp // 1024 // 1024}MB")
    return 0


if __name__ == "__main__":
    sys.exit(main())
