'use client';
import Image from 'next/image';
import Menu from './Menu';
import { useState, useEffect, useRef } from 'react';

const Main = ({ children }) => {
  const [showAside, setShowAside] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollTop = useRef(0);
  const sectionRef = useRef(null); // Referencia al section
  const asideRef = useRef(null); // Referencia al aside

  // Hook para detectar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Inicializar el tamaño
    handleResize();

    // Añadir el listener para redimensionar
    window.addEventListener('resize', handleResize);

    // Limpiar el listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && isMobile) {
        const scrollTop = sectionRef.current.scrollTop;

        if (scrollTop > lastScrollTop.current) {
          // Desplazamiento hacia abajo, ocultar aside
          setShowAside(false);
        } else {
          // Desplazamiento hacia arriba, mostrar aside
          setShowAside(true);
        }

        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // Actualiza lastScrollTop
      }
    };

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMobile]); // Dependencia en isMobile para actualizar el scroll listener

  return (
    <main className='flex flex-col lg:flex-row gap-4 w-full h-full p-0 md:p-4 lg:p-16 text-[#f5f5f5]'>
      <aside
        ref={asideRef}
        className={`bg-[#353839] flex flex-col xl:w-96 w-full items-center justify-between p-4 rounded-md border border-black transition-transform duration-300 ${
          isMobile
            ? showAside
              ? 'fixed'
              : 'fixed -translate-y-full'
            : 'relative'
        } top-0 left-0 right-0 z-10`}
      >
        <div className='flex flex-col items-center justify-center gap-4'>
          <Image
            className='w-24 h-24 md:w-44 md:h-44 object-cover rounded-full'
            src='/fotoperfil.jpg'
            alt='Imagen de perfil de César Alvite'
            width={176} // Asegura una relación de aspecto coherente
            height={176}
            quality={100}
          />
          <div className='text-center'>
            <h1 className='text-xl md:text-3xl text-cyan-500'>César Alvite</h1>
            <h2 className='bg-[#d0cfd3] p-2 rounded-md text-xs md:text-md text-[#353839] font-semibold'>
              Desarrollador Web
            </h2>
          </div>
        </div>

        <a
          className='text-sm mt-4 hover:text-cyan-500 transition ease-in-out duration-300'
          download
          href='/CesarAlviteCV.pdf'
          aria-label='Descargar CV de César Alvite'
        >
          <i className='fa-solid fa-file text-2xl mr-2'></i> Descargar CV
        </a>

        <nav className='mt-6'>
          <Menu />
        </nav>
      </aside>

      <section
        ref={sectionRef}
        className={`bg-[#353839] w-full flex-1 rounded-md p-2 md:p-8 border-0 md:border-2 border-black overflow-y-scroll ${
          isMobile ? 'pt-96' : ''
        }`}
      >
        {children}
      </section>
    </main>
  );
};

export default Main;
