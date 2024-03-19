import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { i18n } from "@/../i18n.config";
import { ComponentProps, ParamsLangProps } from "@/@types";
import Header from "@/components/Header";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Marcelo Boff",
  description: "Marcelo Boff Personal Site",
};

type RootLayoutProps = ComponentProps & ParamsLangProps;

export default function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Header lang={lang} />

        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
