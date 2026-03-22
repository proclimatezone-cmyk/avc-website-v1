import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AVC — Системы Микроклимата | Кондиционеры, Отопление, Вентиляция",
  description:
    "AVC — ведущий поставщик систем микроклимата в Узбекистане. Кондиционеры Midea, Welkin, Shivaki. Продажа, монтаж, сервисное обслуживание.",
  keywords: "кондиционеры, отопление, вентиляция, Midea, Welkin, Shivaki, HVAC, Узбекистан, микроклимат",
  openGraph: {
    title: "AVC — Системы Микроклимата",
    description: "Ведущий поставщик кондиционеров и систем микроклимата в Узбекистане. Midea, Welkin, Shivaki.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
