import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';
import Script from 'next/script';
import Menu from '@/components/Menu';
import Main from '@/components/Main';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'César Alvite Liñan',
  description: 'Developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className='flex justify-center items-center bg-neutral-800'>
        <Main>{children}</Main>

        <Script
          src='https://kit.fontawesome.com/73ad37a527.js'
          crossorigin='anonymous'
        ></Script>
      </body>
    </html>
  );
}
