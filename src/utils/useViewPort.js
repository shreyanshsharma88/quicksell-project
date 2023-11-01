import { useState, useLayoutEffect, useEffect } from 'react';

export const useViewPort = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 1024);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 450);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {isMobile};
};