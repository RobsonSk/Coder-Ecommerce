import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Basic E-Commerce template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
