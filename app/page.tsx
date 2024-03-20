'use client';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { useEffect } from 'react';

export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </>
  );
}
