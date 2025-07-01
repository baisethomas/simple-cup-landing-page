import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Simple Cup",
  description: "Your Perfect Coffee, Every Time.",
  icons: {
    icon: "/simple-cup-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
