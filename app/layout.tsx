import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import info from "@/info.json";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  robots: "index, follow",
  icons: [
    {
      rel: "icon",
      type: "image/x-icon",
      sizes: "32x32",
      url: "/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/logo.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/logo.png",
    },
  ],
  title: {
    default: info.title,
    template: "%s | UseEfficiently - Global Airtable Service Provider",
  },
  description:
    "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
  keywords:
    "Airtable, No-Code Solutions, Airtable Service Provider, UseEfficiently, Business Solutions,Airtable Interfaces, Airtable Automations, Airtable Team",
  openGraph: {
    title: {
      default: info.title,
      template: "%s | UseEfficiently",
    },
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
    url: info.website,
    type: "website",
    images: [
      {
        url: info.website + "/api/og?title=" + info.company,
        alt: info.company + " Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@" + info.slug,
    title: {
      default: info.title,
      template: "%s | UseEfficiently",
    },
    description:
      "At UseEfficiently, our team of experts is here to help you master Airtable and use it efficiently to meet all your needs.",
    images: info.website + "/api/og?title=" + info.company,
  },
  authors: [{ name: info.company + " Team", url: info.website }],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
