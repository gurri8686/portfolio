import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Full-Stack Developer with 10+ years of experience building scalable web applications",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-body)" }}>{children}</body>
    </html>
  );
}

