import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabric Search — Find Clothes by Material",
  description: "Search for clothing by fabric composition. Natural fibers, regenerated fabrics, synthetics, and verified fiber percentages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
