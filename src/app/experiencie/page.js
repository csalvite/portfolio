import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full text-sm md:text-md'>
      <h3 className='text-2xl md:text-3xl m-2 w-64 md:w-96 border-b-4 pb-2 inline-block text-cyan-500'>
        Experiencia Laboral
      </h3>

      <section className='flex flex-col items-center justify-center gap-6 mt-6'>
        <article className='w-full md:w-10/12 border p-4 rounded-md'>
          <h4 className='text-xl md:text-3xl p-2 inline-block rounded-md bg-[#2c3e50] text-[#D3D3D3]'>
            CNTravel - Desarrollador Web
          </h4>
          <h5 className='text-[#B0B0B0]'>Febrero 2023 - Actualidad</h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              Desarrollador Front-End con experiencia en el uso de tecnologías
              como React.js y Next.js, complementando mi labor con apoyo en
              tareas de desarrollo Back-End utilizando Node.js y Nest.js.
            </p>
            <p>
              Durante mi tiempo en CNTravel, he sido parte de un equipo con el
              que hemos implementado nuevas funcionalidades desde cero en la
              aplicación web, demostrando una fuerte capacidad resolutiva y una
              alta implicación en el proyecto. Mi enfoque en la comunicación y
              coordinación ha sido clave para contribuir con ideas innovadoras y
              asegurar una colaboración efectiva con mis compañeros y
              compañeras, también cabe destacar mis conocimientos en despliegue
              de aplicaciones y apoyo a mantenimiento de servidores linux.
            </p>
            <p>
              Además, me destaco por mi agilidad y eficiencia en la resolución
              de incidencias, lo que garantiza la continuidad del servicio y
              minimiza el tiempo de inactividad.
            </p>
          </div>
        </article>
        <article className='w-full md:w-10/12 border p-4 rounded-md'>
          <h4 className='text-xl md:text-3xl p-2 inline-block rounded-md bg-[#2c3e50] text-[#D3D3D3]'>
            HACKABOSS - Docente y Desarrollador Web
          </h4>
          <h5 className='text-[#B0B0B0]'>
            Abril 2022 - Febrero 2023{' '}
            <span className='text-xs'>(11 meses)</span>
          </h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              Coordinación y organización de clases a distintos niveles para
              iniciar alumnos al mundo de la programación.
            </p>
            <p>
              En Hack a Boss he podido mejorar mis habilidades de comunicación
              además de asentar conocimientos tan importantes como las bases de
              la programación en JavaScript.
            </p>
          </div>
        </article>
        <article className='w-full md:w-10/12 border p-4 rounded-md'>
          <h4 className='text-xl md:text-3xl p-2 inline-block rounded-md bg-[#2c3e50] text-[#D3D3D3]'>
            Plexus Tech - Soporte de Aplicaciones N2
          </h4>
          <h5 className='text-[#B0B0B0]'>
            Noviembre 2020 - Marzo 2021{' '}
            <span className='text-xs'>(5 meses)</span>
          </h5>
          <div className='flex flex-col gap-4 my-8 text-justify'>
            <p>
              Trabajo con herramienta de tickets para resolución de incidencias
              como técnico en soporte de aplicaciones N2 para el Hospital
              Clínico de Santiago de Compostela.
            </p>
            <p>
              Durante este período he podido especializarme en la consulta de
              tablas de base de datos en SQL Server y trabajo con Windows
              Server, además de mejorar mi capacidad de contacto con el cliente
              y rápida resolución de los problemas.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
