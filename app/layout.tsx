import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: "K90",
  description: "Sitio oficial de la banda colombiana K90",
  openGraph: {
    title: "K90 Rock",
    description:
      "Sitio oficial de la banda colombiana K90 - Proximo Evento de Reencuentro: Agosto 2024",
  },
  twitter: {
    title: "K90 Rock",
    description:
      "Sitio oficial de la banda colombiana K90 - Proximo Evento de Reencuentro: Agosto 2024",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=" bg-black bg-[url('/images/k90-pic.png')] bg-fixed bg-top bg-no-repeat md:bg-cover">
        {children}
      </body>
    </html>
  )
}
