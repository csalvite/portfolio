'use client';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const SwiperIcons = () => {
  const icons = [
    '/js.png',
    '/next.svg',
    '/node.png',
    '/React.webp',
    '/nest-js-icon.png',
    '/microsoft-sql-server-logo.png',
    '/express.png',
    '/mysql.png',
  ];

  return (
    <Swiper
      // install Swiper modules
      className='h-full'
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={5}
      slidesPerView={4}
      autoplay={{
        delay: 500, // Cambia las diapositivas cada 3 segundos
        disableOnInteraction: false, // Permite que el autoplay continúe después de la interacción del usuario
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {icons.map((icon, index) => (
        <SwiperSlide key={index} className='flex items-center justify-center'>
          <div className='flex items-center justify-center w-full h-full'>
            <Image
              src={icon}
              alt={`Icono ${index}`}
              className='max-w-full max-h-full'
              width={100}
              height={100}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperIcons;
