import type { Metadata } from "next";
import { Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoSerif = Roboto_Serif({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Max Orsano - Psicanalista",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoSerif.variable} antialiased bg-[#FFFF]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
