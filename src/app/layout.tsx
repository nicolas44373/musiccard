import './globals.css'
import { ReactNode } from 'react';

export const metadata = {
  title: 'AutoStereo Express - Estéreos para Autos',
  description: 'Venta de estéreos y equipos de sonido para autos de alta calidad',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}