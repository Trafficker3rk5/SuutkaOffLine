import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Suutka - Pureza Inteligente en Movimiento | Sistemas de Filtración de Agua",
  description: "Suutka ofrece sistemas avanzados de filtración de agua con tecnología de ósmosis inversa. Soluciones residenciales e industriales para agua pura y saludable.",
  keywords: ["Suutka", "filtración de agua", "ósmosis inversa", "purificador de agua", "agua potable", "filtros de agua", "sistemas de filtración", "agua purificada"],
  authors: [{ name: "Suutka" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Suutka - Pureza Inteligente en Movimiento",
    description: "Sistemas avanzados de filtración de agua con tecnología de ósmosis inversa",
    siteName: "Suutka",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suutka - Pureza Inteligente en Movimiento",
    description: "Sistemas avanzados de filtración de agua con tecnología de ósmosis inversa",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
