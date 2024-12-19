import localFont from "next/font/local";
import './globals.css'
import Footer from "@/components/Footer";


// Define all font styles and weights
const codecPro = localFont({
  src: [
    {
      path: "/fonts/CodecPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/CodecPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/CodecPro-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/CodecPro-Italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-codec-pro", // CSS variable for Tailwind usage
  display: "swap", // Optional: Improves font loading performance
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${codecPro.variable} antialiased `}>

      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
