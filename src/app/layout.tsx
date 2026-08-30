import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SERENTAK 2026 | Ruang Ekspresi dan Kompetisi Mahasiswa Nasional",
  description:
    "SERENTAK adalah ajang kompetisi mahasisawa antar Perguruan Tinggi nasional yang mewadahi bakat, ekspresi seni, karya propaganda, serta kreativitas generasi muda Indonesia.",
  keywords: [
    "SERENTAK",
    "Kompetisi Mahasiswa",
    "Lomba Baca Puisi",
    "Lomba Propaganda",
    "Student Competition",
    "Lomba Mahasiswa 2026",
    "Kompetisi Nasional",
  ],
  authors: [{ name: "Panitia Pelaksana SERENTAK 2026" }],
  openGraph: {
    title: "SERENTAK 2026 | Ruang Ekspresi dan Kompetisi Mahasiswa",
    description:
      "Tunjukkan ide, bakat, dan keberanianmu di ajang bergengsi kompetisi mahasiswa nasional SERENTAK 2026.",
    url: "https://serentak.or.id",
    siteName: "SERENTAK 2026",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cinzel.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#FAF6F0] text-[#181512] min-h-screen flex flex-col font-sans selection:bg-[#8B0000] selection:text-[#FAF6F0]">
        {children}
      </body>
    </html>
  );
}
