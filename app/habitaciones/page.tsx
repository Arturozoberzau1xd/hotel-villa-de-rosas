import Link from 'next/link';

// Aquí podrías listar un catálogo mucho más amplio en el futuro
const TODAS_LAS_HABITACIONES = [
  {
    id: 1,
    nombre: "Master Suite Superior",
    precio: "$2,400",
    capacidad: "2 Adultos",
    camas: "1 King Size",
    imagen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    nombre: "Junior Suite Ejecutiva",
    precio: "$1,800",
    capacidad: "2 Adultos",
    camas: "1 Queen Size",
    imagen: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    nombre: "Habitación Estándar Deluxe",
    precio: "$1,200",
    capacidad: "4 Adultos",
    camas: "2 Matrimoniales",
    imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    nombre: "Villa Familiar Rosas",
    precio: "$4,500",
    capacidad: "6 Adultos",
    camas: "3 King Size",
    imagen: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop"
  }
];

export default function HabitacionesPage() {
  return (
    //<div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12">
    // Cambia el div principal por este que tiene animación de entrada suave:
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen py-12 transition-all duration-700 ease-out animate-in fade-in slide-in-from-bottom-4">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado de la página */}
        <div className="text-center mb-16 mt-6">
          <span className="text-insignia font-bold tracking-widest text-xs uppercase block mb-2">Nuestras Opciones</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Habitaciones & Suites</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Explora nuestros espacios diseñados meticulosamente para ofrecerte el máximo confort y privacidad durante tu estancia.
          </p>
        </div>

        {/* Grid Completo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TODAS_LAS_HABITACIONES.map((room) => (
            <div key={room.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row group">
              
              {/* Mitad Izquierda: Imagen */}
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={room.imagen} 
                  alt={room.nombre} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Mitad Derecha: Detalles */}
              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{room.nombre}</h3>
                  </div>
                  
                  <p className="text-2xl font-black text-insignia mb-4">{room.precio} <span className="text-xs text-slate-400 font-normal">/ noche</span></p>
                  
                  {/* Características breves */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
                    <p>👥 <span className="font-semibold">Capacidad:</span> {room.capacidad}</p>
                    <p>🛏️ <span className="font-semibold">Camas:</span> {room.camas}</p>
                    <p>📶 <span className="font-semibold">Incluye:</span> Wi-Fi de alta velocidad, AC, Smart TV</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-slate-900 dark:bg-slate-800 hover:bg-insignia hover:text-slate-950 text-white font-bold py-2.5 rounded-xl text-xs tracking-wider uppercase transition-all">
                  Reservar esta Suite
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}