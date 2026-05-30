import '@/styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'Coaches'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-slate-800">
        {children}
      </body>
    </html>
  )
}
