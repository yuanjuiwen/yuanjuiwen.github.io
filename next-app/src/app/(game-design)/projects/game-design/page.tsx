import type { Metadata } from "next";
import { GameDesignPage } from "@/components/pages/game-design";

export const metadata: Metadata = { title: "Game Design | Kevin Wen" };

export default function Page() {
  return <GameDesignPage />;
}
