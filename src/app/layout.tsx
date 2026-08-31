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
  title: "SERENTAK 5.0 X RBB 2026 | KM PKU IPB University",
  description:
    "SERENTAK 5.0 X RBB 2026 merupakan kegiatan perlombaan sekaligus event interaktif mahasiswa KM PKU IPB University Angkatan 63 dengan tema Politrik: Seni Berkuasa dengan Propaganda.",
  keywords: [
    "SERENTAK 5.0",
    "RBB 2026",
    "Ruang Baca Bicara",
    "KM PKU Angkatan 63",
    "IPB University",
    "Kompetisi Debat",
    "Kompetisi Orasi",
    "Politrik",
  ],
  authors: [{ name: "KM PKU IPB University Angkatan 63" }],
  openGraph: {
    title: "SERENTAK 5.0 X RBB 2026 | KM PKU IPB University",
    description:
      "Kegiatan perlombaan sekaligus event interaktif mahasiswa KM PKU IPB University Angkatan 63.",
    siteName: "SERENTAK 5.0 X RBB 2026",
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
      className={`${bungee.variable} ${spaceGrotesk.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#F7F1E8] text-[#1F1F1F] min-h-screen flex flex-col font-sans selection:bg-[#5A0B14] selection:text-[#F7F1E8]">
        {children}
      </body>
    </html>
  );
}
