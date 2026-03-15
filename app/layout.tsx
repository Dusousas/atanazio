import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import RouteShell from "@/components/RouteShell";

const title =
  "Atanazio Terraplanagem | Terraplanagem, demolição e locação de máquinas em Brotas e região";

const description =
  "Empresa familiar em Brotas/SP desde 1997, especializada em terraplanagem, destocas, demolições, curvas de nível, limpeza e construção de represas e locação de máquinas para obras urbanas, rurais e industriais.";

const keywords = [
  "terraplanagem",
  "locação de máquinas pesadas",
  "locação de máquinas leves",
  "destocas",
  "demolições",
  "curvas de nível",
  "limpeza de represa",
  "construção de represa",
  "infraestrutura",
  "obras industriais",
  "Atanazio Terraplanagem",
  "Brotas",
  "Torrinha",
  "Santa Maria da Serra",
  "São Pedro",
  "Piracicaba",
  "Rio Claro",
  "São Carlos",
  "Itirapina",
  "Araraquara",
  "Matão",
  "Boa Esperança do Sul",
  "Bocaina",
  "Jaú",
  "Barra Bonita",
  "São Manoel",
  "Bauru",
  "Dois Córregos",
];

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Atanazio Terraplanagem",
  keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Atanazio Terraplanagem",
    images: [
      {
        url: "/atanazio-logo.webp",
        width: 1200,
        height: 630,
        alt: "Logo da Atanazio Terraplanagem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/atanazio-logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PKFMRWVJP7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PKFMRWVJP7');
          `}
        </Script>
        <RouteShell>{children}</RouteShell>
      </body>
    </html>
  );
}
