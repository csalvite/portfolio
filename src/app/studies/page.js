import SwiperIcons from '@/components/SwiperIcons';

export default function Home() {
  return (
    <div>
      <h3 className='text-3xl m-2 w-96 border-b-4 pb-2 inline-block text-cyan-500'>
        Estudios y Tecnologías
      </h3>

      <section className='max-w-10/12 h-32 my-12'>
        <SwiperIcons />
      </section>

      <section className='flex flex-col items-center justify-center gap-6 mt-6'>
        <article className='w-10/12 border p-4 rounded-md'>
          <h4>
            Desarrollo Web - <span>HACK A BOSS</span>
          </h4>
          <h5>Septiembre 2021 - Marzo 2022</h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              Mis estudios en hack a boss me han ayudado mucho a reforzar y
              reciclar conocimientos de programación además de enfocarme hacia
              donde quiero ir, que es el desarrollo.
            </p>
            <p>
              Las principales tecnologías que he podido practicar durante mi
              paso por este curso ha sido <strong>ReactJS</strong> y{' '}
              <strong>NodeJS</strong> poderosas herramientas basadas en{' '}
              <strong>JavaScript</strong> donde he podido mejorar como
              programador y realizar muchas prácticas y proyectos en equipo con
              varios compañeros dentro y fuera de clase.
            </p>
          </div>
        </article>
        <article className='w-10/12 border p-4 rounded-md'>
          <h4>
            Administración de Sistemas Informáticos en Red - IES Xulián
            Magariños
          </h4>
          <h5>Septiembre 2018 - Septiembre 2020</h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              Trabajo directo con servidores y bases de datos para entender más
              allá de la programación y comprender los fundamentos del hardware
              y software además de la capacidad de trabajar con distintos
              servidores Windows y Linux.
            </p>
            <p>
              Las principales tecnologías que he podido utilizar y trabajar han
              sido SQL Server, Redes, programación en PHP y servidores Linux.
            </p>
          </div>
        </article>
        <article className='w-10/12 border p-4 rounded-md'>
          <h4>Desarrollo de Aplicaciones Multiplataforma - Tesdai</h4>
          <h5>Septiembre 2016 - Septiembre 2018</h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              Desarrollo de aplicaciones móviles y de escritorio utilizando
              tecnologías como Java y C#.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
