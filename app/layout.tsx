import Image from 'next/image';
import styles from './page.module.css';
import './globals.css';
import { Montserrat } from '@next/font/google';

const montserratFont = Montserrat({
  weight: ['300', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${montserratFont.className} mx-32 my-12`}>
        <nav className="p-2">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
          <ul className="font-montserrat flex w-1/3 justify-between">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Sign up</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
