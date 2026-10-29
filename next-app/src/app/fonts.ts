import localFont from "next/font/local";

/** League Spartan, self-hosted (the original loaded it from Google Fonts). */
export const leagueSpartan = localFont({
  src: "../../node_modules/@fontsource-variable/league-spartan/files/league-spartan-latin-wght-normal.woff2",
  variable: "--font-league-spartan",
  weight: "100 900",
  display: "swap",
});
