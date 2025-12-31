import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Suutka - Pureza inteligente en movimiento",
  description: "Sistemas de filtración de tecnología avanzada. Suutka ofrece soluciones de purificación de agua con tecnología de ósmosis inversa para hogares e industrias.",
  keywords: ["Suutka", "filtración de agua", "ósmosis inversa", "purificación", "sistemas de agua", "filtros", "agua potable"],
  authors: [{ name: "Suutka" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Suutka - Pureza inteligente en movimiento",
    description: "Sistemas de filtración de tecnología avanzada",
    siteName: "Suutka",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suutka - Pureza inteligente en movimiento",
    description: "Sistemas de filtración de tecnología avanzada",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
