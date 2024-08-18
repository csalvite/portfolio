'use client';
import FlipCard from '@/components/FlipCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-full'>
      <h3 className='text-3xl m-2 w-56 border-b-4 pb-2 inline-block text-cyan-500'>
        Mis Proyectos
      </h3>

      <section className='h-full flex flex-wrap items-center justify-evenly gap-4'>
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
      </section>
    </div>
  );
}
