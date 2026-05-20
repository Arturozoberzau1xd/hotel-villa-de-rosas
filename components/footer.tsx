import Link from 'next/link';

export default function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Columna 1: Info del Hotel */}
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold tracking-widest text-white">ROSAS</span>
          <p className="text-sm text-slate-400 leading-relaxed">
            Un espacio diseñado para el descanso, la exclusividad y una experiencia hospitalaria inigualable.
          </p>
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
            <li className="flex items-center gap-2">
              <span>📍</span> Libramiento, Barrio lo Tlaxcalera, Huasca de Ocampo, Hgo., Huasca de Ocampo, Mexico, 43516
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> +52 771 792 0632
            </li>
            <li className="flex items-center gap-2">
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
          <p>&copy; {anioActual} Hotel Rosas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-insignia transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-insignia transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}