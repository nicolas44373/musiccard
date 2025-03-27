'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { Star, Settings, Shield, DollarSign, Menu, X, ChevronLeft, ChevronRight, Send as SendIcon } from 'lucide-react';
import type { ChangeEvent, FormEvent } from 'react';

// Constants moved outside component to prevent re-creation on each render
const PRODUCTS = [
  {
    name: "CarPlay & Android Auto",
    image: "/nasi.jpg",
    description: "Sistema multimedia avanzado con conectividad inteligente",
    specs: [
      "4GB RAM + 64GB Almacenamiento",
      "Pantalla QLED 1288 x 720",
      "CPU ARM CORTEX A7 Quad-Core",
      "Bluetooth/WiFi/GPS/Mirror Link"
    ],
    
  },
  {
    name: "CreeLed IR100 Premium",
    image: "/creled.jpg",
    description: "Sistema de iluminación de alto rendimiento",
    specs: [
      "Tecnología LED de última generación",
      "Alta luminosidad y eficiencia energética",
      "Diseño resistente y duradero",
      "Múltiples modos de iluminación"
    ],
   
  },
  {
    name: "The Ultra Sum R8 Premium",
    image: "/creled2.jpg",
    description: "Sistema de sonido premium de alta fidelidad",
    specs: [
      "Sonido envolvente de alta definición",
      "Amplificador de potencia integrado",
      "Conectividad Bluetooth avanzada",
      "Diseño elegante y compacto"
    ],
    
  },
  {
    name: "CreeLed J10 Intermedio",
    image: "/creled3.jpg",
    description: "Solución de iluminación equilibrada",
    specs: [
      "Rendimiento medio con excelente costo-beneficio",
      "Diseño compacto",
      "Múltiples opciones de montaje",
      "Compatibilidad universal"
    ],
    
  },
  {
    name: "Luxked Y3 Económicas",
    image: "/creled4.jpg",
    description: "Opción accesible para iluminación básica",
    specs: [
      "Económicas sin sacrificar calidad",
      "Instalación sencilla",
      "Durabilidad garantizada",
      "Perfectas para usuarios principiantes"
    ],
    
  }
];

const WORK_IMAGES = {
  focus: ["/focus.jpg", "/focus2.jpg"],
  amarok: ["/amarok.jpg", "/amarok2.jpg"],
  ranger: ["/trabajo2.jpg", "/trabajo2.1.jpg"],
  corolla: ["/corolla.jpg", "/corolla2.jpg"]
};

const BRANDS = [
  { name: "Pioneer", logo: "/pioneer-4.svg" },
  { name: "Sony", logo: "/sony-2.svg" }, 
  { name: "JBL", logo: "/jbl-2-logo.svg" },
  { name: "Alpine", logo: "/alpine-1.svg" }
];

const FEATURES = [
  { 
    icon: <Star className="text-red-500" size={36} />, 
    title: "Calidad Premium", 
    description: "Los mejores productos seleccionados" 
  },
  { 
    icon: <Settings className="text-red-500" size={36} />, 
    title: "Instalación Profesional", 
    description: "Técnicos certificados" 
  },
  { 
    icon: <Shield className="text-red-500" size={36} />, 
    title: "Garantía Extendida", 
    description: "" 
  },
  { 
    icon: <DollarSign className="text-red-500" size={36} />, 
    title: "Precios Competitivos", 
    description: "La mejor relación calidad-precio" 
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndices, setCurrentImageIndices] = useState({
    focus: 0,
    amarok: 0,
    ranger: 0,
    corolla: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    description: ''
  });

  // Memoized image navigation functions
  const createImageNavigationHandlers = useCallback((imageKey: keyof typeof WORK_IMAGES) => {
    const images = WORK_IMAGES[imageKey];
    
    const nextImage = () => {
      setCurrentImageIndices(prev => ({
        ...prev,
        [imageKey]: (prev[imageKey] + 1) % images.length
      }));
    };

    const prevImage = () => {
      setCurrentImageIndices(prev => ({
        ...prev,
        [imageKey]: prev[imageKey] === 0 ? images.length - 1 : prev[imageKey] - 1
      }));
    };

    return { nextImage, prevImage };
  }, []);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const message = `Hola MusicCars! 

Nombre: ${formData.name}
Teléfono: ${formData.phone}
Vehículo: ${formData.vehicle}

Descripción:
${formData.description}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5493816961911'; 
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }, [formData]);

  const sendProductInquiry = useCallback((product: typeof PRODUCTS[0]) => {
    const message = `Hola MusicCars! 

Estoy interesado en el producto: ${product.name}

Detalles del Producto:
- Descripción: ${product.description}


Especificaciones:
${product.specs.map(spec => `- ${spec}`).join('\n')}

Por favor, ¿pueden proporcionarme más información sobre este producto?`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5493816961911'; 
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }, []);

  // Memoized navigation handlers for each section
  const {
    nextImage: nextFocusImage,
    prevImage: prevFocusImage
  } = useMemo(() => createImageNavigationHandlers('focus'), [createImageNavigationHandlers]);

  const {
    nextImage: nextRangerImage,
    prevImage: prevRangerImage
  } = useMemo(() => createImageNavigationHandlers('ranger'), [createImageNavigationHandlers]);

  const {
    nextImage: nextCorollaImage,
    prevImage: prevCorollaImage
  } = useMemo(() => createImageNavigationHandlers('corolla'), [createImageNavigationHandlers]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-red-900/30">
        <div className="container mx-auto flex justify-between items-center p-4 max-w-7xl">
          <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
            MusicCars
          </h1>
          
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <Link href="/" className="hover:text-red-400 transition-colors text-sm lg:text-base">Inicio</Link>
            <Link href="#productos" className="hover:text-red-400 transition-colors text-sm lg:text-base">Productos</Link>
            <Link href="#contacto" className="hover:text-red-400 transition-colors text-sm lg:text-base">Contacto</Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white hover:text-red-400"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg">
            <div className="flex flex-col items-center space-y-4 p-6">
              <Link 
                href="/" 
                className="hover:text-red-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Inicio
              </Link>
              <Link 
                href="#productos" 
                className="hover:text-red-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Productos
              </Link>
              <Link 
                href="#contacto" 
                className="hover:text-red-400 transition-colors"
                onClick={toggleMobileMenu}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </nav>
  
      {/* Hero Section */}
      <header className="relative min-h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/50 to-black opacity-80 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            Transforma Tu Experiencia Auditiva
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 px-4 sm:px-0">
            Tecnología de punta para tu vehiculo
          </p>
          <Link href="/productos">
  <button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105">
    Explora Nuestros Productos
  </button>
</Link>
        </div>
      </header>
  
      {/* Vehicle Installation Sections */}
      {[
        { 
          title: "Ford Focus", 
          images: WORK_IMAGES.focus, 
          imageIndex: currentImageIndices.focus,
          nextImage: nextFocusImage,
          prevImage: prevFocusImage 
        },
        { 
          title: "Amarok", 
          images: WORK_IMAGES.amarok, 
          imageIndex: currentImageIndices.amarok,
          nextImage: () => {}, // Placeholder, implement similar to others
          prevImage: () => {} 
        },
        { 
          title: "Multimedia Ford Ranger", 
          images: WORK_IMAGES.ranger, 
          imageIndex: currentImageIndices.ranger,
          nextImage: nextRangerImage,
          prevImage: prevRangerImage 
        },
        { 
          title: "Multimedia Toyota Corolla", 
          images: WORK_IMAGES.corolla, 
          imageIndex: currentImageIndices.corolla,
          nextImage: nextCorollaImage,
          prevImage: prevCorollaImage 
        }
      ].map((section, index) => (
        <section key={index} className="container mx-auto py-12 sm:py-16 px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            {section.title}
          </h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={section.images[section.imageIndex]} 
                alt={`Trabajo ${section.imageIndex === 0 ? 'Antes' : 'Después'}`} 
                className="w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[800px] object-cover"
              />
              {section.images.length > 1 && (
                <>
                  <button 
                    onClick={section.prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-1 sm:p-2 hover:bg-red-900/50 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <button 
                    onClick={section.nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-1 sm:p-2 hover:bg-red-900/50 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </>
              )}
            </div>
            {section.images.length > 1 && (
              <div className="text-center mt-2 sm:mt-4">
                <p className="text-xs sm:text-base text-gray-300">
                  {section.imageIndex === 0 ? 'Antes' : 'Después'} de nuestra instalación
                </p>
              </div>
            )}
          </div>
        </section>
      ))}
  
      {/* Products Section */}
      <section id="productos" className="container mx-auto py-12 sm:py-16 px-4 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
          Nuestros Productos Destacados
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((product, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-black/80 to-red-950/70 rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 group"
            >
              <div className="h-48 sm:h-56 md:h-64 bg-black/50 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">{product.description}</p>
                <ul className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 space-y-1">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-red-500 mr-2">•</span>{spec}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">
                    
                  </span>
                  <button 
                    onClick={() => sendProductInquiry(product)}
                    className="bg-gradient-to-r from-red-700 to-red-900 text-white text-xs sm:text-base px-3 sm:px-4 py-2 rounded-lg hover:from-red-800 hover:to-red-950 transition-colors"
                  >
                    Enviar Consulta
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  
      {/* Brands Section */}
      <section className="container mx-auto py-12 sm:py-16 px-4 max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
          Marcas Asociadas
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {BRANDS.map((brand, index) => (
            <div 
              key={index} 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-black/60 to-red-950/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-red-900/20 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 group"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-16 max-h-16 sm:max-w-20 sm:max-h-20 md:max-w-24 md:max-h-24 opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>
  
      {/* Features Section */}
      <section className="bg-black/90 py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {FEATURES.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-4 sm:p-6 bg-black/50 rounded-lg hover:bg-red-950/20 transition-colors group"
              >
                <div className="mb-2 sm:mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* Contact Section */}
      <section id="contacto" className="container mx-auto py-12 sm:py-16 px-4 max-w-7xl">
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-black/80 to-red-950/70 rounded-lg shadow-2xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
              Contáctanos
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">
                    Nombre Completo
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border border-red-900/30 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">
                    Número de Celular
                  </label>
                  <input 
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black/40 border border-red-900/30 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    placeholder="10 dígitos"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="vehicle" className="block text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">
                  Marca y Modelo de Vehículo
                </label>
                <input 
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-black/40 border border-red-900/30 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="Ej. Toyota Corolla 2020"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-xs sm:text-sm text-gray-300 mb-1 sm:mb-2">
                  Descripción de tu Consulta
                </label>
                <textarea 
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full bg-black/40 border border-red-900/30 rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                  placeholder="Describe los detalles de tu consulta o requerimiento"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-red-700 to-red-900 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:from-red-800 hover:to-red-950 transition-all duration-300 flex items-center justify-center mx-auto space-x-2 hover:scale-105 transform text-xs sm:text-base"
                >
                  <SendIcon className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  
      {/* Footer Section */}
      <footer className="bg-black/90 text-white py-6 sm:py-8 border-t border-red-900/30">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <p className="text-xs sm:text-sm mb-4">&copy; 2025 MusicCars Express. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-3 sm:space-x-6">
            <Link href="#" className="text-xs sm:text-base hover:text-red-400 transition-colors">Política de Privacidad</Link>
            <Link href="#" className="text-xs sm:text-base hover:text-red-400 transition-colors">Términos de Servicio</Link>
            <Link href="#contacto" className="text-xs sm:text-base hover:text-red-400 transition-colors">Contacto</Link>
          </div>
        </div>
      </footer>
    </div>
  );
  
}

