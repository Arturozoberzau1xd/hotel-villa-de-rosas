'use client';

import React, { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      alert("Por favor, llena todos los campos obligatorios (Nombre, Correo y Mensaje).");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mgoqyqlg", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert(`¡Gracias ${formData.nombre}! Tu mensaje ha sido enviado con éxito.`);
        setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      } else {
        alert("Hubo un error al procesar el envío en el servidor de Formspree.");
      }
    } catch (error) {
      console.error("Error en la petición:", error);
      alert("No se pudo conectar con el servidor. Revisa tu conexión a internet.");
    }
  };

  const mensajeWhatsApp = encodeURIComponent(
    "Hola, me interesa obtener más información sobre las habitaciones y disponibilidad en el Hotel Villa de Rosas."
  );
  const linkWhatsApp = `https://wa.me/527711181462?text=${mensajeWhatsApp}`;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-28 pb-12 transition-all duration-700 ease-out animate-in fade-in slide-in-from-bottom-4">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16 mt-6">
          <span className="text-insignia font-bold tracking-widest text-xs uppercase block mb-2">Atención inmediata</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Ponte en Contacto</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            ¿Tienes dudas, solicitudes especiales o quieres cotizar para un evento? Estamos ready para ayudarte las 24 horas.
          </p>
        </div>

        {/* Contenido en Dos Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Botón Destacado de WhatsApp */}
            <a 
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-5 rounded-2xl shadow-lg transition-all text-center group"
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="text-xs font-normal text-emerald-100 uppercase tracking-wider text-left">Respuesta Inmediata</p>
                <p className="text-base">Escríbenos por WhatsApp</p>
              </div>
              <span className="ml-auto transform group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* Datos de ubicación reales */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-6">
              <div>
                <h3 className="text-xs font-bold text-insignia uppercase tracking-widest mb-2">Ubicación</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Libramiento, Barrio lo Tlaxcalera, Huasca de Ocampo, Hgo., México.
                </p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                <h3 className="text-xs font-bold text-insignia uppercase tracking-widest mb-2">Teléfono</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">+52 771 792 0632</p>
                <p className="text-xs text-slate-400">Atención en recepción 24/7</p>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                <h3 className="text-xs font-bold text-insignia uppercase tracking-widest mb-2">Correos Electrónicos</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">reservaciones@hotelrosas.com</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">informes@hotelrosas.com</p>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Envíanos un Mensaje</h2>
            
            <form className="space-y-5">
              {/* Campo Nombre Completo */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej. Juan Pérez" 
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-insignia dark:focus:border-insignia focus:outline-none rounded-xl p-3 text-sm transition-colors"
                />
              </div>

              {/* Campos Correo y Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="juan@ejemplo.com" 
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-insignia dark:focus:border-insignia focus:outline-none rounded-xl p-3 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="7711234567" 
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-insignia dark:focus:border-insignia focus:outline-none rounded-xl p-3 text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Campo Mensaje */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2">¿En qué podemos ayudarte?</label>
                <textarea 
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tus dudas, fechas estimadas de visita o comentarios..." 
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:border-insignia dark:focus:border-insignia focus:outline-none rounded-xl p-3 text-sm transition-colors resize-none"
                />
              </div>

              {/* Botón de Acción */}
              <button 
                type="button" 
                onClick={handleSubmit}
                className="w-full bg-insignia hover:bg-opacity-90 text-slate-950 font-bold py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all shadow-md shadow-insignia/10"
              >
                Enviar Formulario
              </button>
            </form>

          </div>

        </div>

      </div>
    </div>
  );
}