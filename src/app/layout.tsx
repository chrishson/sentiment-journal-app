import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Journal",
  description: "A Sentimental Journal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      <body
        className={`${inter.className}, flex flex-col min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
