
import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext();

const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis on the client side
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.1, // Linear interpolation, lower value = smoother/slower scroll
        duration: 2, // Duration of the scroll animation
        smoothTouch: true, // Enable smooth scrolling on touch devices
        smoothWheel: true, // Enable smooth scrolling on mouse wheel events
      });
      lenisRef.current = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      
      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => {
  return useContext(LenisContext);
};


export default LenisProvider