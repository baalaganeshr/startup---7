import { motion } from 'motion/react';
import SafeImage from '../components/SafeImage';

export default function Philosophy() {
  return (
    <div className="pt-24 md:pt-32 pb-24 bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505]">
      {/* Header */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-24 mb-18 md:mb-24 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase text-[#C5A059] mb-4 block mt-12"
        >
          Our Heritage
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="serif text-5xl md:text-7xl font-light mb-8"
        >
          An obsession with <br/> <span className="italic font-light text-[#C5A059]">perfection.</span>
        </motion.h1>
      </section>

      {/* Content */}
      <section className="px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <p className="text-[#F5F2ED]/75 font-light leading-relaxed tracking-wide mb-5 text-base md:text-lg">
              We didn't set out to make another watch. We set out to challenge the very concept of timekeeping. Every Aetherion timepiece is the result of over 400 hours of meticulous hand-craftsmanship by master horologists in Geneva.
            </p>
            <p className="text-[#F5F2ED]/75 font-light leading-relaxed tracking-wide mb-10 md:mb-12 text-base md:text-lg">
              The result is not just an instrument that tells time, but an heirloom that transcends it. A delicate balance of avant-garde engineering and classical aesthetics. We believe that true luxury lies in the unseen details—the hand-beveled edges of a bridge, the mirror-polished screw heads, the perfect tension of a mainspring.
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-[#F5F2ED]/10 pt-8">
              <div>
                <div className="text-4xl serif text-[#C5A059] mb-2">400+</div>
                <div className="text-[10px] tracking-widest uppercase text-[#F5F2ED]/50">Hours of Assembly</div>
              </div>
              <div>
                <div className="text-4xl serif text-[#C5A059] mb-2">120</div>
                <div className="text-[10px] tracking-widest uppercase text-[#F5F2ED]/50">Pieces Annually</div>
              </div>
              <div>
                <div className="text-4xl serif text-[#C5A059] mb-2">18k</div>
                <div className="text-[10px] tracking-widest uppercase text-[#F5F2ED]/50">Solid Gold Rotors</div>
              </div>
              <div>
                <div className="text-4xl serif text-[#C5A059] mb-2">1924</div>
                <div className="text-[10px] tracking-widest uppercase text-[#F5F2ED]/50">Heritage Roots</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px] w-full"
          >
            <div className="absolute inset-0 border border-[#C5A059]/30 rounded-full scale-[1.05] blur-[1px]"></div>
            <SafeImage 
              src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=2004&auto=format&fit=crop" 
              alt="Watch Dial Details" 
              className="w-full h-full object-cover rounded-full oval-mask shadow-[0_40px_120px_-60px_rgba(0,0,0,0.8)]"
            />
          </motion.div>
        </div>
      </section>

      {/* Full Width Image Break */}
      <section className="h-[55vh] md:h-[70vh] relative overflow-hidden mt-24 md:mt-32 rounded-3xl mx-6 md:mx-12 lg:mx-24 shadow-2xl">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <SafeImage 
            src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop" 
            alt="Watch Mechanism" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80 flex items-center justify-center px-4">
          <h2 className="serif text-4xl md:text-6xl font-light italic text-center max-w-4xl leading-tight drop-shadow-2xl">
            "The heartbeat of <br/> human ingenuity."
          </h2>
        </div>
      </section>
    </div>
  );
}
