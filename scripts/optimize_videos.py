#!/usr/bin/env python3
"""Compress portfolio screen recordings for faster web playback."""

from __future__ import annotations

import shutil
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
FFMPEG = shutil.which("ffmpeg") or "/opt/homebrew/bin/ffmpeg"


@dataclass(frozen=True)
class VideoJob:
    source: str
    output: str
    max_width: int
    strip_audio: bool = True
    crf: int = 30


JOBS = [
    VideoJob("Ai chat.MP4", "ai-chat.mp4", 800),
    VideoJob("Study group.MP4", "study-group.mp4", 800),
    VideoJob("templete.MP4", "template.mp4", 800),
    VideoJob("time_spot_animation.MP4", "time-spot-animation.mp4", 800),
    VideoJob("time_spot_scroll.MP4", "time-spot-scroll.mp4", 800),
    VideoJob("oculus1.mp4", "oculus1.mp4", 1280),
    VideoJob("eyezen_app.mov", "eyezen-app.mp4", 1280),
    VideoJob("eyezen_demo.mov", "eyezen-demo.mp4", 960),
    VideoJob("app_demo_real.mov", "app-demo-real.mp4", 720, crf=28),
    VideoJob("photo_e_portfolio.mov", "photo-e-portfolio.mp4", 960),
]


def encode(job: VideoJob) -> tuple[int, int]:
    src = ASSETS / job.source
    dst = ASSETS / job.output
    if not src.exists():
        raise FileNotFoundError(src)

    before = src.stat().st_size
    tmp = dst.with_suffix(".tmp.mp4")
    if tmp.exists():
        tmp.unlink()

    cmd = [
        FFMPEG,
        "-y",
        "-i",
        str(src),
        "-vf",
        f"scale='min({job.max_width},iw)':-2",
        "-c:v",
        "libx264",
        "-crf",
        str(job.crf),
        "-preset",
        "medium",
        "-pix_fmt",
        "yuv420p",
        "-movflags",
        "+faststart",
    ]
    if job.strip_audio:
        cmd.append("-an")
    else:
        cmd.extend(["-c:a", "aac", "-b:a", "96k"])
    cmd.append(str(tmp))

    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    tmp.replace(dst)
    after = dst.stat().st_size
    return before, after


def main() -> int:
    if not Path(FFMPEG).exists():
        print("ffmpeg not found", file=sys.stderr)
        return 1

    total_before = 0
    total_after = 0
    for job in JOBS:
        before, after = encode(job)
        total_before += before
        total_after += after
        saved = 100 * (1 - after / before) if before else 0
        print(f"{job.source} -> {job.output}: {before // 1024}KB -> {after // 1024}KB ({saved:.0f}% saved)")

    print(f"\nTotal: {total_before // 1024 // 1024}MB -> {total_after // 1024 // 1024}MB")
    return 0


if __name__ == "__main__":
    sys.exit(main())
