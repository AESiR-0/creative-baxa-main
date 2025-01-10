import { Reenie_Beanie } from "next/font/google";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const reenieBeanie = Reenie_Beanie({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-reenie",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${reenieBeanie.variable} antialiased overflow-x-hidden `}
    >
      <body>{children}</body>
    </html>
  );
}
