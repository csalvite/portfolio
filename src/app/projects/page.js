import Image from "next/image";

export default function Home() {
  return (
    <>
      <p className=''>Esta es la página de proyectos</p>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </>
  );
}
