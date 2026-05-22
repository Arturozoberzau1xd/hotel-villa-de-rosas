//import Image from 'next/image';
import Link from 'next/link';

// Datos de las habitaciones
const HABITACIONES = [
  {
    id: 1,
    nombre: "Habitacion sencilla",
    precio: "$600",
    descripcion: "Espacio acogedor con cama King Size, televisión de pantalla plana, una cómoda silla de descanso y detalles pensados para tu confort.",
    imagen: "/images/sencilla.jpg"
  },
  {
    id: 2,
    nombre: "Suite",
    precio: "$1,200",
    descripcion: "Dos camas matrimoniales, excelente iluminación natural y amenidades premium, con vista hacia el exterior.",
    imagen: "/images/premium.jpg"
  },
  {
    id: 3,
    nombre: "Habitacion doble",
    precio: "$1,800",
    descripcion: "Perfecta para estancias de negocios o parejas. Área de trabajo.",
    imagen: "/images/doble.jpg"
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. SECCIÓN HERO */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/principalusable.jpg" 
            alt="Lobby Hotel Villa de Rosas en Huasca de Ocampo" 
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        <div className="relative z-20 text-center max-w-3xl mx-auto px-6">
          <span className="text-insignia font-bold tracking-widest text-xs uppercase block mb-3 drop-shadow">
            Bienvenidos a la elegancia
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Tu refugio de descanso
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-light mb-8 max-w-2xl mx-auto drop-shadow-sm">
            Descubre una experiencia hospitalaria única en Huasca de Ocampo donde el confort se encuentra con el servicio exclusivo.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#habitaciones" className="bg-insignia hover:bg-opacity-90 text-slate-950 px-8 py-3 rounded-md font-bold transition-all shadow-md shadow-insignia/20">
              Ver Habitaciones
            </a>
            {/* BOTÓN CORREGIDO: Ahora te desliza a la sección de historia */}
            <a href="#historia" className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-colors inline-block">
              Saber Más
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE BIENVENIDA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Una Estancia Inolvidable</h2>
        <div className="w-16 h-1 bg-insignia mx-auto mb-6 rounded-full" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Ubicado en una zona privilegiada, nuestro hotel ofrece espacios diseñados para tu relajación absoluta. Desde suites ejecutivas hasta atención personalizada las 24 horas.
        </p>
      </section>

      {/* 2.5 SECCIÓN DE HISTORIA (NUEVA - IDEAL PARA EL BOTÓN Y EL SEO) */}
      <section id="historia" className="bg-white dark:bg-slate-950 py-20 scroll-mt-20 border-t border-slate-100 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-insignia font-bold tracking-widest text-xs uppercase block">Nuestra Tradición</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Hotel Villa de Rosas</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              Nacido en el corazón de **Huasca de Ocampo**, el primer Pueblo Mágico de México, el Hotel Villa de Rosas combina la rica arquitectura tradicional de la región con las comodidades de la hotelería moderna.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              Iniciamos como un pequeño refugio familiar enfocado en dar hospitalidad a los viajeros que buscaban explorar los Prismas Basálticos y los misteriosos bosques de Hidalgo. Hoy, nos enorgullece ofrecer un espacio de paz premium con atención de primer nivel, manteniendo siempre nuestra esencia cálida y atenta.
            </p>
          </div>
          {/* Imagen conceptual de la historia del lugar */}
          <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/fondo.jpg" 
              alt="Historia y entorno de Huasca de Ocampo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN SECTOR DE HABITACIONES */}
      <section id="habitaciones" className="bg-slate-100 dark:bg-slate-900/50 py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-insignia font-bold tracking-wider text-xs uppercase block mb-2">Exclusividad</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Nuestras Habitaciones</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mt-4 md:mt-0">
              Cada habitación ha sido decorada al detalle para garantizar una atmósfera de paz, privacidad y lujo tecnológico.
            </p>
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {HABITACIONES.map((room) => (
              <div key={room.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-slate-100 dark:border-slate-800">
                
                {/* Contenedor de la Imagen */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.imagen} 
                    alt={room.nombre} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-sm text-insignia text-sm font-bold px-3 py-1 rounded-md">
                    {room.precio} <span className="text-white text-xs font-normal">/ noche</span>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-insignia transition-colors">
                    {room.nombre}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6">
                    {room.descripcion}
                  </p>
                  
                  <Link href="/contacto" className="w-full border border-slate-200 dark:border-slate-700 hover:border-insignia dark:hover:border-insignia hover:bg-insignia hover:text-slate-950 text-slate-700 dark:text-slate-300 font-semibold py-2.5 rounded-xl text-sm transition-all text-center block">
                    Detalles e Información
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {/* BOTÓN "VER MÁS" */}
          <div className="text-center">
            <Link 
              href="/habitaciones" 
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-sm tracking-wider uppercase transition-all shadow-md group"
            >
              Ver todas las habitaciones
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3.5 SECCIÓN DE SERVICIOS E INSTALACIONES */}
      <section id="servicios" className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-insignia font-bold tracking-widest text-xs uppercase block mb-2">Comodidades</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Servicios Incluidos</h2>
            <div className="w-12 h-1 bg-insignia mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-insignia/50 transition-colors group">
              <div className="text-4xl mb-4 text-insignia">📶</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-insignia transition-colors">Internet Gratis</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Wi-Fi de alta velocidad y fibra óptica disponible en todas las habitaciones y áreas comunes del hotel.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-insignia/50 transition-colors group">
              <div className="text-4xl mb-4 text-insignia">📺</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-insignia transition-colors">Smart TV</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pantallas de alta definición en cada suite con acceso a tus aplicaciones de streaming favoritas como Netflix y YouTube.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-insignia/50 transition-colors group">
              <div className="text-4xl mb-4 text-insignia">🚿</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-insignia transition-colors">Agua Caliente 24/7</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sistema de alta presión y agua caliente constante en regaderas y jacuzzis para tu relajación absoluta.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-insignia/50 transition-colors group">
              <div className="text-4xl mb-4 text-insignia">🚗</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-insignia transition-colors">Estacionamiento Incluido</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tu vehículo estará seguro en nuestro estacionamiento privado y vigilado las 24 horas, sin costo adicional.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-insignia/50 transition-colors group">
              <div className="text-4xl mb-4 text-insignia">🍹</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-insignia transition-colors">Servicio de Coctelería</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Disfruta de una selecta variedad de bebidas preparadas por nuestros bartenders profesionales directamente en tu habitación o terraza.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-insignia/50 transition-colors group">
              <div className="text-4xl mb-4 text-insignia">🛎️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-insignia transition-colors">Recepción 24 Horas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nuestro equipo está disponible en todo momento para atender cualquier solicitud, darte recomendaciones o ayudarte con tu check-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE TESTIMONIOS */}
      <section id="reseñas" className="bg-white dark:bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-insignia font-bold tracking-widest text-xs uppercase block mb-2">Opiniones</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Lo Que Dicen Nuestros Huéspedes</h2>
            <div className="w-12 h-1 bg-insignia mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-lg mb-4">★★★★★</div>
                <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed">
                  &ldquo;La atención desde que llegamos fue increíble. Las habitaciones están impecables y el detalle de la tecnología en la Smart TV y el internet volando hizo mi estancia de trabajo súper amena. ¡El verde de su diseño me encantó!&quot;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200/60 dark:border-slate-800 pt-4">
                <div className="w-10 h-10 bg-insignia/20 rounded-full flex items-center justify-center font-bold text-slate-800 dark:text-insignia">
                  CA
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Carlos Andrade</h4>
                  <span className="text-xs text-slate-400">Huésped Ejecutivo</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-lg mb-4">★★★★★</div>
                <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed">
                  &ldquo;Buscábamos un lugar para relajarnos el fin de semana y la Master Suite superó las expectativas. El servicio de coctelería a la habitación es un 10 de 10. Definitivamente volveremos.&quot;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200/60 dark:border-slate-800 pt-4">
                <div className="w-10 h-10 bg-insignia/20 rounded-full flex items-center justify-center font-bold text-slate-800 dark:text-insignia">
                  MR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Mariana Reyes</h4>
                  <span className="text-xs text-slate-400">Viaje de Pareja</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-amber-400 text-lg mb-4">★★★★★</div>
                <p className="text-slate-600 dark:text-slate-300 italic text-sm leading-relaxed">
                  &ldquo;Excelente relación calidad-precio. El estacionamiento incluido nos dio mucha tranquilidad ya que viajamos en coche. El agua caliente de la regadera tiene muy buena presión. Muy recomendado.&quot;
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-200/60 dark:border-slate-800 pt-4">
                <div className="w-10 h-10 bg-insignia/20 rounded-full flex items-center justify-center font-bold text-slate-800 dark:text-insignia">
                  JL
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Juan Luis Gómez</h4>
                  <span className="text-xs text-slate-400">Viaje Familiar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}