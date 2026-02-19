
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Risso | Full Stack Developer",
  description: "Portfolio of Santiago Risso - Web Brutalism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground font-mono selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
