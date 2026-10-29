import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home";

export const metadata: Metadata = {
  title: "Kevin Wen",
  description: "Kevin Wen — Industrial Design portfolio. UI/UX, product design, and creative work.",
  alternates: { canonical: "https://yuanjuiwen.github.io/" },
  openGraph: {
    type: "website",
    siteName: "Kevin Wen",
    url: "https://yuanjuiwen.github.io/",
    title: "Kevin Wen",
    description:
      "Hi, I'm Kevin Wen! I design with curiosity and empathy, shaping well-crafted experiences that feel human and intentional.",
    images: [{ url: "https://yuanjuiwen.github.io/assets/og-home.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Wen",
    description:
      "Hi, I'm Kevin Wen! I design with curiosity and empathy, shaping well-crafted experiences that feel human and intentional.",
    images: ["https://yuanjuiwen.github.io/assets/og-home.png"],
  },
};

export default function Page() {
  return <HomePage />;
}
