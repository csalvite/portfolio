import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'César Alvite Liñan',
  description: 'Developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className='flex justify-center items-center bg-gray-800'>
        <main className='flex gap-4 w-10/12 h-full p-16 text-[#dfe1e3]'>
          <aside className='flex flex-col items-center justify-evenly px-4 bg-gray-700 w-96 h-100 rounded-md border border-black'>
            <div className='mt-8 flex flex-col items-center justify-center gap-4'>
              <Image
                className='w-44 h-44 object-cover rounded-full'
                src='/fotoperfil.jpg'
                alt='Cesar profile image'
                width={200}
                height={350}
                quality={100}
              />
              <h1 className='text-2xl'>César Alvite</h1>
              <h2 className='bg-gray-900 p-2 rounded-md text-sm'>
                Desarrollador Web
              </h2>
              <a
                className='text-sm mt-4 hover:text-gray-500 transition ease-in-out duration-300'
                download
                href='/CesarAlviteCV.pdf'
              >
                <i className='fa-solid fa-file text-2xl mr-2'></i> Descargar CV
              </a>
            </div>
            <div className='h-64'>
              <ul className='flex flex-col gap-6 list-none cursor-pointer'>
                <li className='transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300'>
                  <Link href='/'>
                    <i className='fa-solid fa-user text-2xl mr-2'></i> Sobre Mí
                  </Link>
                </li>
                <li className='transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300'>
                  <Link href='/projects'>
                    <i className='fa-solid fa-file-code text-2xl mr-2'></i>
                    Proyectos
                  </Link>
                </li>
                <li className='transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300'>
                  <Link href='/experiencie'>
                    <i className='fa-solid fa-building-user text-2xl mr-2'></i>
                    Experiencia
                  </Link>
                </li>
                <li className='transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300'>
                  <Link href='/studies'>
                    <i className='fa-solid fa-graduation-cap text-2xl mr-2'></i>
                    Estudios
                  </Link>
                </li>
                <li className='transition ease-in-out duration-300 hover:scale-110 hover:text-gray-300'>
                  <Link href='/contact'>
                    <i className='fa-solid fa-address-card text-2xl mr-2'></i>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
          <section className='bg-gray-600 w-full rounded-md p-8 border border-black overflow-y-scroll'>
            {children}
          </section>
        </main>

        <Script
          src='https://kit.fontawesome.com/73ad37a527.js'
          crossorigin='anonymous'
        ></Script>
      </body>
    </html>
  );
}
