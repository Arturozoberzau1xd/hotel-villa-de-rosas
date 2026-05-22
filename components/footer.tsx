import Link from 'next/link';
// Dejamos solo MapPin que es un icono genérico seguro en Lucide
import { MapPin } from 'lucide-react';

export default function Footer() {
  const anioActual = new Date().getFullYear();

  const linksRedes = {
    facebook: "https://www.facebook.com/profile.php?id=100075987634830&sk=photos", 
    //instagram: "https://www.instagram.com",
    google: "https://maps.app.goo.gl/AjxHZxKUcabaLgca7?g_st=ac"
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Columna 1: Info del Hotel y REDES SOCIALES */}
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold tracking-widest text-white">ROSAS</span>
          <p className="text-sm text-slate-400 leading-relaxed">
            Un espacio diseñado para el descanso, la exclusividad y una experiencia hospitalaria inigualable.
          </p>
          
          {/* BOTONES DE REDES SOCIALES PREMIUM (SVG Puros de Alta Calidad) */}
          <div className="flex items-center gap-3 mt-2">
            
            {/* Facebook SVG */}
            <a 
              href={linksRedes.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-insignia text-slate-400 hover:text-slate-950 hover:bg-insignia flex items-center justify-center rounded-xl transition-all group"
              title="Síguenos en Facebook"
            >
              <svg className="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            
            {/* Instagram SVG */}
            
            
            {/* Google Maps Pin Icon */}
            <a 
              href={linksRedes.google} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-slate-900 border border-slate-800 hover:border-insignia text-slate-400 hover:text-slate-950 hover:bg-insignia flex items-center justify-center rounded-xl transition-all group"
              title="Ubicación en Google Maps"
            >
              <MapPin className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span className="sr-only">Google Maps</span>
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Navegación</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="/" className="hover:text-insignia transition-colors">Inicio</Link>
            </li>
            <li>
              <Link href="/habitaciones" className="hover:text-insignia transition-colors">Habitaciones</Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-insignia transition-colors">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto / Ubicación */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Contacto</h4>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-insignia shrink-0" />
              <span>Libramiento, Barrio lo Tlaxcalera, Huasca de Ocampo, Hgo., México, 43516</span>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +52 771 792 0632
            </li>
            <li className="flex items-center gap-2 text-xs break-all">
              <span>✉️</span> juliovargas.jv20@gmail.com
            </li>
          </ul>
        </div>

        {/* Columna 4: Horarios o Destacado */}
        <div>
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Atención</h4>
          <p className="text-sm leading-relaxed mb-3">
            Recepción y check-in disponibles las 24 horas del día, los 365 días del año.
          </p>
          <span className="inline-block bg-slate-900 border border-slate-800 text-insignia text-xs font-semibold px-3 py-1.5 rounded-md">
            • Abierto Ahora
          </span>
        </div>

      </div>

      {/* Barra Inferior de Copyright */}
      <div className="border-t border-slate-900 bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {anioActual} Hotel Villa de Rosas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-insignia transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-insignia transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}