import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ovis Garden Glow",
  description:
    "Our mission is to help you transform your home into a sanctuary of beauty and tranquility with our carefully curated collection of decor products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
