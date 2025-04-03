import './globals.css'
// src/app/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MusicCars Express - Instalación Profesional de Multimedia Automotriz | CarPlay | Android Auto',
  description: 'Especialistas en instalación profesional de sistemas multimedia, CarPlay, Android Auto para Ford, Toyota, Volkswagen, Amarok, Fiat y todas las marcas. Servicio técnico y reparación de pantallas táctiles en Buenos Aires.',
  keywords: [
    'multimedia automotriz', 
    'CarPlay', 
    'Android Auto', 
    'instalación de equipos de sonido', 
    'sistemas multimedia para autos', 
    'mejora de audio vehicular',
    'pantalla táctil Ford Focus',
    'multimedia Amarok',
    'multimedia Toyota Corolla',
    'reparación pantalla táctil',
    'instalación luces LED',
    'multimedia Fiat',
    'servicio técnico multimedia automotriz',
    'actualización sistema multimedia',
    'mejora audio auto',
    'pantallas táctiles autos'
  ],
  icons: {
    icon: [
      { url: '/logo16.jpg', sizes: '16x16', type: 'image/jpg' },
      { url: '/logo32.jpg', sizes: '32x32', type: 'image/jpg' },
      { url: '/logo48.jpg', sizes: '48x48', type: 'image/jpg' }
    ]
  },

  openGraph: {
    title: 'MusicCars Express - Tecnología Multimedia Automotriz Profesional | Buenos Aires',
    description: 'Instalación y servicio técnico de sistemas multimedia, CarPlay, Android Auto y pantallas táctiles para todas las marcas de vehículos. Transformamos tu experiencia de conducción con tecnología de punta.',
    type: 'website',
    locale: 'es_AR',
    url: 'https://musiccarz.com/',
    siteName: 'MusicCars Express',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'MusicCars Express - Soluciones Multimedia Automotrices en Buenos Aires'
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
  creator: 'MusicCars Express Team',
  publisher: 'MusicCars Express',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Agregando schema markup para SEO */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "MusicCars Express",
              "description": "Instalación profesional de sistemas multimedia, CarPlay, Android Auto y más para todo tipo de vehículos.",
              "url": "https://musiccarz.com/",
              "logo": "https://musiccarz.com/logo.jpg",
              "image": "https://musiccarz.com/logo.jpg",
              "telephone": "+543816961911", // Reemplaza con tu número real
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alderetes", // Reemplaza con tu dirección real
                "addressLocality": "Buenos Aires",
                "addressRegion": "San Miguel de Tucuman",
                "postalCode": "4178", // Reemplaza con tu código postal real
                "addressCountry": "AR"
              },
              
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/musiccarsexpress", // Reemplaza con tus enlaces reales
                "https://www.instagram.com/musiccarsexpress"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}