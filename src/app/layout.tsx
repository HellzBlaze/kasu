import type { Metadata } from "next";
import "./globals.css"; // Imports your V19 styles!
import BottomNav from "../components/BottomNav";

export const metadata: Metadata = {
  title: "Kasu Next-Gen",
  description: "Next-generation asset tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
