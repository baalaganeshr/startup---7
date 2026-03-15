import {useEffect, useState} from 'react';
import {ArrowUp} from 'lucide-react';
import {motion, AnimatePresence} from 'motion/react';

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="scroll-top"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 20}}
          transition={{duration: 0.25}}
          onClick={scrollToTop}
          className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-40 h-12 w-12 rounded-full bg-[#0B0B0B]/90 border border-[#C5A059]/70 text-[#F5F2ED] flex items-center justify-center shadow-lg shadow-black/30 backdrop-blur"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}