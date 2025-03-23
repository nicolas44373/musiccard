import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-black">
      {/* Textured background overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0wIDIwIEw0MCAyMCBNMjAgMCBMMjAgNDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-20 z-0"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/80 to-black z-0"></div>
      
      {/* Radial spotlight effect */}
      <div className="absolute inset-0 bg-radial-gradient from-red-600/20 via-transparent to-transparent z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Barra de navegación con efecto de vidrio */}
        <nav className="sticky top-0 backdrop-blur-md bg-black/70 text-white p-4 border-b border-red-900/30 shadow-lg z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">MusicCars</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-red-400 transition-colors duration-300">Inicio</Link>
              <Link href="#productos" className="hover:text-red-400 transition-colors duration-300">Productos</Link>
              <Link href="#contacto" className="hover:text-red-400 transition-colors duration-300">Contacto</Link>
            </div>
          </div>
        </nav>

        {/* Banner principal con efecto de resplandor */}
        <header className="container mx-auto py-20 px-4 text-center text-white relative overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>
          <h1 className="text-5xl font-bold mb-6 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">Los Mejores Estéreos para Tu Auto</h1>
          <p className="text-xl mb-8 text-gray-200">Calidad, potencia y estilo para una experiencia sonora incomparable</p>
          <button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            Ver Catálogo
          </button>
        </header>

        {/* Sección de productos destacados */}
        <section id="productos" className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">Nuestros Productos Destacados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Producto 1 - Con efecto de cristal y neón - Updated with detailed specs */}
            <div className="bg-gradient-to-br from-black/80 to-red-950/70 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm border border-red-900/30 group hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300">
              <div className="h-48 bg-black/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
                <img 
                  src="nasi.jpg" 
                  alt="Estéreo Pro X1" 
                  className="h-full w-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">CarPlay & Android Auto</h3>
                <div className="mb-4 text-gray-300 text-sm">
                  <ul className="space-y-1">
                    <li>• 4GB RAM + 64GB Almacenamiento</li>
                    <li>• Pantalla QLED 1288 x 720</li>
                    <li>• CPU ARM CORTEX A7 Quad-Core</li>
                    <li>• Bluetooth/WiFi/GPS/Mirror Link/USB</li>
                    <li>• Potencia máx: 4x60W con salida RCA</li>
                    <li>• Soporte para cámara inversa</li>
                  </ul>
                </div>
                <p className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">$1.111</p>
                <button className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-2 rounded transition duration-300 shadow-md">
                  Más Información
                </button>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="bg-gradient-to-br from-black/80 to-red-950/70 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm border border-red-900/30 group hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300">
              <div className="h-48 bg-black/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-md flex items-center justify-center shadow-inner group-hover:from-red-900 group-hover:to-black transition-all duration-500">
                  <span className="text-white text-lg font-semibold">SoundMax 4000</span>
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">SoundMax 4000</h3>
                <p className="mb-4 text-gray-300">Sistema de audio premium con conectividad avanzada y sonido envolvente</p>
                <p className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">$1.111</p>
                <button className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-2 rounded transition duration-300 shadow-md">
                  Más Información
                </button>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="bg-gradient-to-br from-black/80 to-red-950/70 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm border border-red-900/30 group hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300">
              <div className="h-48 bg-black/50 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-md flex items-center justify-center shadow-inner group-hover:from-red-900 group-hover:to-black transition-all duration-500">
                  <span className="text-white text-lg font-semibold">AutoTech 7.1</span>
                </div>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-300">AutoTech 7.1</h3>
                <p className="mb-4 text-gray-300">Sistema de entretenimiento completo con navegación integrada</p>
                <p className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">$1.111</p>
                <button className="w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-2 rounded transition duration-300 shadow-md">
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* New section - Detailed product specifications */}
        <section className="container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-black/80 to-red-950/60 backdrop-blur-sm p-8 rounded-lg border border-red-900/30 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">Especificaciones Completas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">CarPlay & Android Auto</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> 4 GB RAM + 64 GB de almacenamiento</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Pantalla QLED 1288 x 720</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Chips de CPU: ARM CORTEX A7 cuatro núcleos</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Bluetooth / WIFI / GPS / MIRROR LINK / USB</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Cámara inversa (no incluida)</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Potencia máxima: 4×60 W</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Salida RCA</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Formatos Compatibles</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Reproducción de Audio: MP3/WMA/WAV/OGG/FLAC/APE</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Reproducción de vídeo/imágenes: RM/RMVB/MP4/FLV/MKV/3GP/AVI/ASF/SWFMP1/MP2/JPG</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Sintonización Radio</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> Micrófono incorporado para llamadas manos libres</p>
                  <p className="flex items-start"><span className="text-red-500 mr-2">•</span> CarPlay y Android Auto incorporado</p>
                </div>
                
                <div className="mt-8">
                  <button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de características con efecto de vidrio */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDEiPjxwYXRoIGQ9Ik0wIDMwIEw2MCAzMCBNMzAgMCBMMzAgNjAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-white drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">¿Por qué elegir nuestros estéreos?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-black/40 to-red-950/30 backdrop-blur-sm rounded-lg border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-900 rounded-full mx-auto mb-4 flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                  <span className="text-white text-2xl">★</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Calidad Premium</h3>
                <p className="text-gray-300">Trabajamos sólo con las mejores marcas del mercado</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-black/40 to-red-950/30 backdrop-blur-sm rounded-lg border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-900 rounded-full mx-auto mb-4 flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Instalación Profesional</h3>
                <p className="text-gray-300">Servicio de instalación por técnicos certificados</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-black/40 to-red-950/30 backdrop-blur-sm rounded-lg border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-900 rounded-full mx-auto mb-4 flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Garantía Extendida</h3>
                <p className="text-gray-300">Todos nuestros productos incluyen garantía de 2 años</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-black/40 to-red-950/30 backdrop-blur-sm rounded-lg border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-900 rounded-full mx-auto mb-4 flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Precios Competitivos</h3>
                <p className="text-gray-300">La mejor relación calidad-precio del mercado</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de marcas con efecto de brillo */}
        <section className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">Nuestras Marcas</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-black/60 to-red-950/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 group">
              <p className="text-white font-bold group-hover:text-red-400 transition-colors duration-300">Pioneer</p>
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-black/60 to-red-950/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 group">
              <p className="text-white font-bold group-hover:text-red-400 transition-colors duration-300">Sony</p>
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-black/60 to-red-950/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 group">
              <p className="text-white font-bold group-hover:text-red-400 transition-colors duration-300">Kenwood</p>
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-black/60 to-red-950/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 group">
              <p className="text-white font-bold group-hover:text-red-400 transition-colors duration-300">JBL</p>
            </div>
            <div className="w-32 h-32 bg-gradient-to-br from-black/60 to-red-950/40 backdrop-blur-sm rounded-lg flex items-center justify-center border border-red-900/20 shadow-lg hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all duration-300 group">
              <p className="text-white font-bold group-hover:text-red-400 transition-colors duration-300">Alpine</p>
            </div>
          </div>
        </section>

        {/* Sección de contacto con efecto de vidrio */}
        <section id="contacto" className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/40 to-black z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+')] opacity-30 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-center text-white drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]">Contáctanos</h2>
            
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-black/80 to-red-950/60 backdrop-blur-sm p-8 rounded-lg border border-red-900/30 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Información de Contacto</h3>
                  <p className="text-gray-300 mb-2 flex items-center"><span className="mr-2">📱</span> Teléfono: (123) 456-7890</p>
                  <p className="text-gray-300 mb-2 flex items-center"><span className="mr-2">✉️</span> Email: info@autostereo.com</p>
                  <p className="text-gray-300 mb-2 flex items-center"><span className="mr-2">🏪</span> Dirección: Av. Principal #123</p>
                  <p className="text-gray-300 flex items-center"><span className="mr-2">⏰</span> Horario: Lun-Sáb 9:00 - 19:00</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">Envíanos un Mensaje</h3>
                  <form>
                    <div className="mb-4">
                      <input type="text" placeholder="Nombre" className="w-full p-2 rounded bg-black/70 text-white border border-red-900/30 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition duration-300" />
                    </div>
                    <div className="mb-4">
                      <input type="email" placeholder="Email" className="w-full p-2 rounded bg-black/70 text-white border border-red-900/30 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition duration-300" />
                    </div>
                    <div className="mb-4">
                      <textarea placeholder="Mensaje" rows={4} className="w-full p-2 rounded bg-black/70 text-white border border-red-900/30 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition duration-300"></textarea>
                    </div>
                    <button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-2 px-6 rounded transition duration-300 shadow-[0_0_10px_rgba(220,38,38,0.3)] hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer con efecto de vidrio */}
        <footer className="bg-black/90 backdrop-blur-md text-white py-8 border-t border-red-900/30">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 AutoStereo Express. Todos los derechos reservados.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">WhatsApp</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}