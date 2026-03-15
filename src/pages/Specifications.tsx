import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Specifications() {
  const specs = [
    { category: "Case", items: [
      { label: "Diameter", value: "41.5 mm" },
      { label: "Thickness", value: "10.2 mm" },
      { label: "Material", value: "Grade 5 Titanium, Hand-Polished" },
      { label: "Crystal", value: "Domed Sapphire, 7-Layer AR Coating" },
      { label: "Caseback", value: "Exhibition Sapphire Crystal" },
      { label: "Water Resistance", value: "5 ATM (50 meters)" },
    ]},
    { category: "Movement", items: [
      { label: "Calibre", value: "AE-01 In-House Manual Wind" },
      { label: "Complications", value: "Flying Tourbillon, Power Reserve Indicator" },
      { label: "Power Reserve", value: "72 Hours" },
      { label: "Frequency", value: "4 Hz (28,800 vph)" },
      { label: "Jewels", value: "34 Synthetic Rubies" },
      { label: "Finishing", value: "Côtes de Genève, Perlage, Hand-Beveled Edges" },
    ]},
    { category: "Dial & Strap", items: [
      { label: "Dial Material", value: "Onyx / Meteorite / Grand Feu Enamel" },
      { label: "Hands", value: "18k White Gold, Faceted" },
      { label: "Strap", value: "Hand-Stitched Louisiana Alligator" },
      { label: "Clasp", value: "Titanium Deployant Buckle" },
    ]}
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 md:pb-24 min-h-screen relative bg-gradient-to-b from-[#050505] via-[#090909] to-[#050505]">
      {/* Background Blueprint Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F5F2ED 1px, transparent 1px)', backgroundSize: '34px 34px' }}></div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 border-b border-[#F5F2ED]/20 pb-8 mt-8 md:mt-12 gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">Technical Details</span>
            <h1 className="serif text-5xl md:text-6xl font-light">Specifications</h1>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center gap-3 text-[10px] tracking-widest uppercase hover:text-[#C5A059] transition-colors border border-[#F5F2ED]/20 px-6 py-3"
          >
            <Download size={14} /> Download PDF Manual
          </motion.button>
        </div>

        <div className="space-y-16 md:space-y-24 bg-[#0B0B0B]/60 border border-[#F5F2ED]/10 rounded-3xl p-7 sm:p-8 md:p-10 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)] backdrop-blur-sm">
          {specs.map((section, sectionIdx) => (
            <motion.div 
              key={sectionIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl serif text-[#C5A059] mb-8 italic">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-18 gap-y-6">
                {section.items.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-[#F5F2ED]/10 pb-4 group hover:border-[#C5A059]/50 transition-colors">
                    <span className="text-[#F5F2ED]/60 font-light tracking-wide text-sm group-hover:text-[#F5F2ED] transition-colors">{spec.label}</span>
                    <span className="font-medium text-right text-sm">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
