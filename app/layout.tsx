import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"; // <-- 1. Importamos el Footer
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel Rosas | Sitio Oficial",
  description: "Disfruta de una estancia inolvidable en nuestro hotel de lujo.",
  verification: {
    google: 'yj1gyxaZ1DSYC3Wld6TlPTJkWqUB5yeDY8rvQxuPgXg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-950 flex flex-col min-h-screen">
        {/* Navbar Fijo */}
        <Navbar />
        
        {/* Contenido de las páginas ocupará el espacio disponible */}
        <main className="pt-20 flex-grow">
          {children}
        </main>

        {/* Footer Global */}
        <Footer /> {/* <-- 2. Añadimos el Footer aquí abajo */}
      </body>
    </html>
  );
}