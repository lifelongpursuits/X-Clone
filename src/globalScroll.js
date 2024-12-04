import { useEffect } from 'react';

export const useGlobalScroll = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      const feed = document.querySelector('.feed');
      const profile = document.querySelector('.profile');
      const target = feed || profile;
      
      if (target) {
        target.scrollTop += event.deltaY;
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};

export default useGlobalScroll;
