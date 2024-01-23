import type { Metadata } from "next";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Inventory"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full max-w-6xl mx-auto px-8 py-3">{children}</body>
    </html>
  );
}
