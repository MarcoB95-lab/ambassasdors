import 'tailwindcss/tailwind.css';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import '../../app/globals.css';
import Navbar from '../../components/Navbar';
import type { MyAppProps } from '../../types/MyAppProps';
import Footer from '@/components/Footer';

function Contact({ Component, pageProps }: MyAppProps) {
    const session = pageProps?.session;
  return (
    <SessionProvider session={session}>
    <ThemeProvider attribute="class">
      <Navbar />
      <div className="flex flex-col my-10 items-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <p className="text-xl mb-4">If you have any questions or concerns, please fill out the form below and we will get back to you as soon as possible.</p>
      <form className="flex flex-col gap-4">
        <label className="text-lg font-medium" htmlFor="name">Name</label>
        <input className="p-2 border rounded" type="text" name="name" id="name" required />
        <label className="text-lg font-medium" htmlFor="email">Email</label>
        <input className="p-2 border rounded" type="email" name="email" id="email" required />
        <label className="text-lg font-medium" htmlFor="message">Message</label>
        <textarea className="p-4 border rounded" name="message" id="message" required></textarea>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </form>
      <Footer />
    </div>
      <Footer />
    </ThemeProvider>
  </SessionProvider>
  );
}

export default Contact;
