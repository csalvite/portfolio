'use client';
import Image from 'next/image';
import Menu from './Menu';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Main = ({ children }) => {
  //   const [showAside, setShowAside] = useState(true);
  //   const lastScrollTop = useRef(0); // Utilizamos useRef para almacenar lastScrollTop

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const scrollTop =
  //         window.pageYOffset || document.documentElement.scrollTop;

  //       if (window.innerWidth < 1024) {
  //         // Aplica solo en dispositivos móviles
  //         if (scrollTop > lastScrollTop.current) {
  //           // Desplazamiento hacia abajo, ocultar aside
  //           setShowAside(false);
  //         } else {
  //           // Desplazamiento hacia arriba, mostrar aside
  //           setShowAside(true);
  //         }
  //       }
  //       lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // Actualiza lastScrollTop
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);

  return (
    <main className='flex flex-col lg:flex-row gap-4 w-full h-full p-0 md:p-4 lg:p-16 text-[#f5f5f5]'>
      <aside
        className={`bg-[#353839] flex flex-col xl:w-96 w-full items-center justify-between p-4 rounded-md border-0 md:border-2 border-black transition-transform duration-300`}
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

      <section className='bg-[#353839] w-full rounded-md p-2 md:p-8 border-0 md:border-2 border-black overflow-y-scroll'>
        {children}
      </section>
    </main>
  );
};

export default Main;
