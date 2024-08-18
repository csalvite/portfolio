import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h3 className='text-3xl m-2 w-56 border-b-4 pb-2 inline-block text-cyan-500'>
        Mis Proyectos
      </h3>
      <section className='flex flex-col items-center justify-center gap-6 mt-6'>
        <article className='w-10/12 border p-4 rounded-md'>
          <Image src='/emuvi.png' alt='emuvi project' width={50} height={200} />
          <h4 className='text-3xl'>EMUVI</h4>
          <h5>Web App de compraventa de artículos retro</h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              En este proyecto he podido trabajar en un grupo de 4 personas en
              la cual he participado y liderado en distintas partes como el
              desarrollo del api en nodejs y express.
            </p>
            <p>
              También desarrollamos el front en React y varias dependencias
              útiles además de custom Hooks.
            </p>
          </div>
        </article>

        <article className='w-10/12 border p-4 rounded-md'>
          <Image
            src='/space-poetry.png'
            alt='space poetry project'
            width={50}
            height={200}
          />
          <h4 className='text-3xl'>Space Poetry</h4>
          <h5>Imágenes del Espacio</h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              Space Poetry es una pequeña aplicación creada en React donde
              consumo el API de la Nasa para poder mostrar la imagen del día del
              espacio además de poder buscar las imágenes entre las distintas
              fechas.
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
          </div>
        </article>

        <article className='w-10/12 border p-4 rounded-md'>
          <Image
            src='/vyadri.png'
            alt='vyadri project'
            width={50}
            height={200}
          />
          <h4 className='text-3xl'>Portfolio VyAdri</h4>
          <h5>Trabajo de creación de portfolio</h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              Contacto con el cliente para la creación de un portfolio y api a
              través del cuál puede personalizar y crear el contenido que desee.
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
          </div>
        </article>
      </section>
    </div>
  );
}
