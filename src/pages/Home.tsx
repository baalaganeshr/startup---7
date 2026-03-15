import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Gem, Shapes } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from '../components/SafeImage';
import Watch3D from '../components/Watch3D';
import GalleryCarousel from '../components/GalleryCarousel';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-32">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <SafeImage 
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop" 
            alt="Aetherion Watch" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]"></div>
        </motion.div>

        <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-4 mt-6 md:mt-0">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] tracking-[0.35em] uppercase text-[#C5A059] mb-5"
          >
            The New Standard
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="serif text-[40px] sm:text-6xl md:text-7xl lg:text-[110px] leading-[0.95] font-light tracking-tight mb-6 sm:mb-8 max-w-4xl px-2"
          >
            Time, <br />
            <span className="italic font-light text-[#C5A059]">Redefined.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#F5F2ED]/80 font-light leading-relaxed tracking-wide px-3 sm:px-0">
              A masterpiece of horology. Forged from aerospace-grade titanium, powered by a revolutionary tourbillon movement.
            </p>
            <Link to="/collection" className="mt-10 flex items-center gap-3 border-b border-[#C5A059] pb-2 text-[11px] tracking-[0.2em] uppercase hover:text-[#C5A059] transition-colors group">
              Discover the Collection
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-6 hidden md:block">
          <div className="vertical-text text-[#F5F2ED]/50">Est. 2026</div>
        </div>
        <div className="absolute bottom-12 right-6 hidden md:block">
          <div className="vertical-text text-[#F5F2ED]/50">Swiss Made</div>
        </div>

        {/* Floating info bar (desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl"
        >
          <div className="grid grid-cols-3 gap-4 bg-[#0B0B0B]/80 backdrop-blur-xl border border-[#F5F2ED]/10 rounded-2xl p-4 md:p-6 shadow-2xl">
            {["120 pieces per year", "Hand-built in Geneva", "72h power reserve"].map((item) => (
              <div key={item} className="flex items-center justify-center text-sm md:text-base tracking-wide text-[#F5F2ED]/80 text-center">
                <span className="h-2 w-2 rounded-full bg-[#C5A059] mr-3" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Floating info bar (mobile) */}
      <div className="sm:hidden px-5 mt-6">
        <div className="grid grid-cols-1 gap-3 bg-[#0B0B0B]/80 backdrop-blur-xl border border-[#F5F2ED]/10 rounded-2xl p-4 shadow-2xl">
          {["120 pieces per year", "Hand-built in Geneva", "72h power reserve"].map((item) => (
            <div key={item} className="flex items-center text-sm tracking-wide text-[#F5F2ED]/80">
              <span className="h-2 w-2 rounded-full bg-[#C5A059] mr-3" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Signature strip */}
      <section className="px-5 sm:px-8 md:px-12 lg:px-24 mt-12 md:mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 bg-[#0B0B0B]/70 backdrop-blur-xl border border-[#F5F2ED]/10 rounded-2xl p-4 md:p-5 shadow-lg">
          {[{label: 'Tourbillon AE-01', icon: <Sparkles size={18} />}, {label: 'Grade 5 Titanium', icon: <ShieldCheck size={18} />}, {label: '72h Reserve', icon: <Zap size={18} />}, {label: 'Limited 120 / yr', icon: <Gem size={18} />}].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[12px] md:text-sm tracking-wide text-[#F5F2ED]/80 justify-center">
              <span className="text-[#C5A059]">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero carousel using local images */}
      <section className="px-6 md:px-12 lg:px-24 mt-12 md:mt-16">
        <GalleryCarousel />
      </section>

      {/* Interactive 3D showcase */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-3">
            <Watch3D />
          </div>
          <div className="lg:col-span-2 bg-[#0B0B0B]/70 border border-[#F5F2ED]/10 rounded-3xl p-8 md:p-9 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)] backdrop-blur">
            <div className="flex items-center gap-3 text-[#C5A059] uppercase tracking-[0.3em] text-[11px] mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A059]/40 bg-[#0f0f0f]">
                <Shapes size={16} />
              </span>
              Live 3D View
            </div>
            <h3 className="serif text-3xl sm:text-4xl font-light leading-tight mb-4">Handle it before it exists.</h3>
            <p className="text-[#F5F2ED]/75 leading-relaxed tracking-wide mb-6 text-sm sm:text-base">
              Explore the Aetherion in a full 360°. Rotate, zoom, and inspect the floating tourbillon cage, titanium case, and sapphire dome—exactly as it will feel on your wrist.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#F5F2ED]/75">
              <div className="p-4 border border-[#F5F2ED]/10 rounded-2xl">Interactive<br/><span className="text-[11px] tracking-wide text-[#F5F2ED]/50">Orbit + zoom</span></div>
              <div className="p-4 border border-[#F5F2ED]/10 rounded-2xl">Auto-rotate<br/><span className="text-[11px] tracking-wide text-[#F5F2ED]/50">Showcase mode</span></div>
              <div className="p-4 border border-[#F5F2ED]/10 rounded-2xl">City HDRI<br/><span className="text-[11px] tracking-wide text-[#F5F2ED]/50">Real reflections</span></div>
              <div className="p-4 border border-[#F5F2ED]/10 rounded-2xl">Tourbillon<br/><span className="text-[11px] tracking-wide text-[#F5F2ED]/50">Live spin</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[42vh] sm:h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden shadow-2xl"
          >
            <SafeImage 
              src="https://images.unsplash.com/photo-1587836374828-cb4387df3eb7?q=80&w=2000&auto=format&fit=crop" 
              alt="Lifestyle 1" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-[1.02] hover:scale-100"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">The Heritage</span>
            <h2 className="serif text-4xl md:text-5xl font-light mb-8 leading-tight">
              A legacy of <br/> <span className="italic font-light text-[#C5A059]">excellence.</span>
            </h2>
            <p className="text-[#F5F2ED]/75 font-light leading-relaxed tracking-wide mb-10 text-base md:text-lg">
              Every Aetherion timepiece is the result of over 400 hours of meticulous hand-craftsmanship by master horologists in Geneva. We didn't set out to make another watch. We set out to challenge the very concept of timekeeping.
            </p>
            <Link to="/philosophy" className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase hover:text-[#C5A059] transition-colors group w-max">
              Read Our Philosophy
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: "Design for the wrist",
            desc: "Ergonomic cases with tapered lugs and balanced weight so the watch disappears as you wear it.",
          }, {
            title: "Craft without compromise",
            desc: "Hand-finishing, black polishing, and mirror anglage—techniques reserved for haute horlogerie.",
          }, {
            title: "Built to endure",
            desc: "Titanium, sapphire, and robust sealing deliver a lifetime of resilience for heirloom longevity.",
          }].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-8 border border-[#F5F2ED]/10 rounded-2xl bg-gradient-to-br from-[#0B0B0B] to-[#080808] shadow-xl hover:border-[#C5A059]/40 transition-colors"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">Pillar {idx + 1}</span>
              <h3 className="serif text-3xl font-light mb-4 leading-tight">{pillar.title}</h3>
              <p className="text-[#F5F2ED]/70 leading-relaxed tracking-wide text-sm md:text-base">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#050505] via-[#0A0A0A] to-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <div className="space-y-6 md:space-y-8">
            <div className="rounded-3xl overflow-hidden border border-[#F5F2ED]/10 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.8)]">
              <SafeImage
                src="https://images.unsplash.com/photo-1467019977917-6570e0f333ef?q=80&w=2000&auto=format&fit=crop"
                alt="Atelier"
                className="w-full h-[38vh] sm:h-[46vh] object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-[#F5F2ED]/10 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.8)]">
              <SafeImage
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop"
                alt="Workshop"
                className="w-full h-[32vh] sm:h-[40vh] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#0B0B0B]/70 border border-[#F5F2ED]/10 rounded-3xl p-8 md:p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)] backdrop-blur">
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#C5A059] mb-4">Maison Aetherion</span>
            <h3 className="serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6">Crafted in the silence of Geneva’s ateliers.</h3>
            <p className="text-[#F5F2ED]/75 leading-relaxed tracking-wide mb-6 text-sm sm:text-base">
              Every bevel, every screw head, every bridge is finished by hand—black polishing, côtes de Genève, and interior anglage executed by master horologists who sign their work in the details you feel, not just see.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#F5F2ED]/70">
              <div className="p-4 border border-[#F5F2ED]/10 rounded-2xl">28,800 vph<br/><span className="text-[11px] tracking-wide text-[#F5F2ED]/50">Precision frequency</span></div>
              <div className="p-4 border border-[#F5F2ED]/10 rounded-2xl">5 ATM<br/><span className="text-[11px] tracking-wide text-[#F5F2ED]/50">Everyday resilience</span></div>
              <div className="p-4 border border-[#F5F2ED]/10 rounded-2xl">72 h<br/><span className="text-[11px] tracking-wide text-[#F5F2ED]/50">Power reserve</span></div>
              <div className="p-4 border border-[#F5F2ED]/10 rounded-2xl">120 / yr<br/><span className="text-[11px] tracking-wide text-[#F5F2ED]/50">Strictly limited</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
