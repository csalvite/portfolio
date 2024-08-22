'use client';

import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { useEffect } from 'react';

const Menu = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 1280);
    };

    // Inicializa el estado en función del tamaño de la pantalla al cargar la página
    handleResize();

    // Añade un event listener para manejar cambios en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return mobile ? (
    <MobileMenu />
  ) : (
    <ul className='flex xl:flex-col md:flex-row xl:gap-6 lg:gap-2 md:text-sm list-none cursor-pointer'>
      <li className='flex items-center transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300 p-2'>
        <Link href='/' className='flex items-center justify-between'>
          <i className='fa-solid fa-user text-2xl mr-2'></i> Sobre Mí
        </Link>
      </li>
      <li className='flex items-center transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300 p-2'>
        <Link href='/experiencie' className='flex items-center'>
          <i className='fa-solid fa-building-user text-2xl mr-2'></i>
          Experiencia
        </Link>
      </li>
      <li className='flex items-center transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300 p-2'>
        <Link href='/studies' className='flex items-center'>
          <i className='fa-solid fa-graduation-cap text-2xl mr-2'></i>
          Estudios
        </Link>
      </li>
      <li className='transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300 p-2'>
        <Link href='/projects' className='flex items-center'>
          <i className='fa-solid fa-file-code text-2xl mr-2'></i>
          Proyectos
        </Link>
      </li>
      <li className='transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300'>
        <Link href='/contact' className='flex items-center'>
          <i className='fa-solid fa-address-card text-2xl mr-2'></i>
          Contacto
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
