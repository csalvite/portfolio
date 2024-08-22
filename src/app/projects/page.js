'use client';
import FlipCard from '@/components/FlipCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full h-full text-sm md:text-md'>
      <h3 className='text-2xl md:text-3xl m-2 w-56 border-b-4 pb-2 inline-block text-cyan-500'>
        Mis Proyectos
      </h3>

      <section className='h-full flex flex-wrap items-center md:items-start justify-evenly gap-4 mt-8'>
        <FlipCard
          title='EMUVI'
          subtitle='Web App de compraventa de artículos retro'
          text={
            <>
              <p>
                En este proyecto he podido trabajar en un grupo de 4 personas en
                la cual he participado y liderado en distintas partes como el
                desarrollo del api en nodejs y express.
              </p>
              <p>
                También desarrollamos el front en React y varias dependencias
                útiles además de custom Hooks.
              </p>
            </>
          }
          img={
            <Image
              className='w-24'
              src='/emuvi.png'
              alt='emuvi project'
              width={150}
              height={200}
            />
          }
        />

        <FlipCard
          title='Space Poetry'
          subtitle='Imágenes del Espacio'
          text={
            <>
              <p>
                Space Poetry es una pequeña aplicación creada en React donde
                consumo el API de la Nasa para poder mostrar la imagen del día
                del espacio además de poder buscar las imágenes entre las
                distintas fechas.
              </p>
              <p>
                <a
                  className='hover:text-cyan-500 text-cyan-300 transition duration-300'
                  href='https://space-poetry.vercel.app/'
                  target='_blank'
                >
                  https://space-poetry.vercel.app/
                </a>
              </p>
            </>
          }
          img={
            <Image
              className='w-32'
              src='/space-poetry.png'
              alt='space poetry project'
              width={150}
              height={200}
            />
          }
        />

        <FlipCard
          title='Portfolio VyAdri'
          subtitle='Trabajo de creación de portfolio'
          className='mb-8'
          text={
            <>
              <p>
                Contacto con el cliente para la creación de un portfolio y api a
                través del cuál puede personalizar y crear el contenido que
                desee.
              </p>
              <p>
                <a
                  className='hover:text-cyan-500 text-cyan-300 transition duration-300'
                  href='https://vyadri.vercel.app/'
                  target='_blank'
                >
                  https://vyadri.vercel.app/
                </a>
              </p>
            </>
          }
          img={
            <Image
              className='w-32'
              src='/vyadri.png'
              alt='vyadri project'
              width={150}
              height={200}
            />
          }
        />

        <FlipCard
          title='Piedra Papel o Tijeras'
          subtitle='Ejercicio de creación de un juego'
          className='mb-8'
          text={
            <>
              <p>
                Alguno de los proyectos basado en javascript para crear el
                típico juego de piedra papel o tijeras.
              </p>
              <p>
                <a
                  className='hover:text-cyan-500 text-cyan-300 transition duration-300'
                  href='https://rock-paper-scissors-mcz38lfbp-csalvite.vercel.app/'
                  target='_blank'
                >
                  https://rock-paper-scissors-mcz38lfbp-csalvite.vercel.app/
                </a>
              </p>
            </>
          }
          img={
            <Image
              className='w-32'
              src='/rock-paper-scissors.png'
              alt='rock-paper-scissors'
              width={150}
              height={200}
            />
          }
        />
      </section>
    </div>
  );
}
