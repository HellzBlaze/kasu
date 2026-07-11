import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kasu Next-Gen",
  description: "Next-generation personal and commercial asset tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#121212", color: "#ffffff", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
