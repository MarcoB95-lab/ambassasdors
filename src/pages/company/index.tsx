'use client';

import 'tailwindcss/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import '../../app/globals.css';
import Navbar from '@/components/Navbar';
import type { MyAppProps } from '../../types/MyAppProps';
import Footer from '@/components/Footer';



function MyApp({ Component, pageProps }: MyAppProps) {
  const session = pageProps?.session;
  
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Navbar />
        <div>test</div>
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
