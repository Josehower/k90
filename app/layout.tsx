import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: "JoseF",
  description: "JoseF - Personal Music Website",
  openGraph: {
    title: "JoseF - Personal Music Website",
    description: "Personal music collection and songs",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=" bg-theme-bg bg-fixed bg-top bg-no-repeat md:bg-cover">
        {children}
      </body>
    </html>
  )
}
