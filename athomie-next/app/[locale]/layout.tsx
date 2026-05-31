import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl, localePath, locales, siteSettings, type Locale } from "@/content/site";
import { routing } from "@/i18n/routing";
import "../globals.css";

const pageMetadata: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "tiny homes Portugal | HOMIE architectural timber tiny homes",
    description:
      "Explore HOMIE, an architectural timber tiny home for serious small living in Portugal, launching first in the Algarve. See model, scope and brochure request."
  },
  pt: {
    title: "tiny homes Portugal | HOMIE tiny homes em madeira",
    description:
      "Conheca a HOMIE, uma tiny home arquitetonica em madeira para viver em Portugal, com lancamento primeiro no Algarve. Veja modelo, escopo e brochure."
  },
  de: {
    title: "Tiny Homes Portugal | HOMIE Tiny Homes aus Holz",
    description:
      "Entdecken Sie HOMIE, ein architektonisches Tiny Home aus Holz fuer ernsthaftes kleines Wohnen in Portugal, zuerst an der Algarve."
  },
  nl: {
    title: "tiny homes Portugal | HOMIE houten tiny homes",
    description:
      "Ontdek HOMIE, een architectonische houten tiny home voor serieus klein wonen in Portugal, met eerste focus op de Algarve."
  }
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = hasLocale(routing.locales, rawLocale) ? (rawLocale as Locale) : "en";
  const path = localePath(locale);
  const languages = Object.fromEntries(
    locales.map((supportedLocale) => [supportedLocale, absoluteUrl(localePath(supportedLocale))])
  );
  const metadata = pageMetadata[locale];

  return {
    metadataBase: new URL(siteSettings.canonicalUrl),
    title: metadata.title,
    description: metadata.description,
    keywords: siteSettings.keywords,
    alternates: {
      canonical: absoluteUrl(path),
      languages: {
        ...languages,
        "x-default": absoluteUrl("/")
      }
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: absoluteUrl(path),
      siteName: siteSettings.brand,
      locale,
      alternateLocale: locales.filter((supportedLocale) => supportedLocale !== locale),
      images: [
        {
          url: absoluteUrl("/images/renders/homie-exterior-day.png"),
          width: 1586,
          height: 992,
          alt: "HOMIE timber tiny home in a Portuguese landscape"
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [absoluteUrl("/images/renders/homie-exterior-day.png")]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
