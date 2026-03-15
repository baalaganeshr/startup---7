import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SafeImage from '../components/SafeImage';

export default function Collection() {
  const watches = [
    {
      id: 1,
      name: "Aetherion Obsidian",
      price: "$125,000",
      desc: "Deep black onyx dial with grade 5 titanium case. The quintessential expression of modern stealth luxury.",
      image: "https://images.unsplash.com/photo-1524592094714-cb9c76eb0761?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Aetherion Rose Gold",
      price: "$145,000",
      desc: "18k Rose Gold case with a grand feu enamel dial. A warm, classical interpretation of our avant-garde movement.",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Aetherion Meteorite",
      price: "$165,000",
      desc: "Featuring a dial sliced from the Gibeon meteorite. Each piece is entirely unique, carrying the pattern of the cosmos.",
      image: "https://images.unsplash.com/photo-1587836374828-cb4387df3eb7?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-24 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="text-center mb-14 md:mb-18 mt-8 md:mt-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase text-[#C5A059] mb-4 block"
          >
            The Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="serif text-5xl md:text-7xl font-light"
          >
            Choose your <span className="italic font-light">Masterpiece</span>
          </motion.h1>
        </div>

        <div className="space-y-16 md:space-y-24">
          {watches.map((watch, idx) => (
            <motion.div 
              key={watch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center rounded-3xl overflow-hidden border border-[#F5F2ED]/10 bg-[#0B0B0B]/60 backdrop-blur-sm shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)]`}
            >
              <div className="w-full md:w-1/2 h-[40vh] sm:h-[46vh] md:h-[60vh] relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5 transition-colors duration-700 z-10"></div>
                <SafeImage 
                  src={watch.image} 
                  alt={watch.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-8 md:py-0 text-center md:text-left">
                <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-light mb-3 md:mb-4 leading-tight">{watch.name}</h2>
                <div className="text-[#C5A059] tracking-widest text-sm mb-8">{watch.price}</div>
                <p className="text-[#F5F2ED]/75 font-light leading-relaxed tracking-wide mb-8 md:mb-10 text-sm sm:text-base md:text-lg">
                  {watch.desc}
                </p>
                <button className="mx-auto md:mx-0 flex items-center gap-3 border-b border-[#C5A059] pb-2 text-[11px] tracking-[0.2em] uppercase hover:text-[#C5A059] transition-colors group w-max">
                  Configure & Reserve
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
