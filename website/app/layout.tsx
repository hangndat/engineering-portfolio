import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hangndat — Engineering Portfolio",
  description: "Production-minded SaaS, reliability, and AI systems",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
