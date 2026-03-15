import {useEffect, useRef, useState} from 'react';
import {ChevronLeft, ChevronRight, Pause, Play} from 'lucide-react';
import SafeImage from './SafeImage';

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  {src: '/images/731ffc3293c27cb7ae988a77f0db561c635e3b38.webp', alt: 'Aetherion obsidian dial'},
  {src: '/images/3377_Green_1_190f167f-acc6-40b8-94d7-714ca6329ed0.webp', alt: 'Aetherion tactical chronograph'},
  {src: '/images/7152QM01_1.webp', alt: 'Sleek midnight edition'},
  {src: '/images/69100CMGY.webp', alt: 'Golden day-date complication'},
  {src: '/images/de80c12e-c32e-4b06-bd24-2a64d9658dd21752040211720-Timex-Women-Embellished-Dial-Multi-functional-Analogue-Watch-18.jpg', alt: 'Rose gold moonphase'},
  {src: '/images/Carliongton_premium_black_analog_mens_s_watch_6010.webp', alt: 'Onyx premium texture'},
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!playing) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIndex((prev) => (prev + 1) % slides.length), 4500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, playing]);

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-transparent flex justify-center px-4 sm:px-0">
      <div className="relative w-full max-w-5xl aspect-[16/10] sm:aspect-[16/9] max-h-[380px] sm:max-h-[420px] min-h-[220px]">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <SafeImage src={slide.src} alt={slide.alt} className="w-full h-full object-contain p-6 sm:p-8" />
          </div>
        ))}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#C5A059] bg-[#050505]/70 px-3 py-2 rounded-full border border-[#C5A059]/40">
          Signature carousel
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#050505]/70 border border-[#F5F2ED]/20 text-[#F5F2ED] flex items-center justify-center hover:border-[#C5A059] transition"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            onClick={prev}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#050505]/70 border border-[#F5F2ED]/20 text-[#F5F2ED] flex items-center justify-center hover:border-[#C5A059] transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#050505]/70 border border-[#F5F2ED]/20 text-[#F5F2ED] flex items-center justify-center hover:border-[#C5A059] transition"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2 py-3 sm:py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${i === index ? 'w-7 bg-[#C5A059]' : 'bg-[#F5F2ED]/30'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}