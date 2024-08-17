import Map from '@/components/Map';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h3 className='text-2xl m-2 w-64 border-b-4 pb-2 inline-block text-[#edff21]'>
        Contacto
      </h3>

      <section className='flex items-center justify-center p-4 rounded-md'>
        <Map />
      </section>
    </div>
  );
}
