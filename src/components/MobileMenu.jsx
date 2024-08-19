'use client';
import { Menu } from '@headlessui/react';
import Link from 'next/link';

const MobileMenu = () => (
  <Menu as='div' className='relative z-[10000]'>
    <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50'>
      Menu
    </Menu.Button>
    <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
      <div className='py-1'>
        <Menu.Item>
          {({ active }) => (
            <Link
              href='/'
              className={`${
                active ? 'bg-gray-100' : ''
              } block px-4 py-2 text-sm text-gray-700`}
            >
              <i className='fa-solid fa-user text-2xl mr-2'></i> Sobre Mí
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              href='/experiencie'
              className={`${
                active ? 'bg-gray-100' : ''
              } block px-4 py-2 text-sm text-gray-700`}
            >
              <i className='fa-solid fa-building-user text-2xl mr-2'></i>
              Experiencia
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              href='/studies'
              className={`${
                active ? 'bg-gray-100' : ''
              } block px-4 py-2 text-sm text-gray-700`}
            >
              <i className='fa-solid fa-graduation-cap text-2xl mr-2'></i>
              Estudios
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              href='/projects'
              className={`${
                active ? 'bg-gray-100' : ''
              } block px-4 py-2 text-sm text-gray-700`}
            >
              <i className='fa-solid fa-file-code text-2xl mr-2'></i>
              Proyectos
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              href='/contact'
              className={`${
                active ? 'bg-gray-100' : ''
              } block px-4 py-2 text-sm text-gray-700`}
            >
              <i className='fa-solid fa-address-card text-2xl mr-2'></i>
              Contacto
            </Link>
          )}
        </Menu.Item>
      </div>
    </Menu.Items>
  </Menu>
);

export default MobileMenu;
