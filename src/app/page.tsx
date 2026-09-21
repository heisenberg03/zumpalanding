'use client';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BuiltForBothSides from '@/components/BuiltForBothSides';
import Categories from '@/components/Categories';
import TrendingEvents from '@/components/TrendingEvents';
import OurNetwork from '@/components/OurNetwork';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import AboutFounder from '@/components/AboutFounder';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('.section, .cta-section, .hero').forEach(function(el) {
      if(!el.classList.contains('hero')) { el.classList.add('reveal'); }
    });
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) { reveals[i].classList.add('active'); }
      }
    }
    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <BuiltForBothSides />
      <Categories />
      <TrendingEvents />
      <OurNetwork />
      <HowItWorks />
      <Features />
      <AboutFounder />
      <CTASection />
      <Footer />
    </>
  );
}
