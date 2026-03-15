import { motion } from 'motion/react';
import { Clock, Shield, Droplets } from 'lucide-react';
import Watch3D from '../components/Watch3D';

export default function Craftsmanship() {
  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-24 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12 md:mb-16 mt-8 md:mt-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase text-[#C5A059] mb-4 block"
          >
            The Anatomy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="serif text-4xl sm:text-5xl md:text-7xl font-light leading-tight"
          >
            Engineered for <span className="italic font-light">Eternity</span>
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-16 md:mb-24 rounded-3xl overflow-hidden border border-[#F5F2ED]/10 bg-[#0B0B0B]/60 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)]"
        >
          <Watch3D />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Clock className="text-[#C5A059]" size={32} />,
              title: "Calibre AE-01",
              desc: "Our proprietary flying tourbillon movement, visible through the sapphire caseback, oscillating at 28,800 vph for unparalleled precision. Hand-finished with Côtes de Genève."
            },
            {
              icon: <Shield className="text-[#C5A059]" size={32} />,
              title: "Grade 5 Titanium",
              desc: "The case is sculpted from a single block of aerospace-grade titanium, offering exceptional strength while remaining virtually weightless on the wrist. Polished to a mirror finish."
            },
            {
              icon: <Droplets className="text-[#C5A059]" size={32} />,
              title: "Sapphire Crystal",
              desc: "Domed sapphire crystal with seven layers of anti-reflective coating ensures perfect legibility from any angle, under any lighting condition. Scratch-resistant up to 9 Mohs."
            }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="p-7 md:p-9 border border-[#F5F2ED]/10 hover:border-[#C5A059]/50 transition-colors group bg-gradient-to-br from-[#0B0B0B] to-[#090909] rounded-2xl shadow-xl text-center md:text-left"
            >
              <div className="mb-6 md:mb-8 bg-[#111] w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform mx-auto md:mx-0">
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl serif font-semibold mb-3 md:mb-4 leading-tight">{feature.title}</h3>
              <p className="text-[#F5F2ED]/70 text-sm leading-relaxed font-light tracking-wide">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
