'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useState } from 'react';

// Importa el componente Map de manera dinámica y desactiva SSR
const Map = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Inicializar el tamaño
    handleResize();
  }, []);

  return (
    <div className='w-full text-sm md:text-md'>
      <h3 className='text-2xl md:text-3xl m-2 w-56 border-b-4 pb-2 inline-block text-cyan-500'>
        Contacto
      </h3>

      {isMobile ? (
        <>
          <section className='flex flex-col gap-8 justify-center py-8 px-4 rounded-md'>
            <div>
              <h4 className='text-lg mr-4'>Teléfono de contacto: </h4>
              <p className='text-cyan-300'>+34 633 70 32 01</p>
            </div>
            <div>
              <h4 className='text-lg mr-4'>Dirección: </h4>
              <p className='text-cyan-300'>
                Avenida del Rocío, N4, Serra de Outes, A Coruña
              </p>
            </div>
            <div>
              <h4 className='text-lg mr-4'>Email: </h4>
              <p className='text-cyan-300'>csalvite@gmail.com</p>
            </div>
            <p>
              Puede ponerse en contacto conmigo para trabajos autónomos y demás
              e que ainda non sei que carallo poñer aqui xd.
            </p>
          </section>

          <section className='flex items-center justify-center pb-8 rounded-md'>
            <Map fullw={true} />
          </section>
        </>
      ) : (
        <>
          <section className='flex items-center justify-center p-4 rounded-md'>
            <Map />
          </section>

          <section className='flex flex-col gap-8 justify-center p-8 rounded-md'>
            <div>
              <h4 className='text-lg mr-4'>Teléfono de contacto: </h4>
              <p className='text-cyan-300'>+34 633 70 32 01</p>
            </div>
            <div>
              <h4 className='text-lg mr-4'>Dirección: </h4>
              <p className='text-cyan-300'>
                Avenida del Rocío, N4, Serra de Outes, A Coruña
              </p>
            </div>
            <div>
              <h4 className='text-lg mr-4'>Email: </h4>
              <p className='text-cyan-300'>csalvite@gmail.com</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
