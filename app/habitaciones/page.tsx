'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Reordené el array para que la Suite quede al final (id: 3) y se pueda centrar abajo
const TODAS_LAS_HABITACIONES = [
  {
    id: 1,
    nombre: "Habitación sencilla",
    precio: "$650",
    capacidad: "2 Adultos",
    camas: "1 King Size",
    descripcion: "Espacio acogedor con cama King Size, televisión de pantalla plana, una cómoda silla de descanso y detalles pensados para tu confort.",
    imagenes: [
      "/images/se1.jpg",
      "/images/se2.jpg",
      "/images/se3.jpg"
    ]
  },
  {
    id: 2,
    nombre: "Habitación doble",
    precio: "$800",
    capacidad: "4 Adultos",
    camas: "2 Matrimoniales",
    descripcion: "Dos camas matrimoniales, excelente iluminación natural y amenidades premium, con vista hacia el exterior.",
    imagenes: [
      "/images/do1.jpg",
      "/images/do2.jpg",
      "/images/do3.jpg"
    ]
  },
  {
    id: 3, // La Suite ahora está al final para centrarse limpia en la segunda fila
    nombre: "Suite",
    precio: "$900",
    capacidad: "4 Adultos",
    camas: "1 King Size y 1 Matrimonial",
    descripcion: "Amplia y acogedora, equipada con una cama King Size y una cama matrimonial, ideal para familias o grupos que buscan comodidad y espacio.",
    imagenes: [
      "/images/su1.jpg",
      "/images/su2.jpg",
      "/images/su3.jpg"
    ]
  },
];

export default function HabitacionesPage() {
  const [imagenesActivas, setImagenesActivas] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0
  });

  const cambiarImagen = (roomId: number, direccion: 'prev' | 'next', totalImagenes: number) => {
    setImagenesActivas((prev) => {
      const currentIndex = prev[roomId] || 0;
      let newIndex = currentIndex;

      if (direccion === 'next') {
        newIndex = (currentIndex + 1) % totalImagenes;
      } else {
        newIndex = (currentIndex - 1 + totalImagenes) % totalImagenes;
      }

      return { ...prev, [roomId]: newIndex };
    });
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-28 pb-12 transition-all duration-700 ease-out animate-in fade-in slide-in-from-bottom-4">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16 mt-6">
          <span className="text-insignia font-bold tracking-widest text-xs uppercase block mb-2">Nuestras Opciones</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Habitaciones & Suites</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Explora nuestros espacios diseñados meticulosamente para ofrecerte el máximo confort y privacidad durante tu estancia en Huasca de Ocampo.
          </p>
        </div>

        {/* Grid de Habitaciones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TODAS_LAS_HABITACIONES.map((room) => {
            const fotoActual = imagenesActivas[room.id] || 0;
            // Detectamos si es la Suite para meterle las clases de centrado dinámico
            const esSuite = room.id === 3;

            return (
              <div 
                key={room.id} 
                className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row group transition-all w-full ${
                  esSuite ? 'lg:col-span-2 lg:max-w-[calc(50%-16px)] lg:mx-auto' : ''
                }`}
              >
                
                {/* Mitad Izquierda: Carousel */}
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden min-h-[260px]">
                  <img 
                    src={room.imagenes[fotoActual]} 
                    alt={`${room.nombre} - Vista ${fotoActual + 1}`} 
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Flechas del Slider */}
                  <button 
                    type="button"
                    onClick={() => cambiarImagen(room.id, 'prev', room.imagenes.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-insignia hover:text-slate-950 text-white p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all z-20"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button 
                    type="button"
                    onClick={() => cambiarImagen(room.id, 'next', room.imagenes.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-950/60 hover:bg-insignia hover:text-slate-950 text-white p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all z-20"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Dots del Slider */}
                  <div className="absolute bottom-4 right-4 flex gap-1 z-20 bg-slate-950/40 backdrop-blur-sm px-2 py-1 rounded-full">
                    {room.imagenes.map((_, idx) => (
                      <span 
                        key={idx} 
                        className={`h-1 rounded-full transition-all ${
                          idx === fotoActual ? 'w-3 bg-insignia' : 'w-1 bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Mitad Derecha: Detalles */}
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-insignia transition-colors">
                      {room.nombre}
                    </h3>
                    
                    <p className="text-2xl font-black text-insignia mb-3">
                      {room.precio} <span className="text-xs text-slate-400 font-normal">/ noche</span>
                    </p>

                    <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-3 mb-4 leading-relaxed">
                      {room.descripcion}
                    </p>
                    
                    {/* Características */}
                    <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-4">
                      <p>👥 <span className="font-semibold text-slate-700 dark:text-slate-300">Capacidad:</span> {room.capacidad}</p>
                      <p>🛏️ <span className="font-semibold text-slate-700 dark:text-slate-300">Camas:</span> {room.camas}</p>
                      <p>📶 <span className="font-semibold text-slate-700 dark:text-slate-300">Incluye:</span> Wi-Fi, Smart TV, Agua Caliente</p>
                    </div>
                  </div>

                  <Link 
                    href="/contacto" 
                    className="w-full mt-6 bg-slate-900 dark:bg-slate-800 hover:bg-insignia hover:text-slate-950 text-white font-bold py-3 rounded-xl text-xs tracking-wider uppercase transition-all text-center block"
                  >
                    Reservar esta Habitación
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}