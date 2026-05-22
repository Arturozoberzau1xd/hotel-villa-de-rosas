'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Configuración de los datos del dueño
  const telefonoHotel = "+527717920632"; // Sin espacios para el protocolo tel:
  const mensajeWhatsapp = encodeURIComponent("¡Hola! Me interesa realizar una reservación en el Hotel Villa de Rosas. Vengo de su página web.");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-900 backdrop-saturate-150">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 z-50">
          <Image
            src="/images/logousable.jpg" 
            alt="Logo Hotel Rosas" 
            width={48} 
            height={48} 
            className="object-contain"
          />
          <span className="text-2xl font-bold tracking-widest text-slate-950 dark:text-white leading-tight">
            Villa de<br/>ROSAS
          </span>
        </Link>

        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-insignia transition-colors">
            INICIO
          </Link>
          <Link href="/habitaciones" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-insignia transition-colors">
            HABITACIONES
          </Link>
          <Link href="/#servicios" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-insignia transition-colors">
            SERVICIOS
          </Link>
          <Link href="/#reseñas" className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-insignia transition-colors">
            RESEÑAS
          </Link>
          {/* BOTÓN CONTACTO ESCRITORIO: Abre WhatsApp directamente */}
          <a 
            href={`https://wa.me/${telefonoHotel}?text=${mensajeWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-insignia transition-colors"
          >
            CONTACTO
          </a>
        </div>

        {/* BOTÓN RESERVAR ESCRITORIO: Dispara llamada telefónica */}
        <div className="hidden md:block">
          <a 
            href={`tel:${telefonoHotel}`}
            className="bg-insignia text-slate-950 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-opacity-90 transition-all shadow-md shadow-insignia/20 block text-center"
          >
            RESERVAR
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA MÓVIL */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 rounded transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-slate-950 dark:bg-white'
          }`} />
          <span className={`w-6 h-0.5 rounded transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 bg-white' : 'bg-slate-950 dark:bg-white'
          }`} />
          <span className={`w-6 h-0.5 rounded transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-slate-950 dark:bg-white'
          }`} />
        </button>

      </div>

      {/* 1. OVERLAY OSCURO Y DESENFOCADO */}
      <div 
        onClick={closeMenu}
        className={`fixed inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-500 md:hidden z-30 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* 2. MENÚ LATERAL PREMIUM */}
      <div 
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.65), rgba(2, 6, 23, 0.95)), url('/images/rosasusable.jpg')` 
        }}
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[340px] bg-cover bg-center shadow-2xl flex flex-col justify-center pl-10 gap-8 transition-transform duration-500 ease-in-out z-40 md:hidden border-l border-white/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 text-lg font-bold tracking-wider">
          <Link href="/" onClick={closeMenu} className="text-white hover:text-insignia transition-colors text-left">
            INICIO
          </Link>
          <Link href="/habitaciones" onClick={closeMenu} className="text-white hover:text-insignia transition-colors text-left">
            HABITACIONES
          </Link>
          <Link href="/#servicios" onClick={closeMenu} className="text-white hover:text-insignia transition-colors text-left">
            SERVICIOS
          </Link>
          <Link href="/#reseñas" onClick={closeMenu} className="text-white hover:text-insignia transition-colors text-left">
            RESEÑAS
          </Link>
          
          {/* BOTÓN CONTACTO MÓVIL (WhatsApp) */}
          <a 
            href={`https://wa.me/${telefonoHotel}?text=${mensajeWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu} 
            className="text-white hover:text-insignia transition-colors text-left"
          >
            CONTACTO
          </a>
          
          {/* Botón Reservar Móvil (Llamada Directa) */}
          <a 
            href={`tel:${telefonoHotel}`}
            onClick={closeMenu} 
            className="mt-6 bg-insignia text-slate-950 px-8 py-3 rounded-xl text-xs font-black tracking-widest shadow-lg shadow-insignia/20 inline-block mr-auto text-center"
          >
            LLAMAR Y RESERVAR
          </a>
        </div>
      </div>

    </nav>
  );
}