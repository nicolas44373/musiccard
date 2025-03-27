import './globals.css'
// src/app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MusicCars Express - Soluciones Multimedia Automotrices',
  description: 'Transforma tu experiencia auditiva con tecnología de punta para tu vehículo. Instalación profesional de sistemas multimedia, CarPlay, Android Auto, y más.',
  keywords: [
    'multimedia automotriz', 
    'CarPlay', 
    'Android Auto', 
    'instalación de equipos de sonido', 
    'sistemas multimedia para autos', 
    'mejora de audio vehicular'
  ],
  icons: {
    icon: [
      { url: '/logo16.jpg', sizes: '16x16', type: 'image/jpg' },
      { url: '/logo32.jpg', sizes: '32x32', type: 'image/jpg' },
      { url: '/logo48.jpg', sizes: '48x48', type: 'image/jpg' }
    ]
  },

  openGraph: {
    title: 'MusicCars Express - Tecnología Automotriz de Última Generación',
    description: 'Descubre soluciones multimedia premium para transformar tu experiencia de conducción.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://musiccarz.com/',
    siteName: 'MusicCars Express',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'MusicCars Express - Soluciones Multimedia Automotrices'
      }
    ]
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'arrUYB7_VyfmPA3HJeZHKBcG87rIbvCimHFrG3Qfu4g'
  },
  alternates: {
    canonical: 'https://musiccarz.com/'
  },
  applicationName: 'MusicCars Express',
  category: 'Automotive Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
