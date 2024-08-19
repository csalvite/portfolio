import Image from 'next/image';

export default function Home() {
  return (
    <div className='w-full text-sm md:text-md'>
      <h3 className='text-2xl md:text-3xl m-2 w-56 border-b-4 pb-2 inline-block text-cyan-500'>
        Sobre Mí
      </h3>
      <div className='flex flex-col gap-4 my-8 text-justify'>
        <p>
          Mi nombre es César Alvite, soy un apasionado desarrollador web con una
          sólida capacidad para crear soluciones digitales innovadoras. Mi
          enfoque no se limita únicamente a la tecnología, ya que me enorgullece
          mi capacidad para crear un entorno de trabajo cómodo y desenfadado
          entre mis compañeros y compañeras.
        </p>
        <p>
          Mis capacidades de aprendizaje son una de mis mayores fortalezas.
          Siempre estoy dispuesto a adquirir nuevas habilidades y conocimientos
          para mantenerme actualizado en un campo tan dinámico como el
          desarrollo web. Me enorgullece mi capacidad para aprender rápidamente
          y aplicar ese conocimiento en la creación de soluciones efectivas.
        </p>
        <p>
          Pese a que mi trabajo actual se centra mayormente en el desarrollo de
          aplicaciones web y api rest, también tengo experiencia y estudios como
          Administrador de Sistemas tanto en Windows Server como servidores
          Linux.
        </p>
      </div>
      <h3 className='text-2xl md:text-3xl m-2 w-64 md:w-96 border-b-4 pb-2 inline-block text-cyan-500'>
        Tecnologías que uso
      </h3>
      <section className='py-4 flex flex-wrap gap-6 items-center justify-center'>
        <article className='2xl:w-[32rem] xl:w-fit min-h-44 p-4 flex items-center md:items-start gap-4 bg-[#414547] rounded-md'>
          <Image
            className='object-cover w-12 h-12 md:w-36 md:h-full'
            src='/React.webp'
            alt='React Logo'
            width={100}
            height={32}
          />
          <div className='flex flex-col gap-4 text-justify'>
            <h4 className='text-xl'>React</h4>
            <p className='w-10/12'>
              Librería de javascript la cual llevo usando más de 2 años,
              realizando proyectos personales y también en mi experiencia
              laboral.
            </p>
          </div>
        </article>
        <article className='2xl:w-[32rem] xl:w-fit min-h-44 p-4 flex items-center md:items-start gap-4 bg-[#414547] rounded-md'>
          <Image
            className='md:object-cover w-12 h-12 md:w-36 md:h-full'
            src='/next.svg'
            alt='Next Logo'
            width={100}
            height={32}
          />
          <div className='flex flex-col gap-4 text-justify'>
            <h4 className='text-xl'>Next JS</h4>
            <p className='w-10/12'>
              Framework de react en el cual llevo trabajando más de 1 año y que
              actualmente es mi herramienta favorita de trabajo.
            </p>
          </div>
        </article>
        <article className='2xl:w-[32rem] xl:w-fit min-h-44 p-4 flex items-center md:items-start gap-4 bg-[#414547] rounded-md'>
          <Image
            className='md:object-cover w-12 h-12 md:w-36 md:h-full'
            src='/node.png'
            alt='Node Logo'
            width={100}
            height={24}
          />
          <div className='flex flex-col gap-4 text-justify'>
            <h4 className='text-xl'>Node JS</h4>
            <p className='w-10/12'>
              Desarrollo de APIs usando Express durante 2 años y actualmente
              intento aprender y mejorar con el framework de Node NestJS.
            </p>
          </div>
        </article>
        <article className='2xl:w-[32rem] xl:w-fit min-h-44 p-4 flex items-center md:items-start gap-4 bg-[#414547] rounded-md'>
          <Image
            className='md:object-cover w-12 h-12 md:w-36 md:h-full'
            src='/js.png'
            alt='JS Logo'
            width={100}
            height={24}
          />
          <div className='flex flex-col gap-4 text-justify'>
            <h4 className='text-xl'>JavaScript</h4>
            <p className='w-10/12'>
              El lenguaje de programación en el que estoy más especializado y
              tengo más experiencia.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
