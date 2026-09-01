import type { Metadata } from "next";
import { Bungee, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://serentak-pku.id"),
  title: "SERENTAK 5.0 X RBB 2026 | Semarak PKU Untuk Bergerak",
  description:
    'SERENTAK 5.0 X RBB 2026 merupakan program kerja Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU yang menghadirkan ruang kompetisi, literasi, dan ekspresi mahasiswa melalui tema "Politrik: Seni Berkuasa dengan Propaganda".',
  keywords: [
    "SERENTAK 5.0 X RBB 2026",
    "SERENTAK PKU IPB",
    "Ormawa Eksekutif PKU",
    "Departemen Kajian Aksi dan Strategis",
    "lomba mahasiswa IPB",
    "lomba mahasiswa 2026",
    "lomba puisi mahasiswa",
    "lomba propaganda mahasiswa",
    "kompetisi mahasiswa IPB",
  ],
  authors: [{ name: "Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU" }],
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "SERENTAK 5.0 X RBB 2026",
    description: "Politrik: Seni Berkuasa dengan Propaganda",
    siteName: "SERENTAK 5.0 X RBB 2026",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SERENTAK 5.0 X RBB 2026 - Politrik: Seni Berkuasa dengan Propaganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SERENTAK 5.0 X RBB 2026",
    description: "Politrik: Seni Berkuasa dengan Propaganda",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "SERENTAK 5.0 X RBB 2026",
    "description":
      'SERENTAK 5.0 X RBB 2026 merupakan program kerja Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU yang menghadirkan ruang kompetisi, literasi, dan ekspresi mahasiswa melalui tema "Politrik: Seni Berkuasa dengan Propaganda".',
    "startDate": "2026-09-01T08:00:00+07:00",
    "endDate": "2026-09-26T17:00:00+07:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "IPB University",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kampus IPB Dramaga",
        "addressLocality": "Bogor",
        "addressRegion": "Jawa Barat",
        "postalCode": "16680",
        "addressCountry": "ID"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Ormawa Eksekutif PKU",
      "department": "Departemen Kajian Aksi dan Strategis",
      "url": "https://serentak-pku.id"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": "https://ipb.link/registrasi-lomba-serentak-2026"
    },
    "performer": {
      "@type": "PerformingGroup",
      "name": "Mahasiswa IPB University"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Apa itu SERENTAK 5.0 X RBB 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SERENTAK 5.0 X RBB 2026 merupakan program kerja Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU yang menghadirkan ruang kompetisi, literasi, dan ekspresi mahasiswa melalui tema \"Politrik: Seni Berkuasa dengan Propaganda\"."
        }
      },
      {
        "@type": "Question",
        "name": "Siapa penyelenggara SERENTAK 5.0 X RBB 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SERENTAK 5.0 X RBB 2026 diselenggarakan oleh Departemen Kajian Aksi dan Strategis Ormawa Eksekutif PKU IPB University."
        }
      },
      {
        "@type": "Question",
        "name": "Kapan kegiatan dilaksanakan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pendaftaran dibuka tanggal 1 - 13 September 2026, Technical Meeting 16 September 2026, Opening Ceremony & Penyisihan 19 September 2026, Semifinal 20 September 2026, serta Closing Ceremony & Final pada 26 September 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara mengikuti kegiatan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mahasiswa dapat mendaftar secara langsung online melalui tautan resmi pendaftaran SERENTAK 5.0 X RBB 2026 di ipb.link/registrasi-lomba-serentak-2026."
        }
      }
    ]
  };

  return (
    <html
      lang="id"
      className={`${bungee.variable} ${spaceGrotesk.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-[#F7F1E8] text-[#1F1F1F] min-h-screen flex flex-col font-sans selection:bg-[#5A0B14] selection:text-[#F7F1E8]">
        {children}
      </body>
    </html>
  );
}
