'use client';

import 'tailwindcss/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import Navbar from '../components/Navbar';
import type { MyAppProps } from '../types/MyAppProps';
import Footer from '@/components/Footer';
import Company from '@/pages/company';
import HomePage from '@/components/HomePage';


function MyApp({ Component, pageProps }: MyAppProps) {
  const session = pageProps?.session;

  // Add this sample data to your index.page file
const featuredJob = {
  title: "Software Engineer",
  description: "A software engineer with 3+ years of experience in web development.",
};

const jobs = [
  {
    title: "Frontend Developer",
    description: "A frontend developer with experience in React and Vue.js.",
  },
  {
    title: "Backend Developer",
    description: "A backend developer with experience in Node.js and Django.",
  },
];
  
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <Navbar />
        <HomePage featuredJob={featuredJob} jobs={jobs} /> {/* Pass the props to HomePage */}
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
