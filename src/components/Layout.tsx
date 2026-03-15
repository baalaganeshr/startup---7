import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import ScrollTop from './ScrollTop';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Craftsmanship', path: '/craftsmanship' },
    { name: 'Specifications', path: '/specifications' },
    { name: 'Collection', path: '/collection' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2ED] font-sans selection:bg-[#C5A059] selection:text-[#050505] flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#F5F2ED]/5 px-5 sm:px-6 py-5 md:py-6 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="text-xl tracking-[0.3em] font-light uppercase hover:text-[#C5A059] transition-colors">Aetherion</Link>
        
        <div className="hidden md:flex gap-12 text-[11px] tracking-[0.25em] uppercase">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={`hover:text-[#C5A059] transition-colors relative group ${location.pathname === link.path ? 'text-[#C5A059]' : ''}`}>
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-[#C5A059] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:block">
          <CTAButton variant="outline">Reserve</CTAButton>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className={`text-3xl serif italic hover:text-[#C5A059] transition-colors ${location.pathname === link.path ? 'text-[#C5A059]' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <CTAButton variant="solid" className="mt-6" fullWidth>
              Reserve Now
            </CTAButton>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <ScrollTop />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-4 left-0 right-0 px-5 sm:hidden z-30">
        <CTAButton variant="solid" fullWidth>
          Reserve Your Piece
        </CTAButton>
      </div>

      {/* Footer */}
      <footer className="pt-32 pb-16 px-6 md:px-12 lg:px-24 border-t border-[#F5F2ED]/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-32">
          <h2 className="serif text-5xl md:text-7xl font-light mb-8">Secure Your <span className="italic font-light text-[#C5A059]">Legacy</span></h2>
          <p className="text-[#F5F2ED]/70 max-w-md mb-12 font-light tracking-wide">
            Production is strictly limited to 120 pieces annually. Join the waitlist to secure your allocation for the upcoming year.
          </p>
          <CTAButton variant="solid">
            Join the Waitlist
          </CTAButton>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-[#F5F2ED]/10 pt-12 text-sm font-light text-[#F5F2ED]/60">
          <div className="md:col-span-2">
            <div className="text-xl tracking-[0.3em] font-light uppercase text-[#F5F2ED] mb-6">Aetherion</div>
            <p className="max-w-xs tracking-wide leading-relaxed">
              Crafting the future of horology through uncompromising dedication to the art of watchmaking.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#F5F2ED] tracking-[0.2em] uppercase mb-6 text-[10px]">Explore</h4>
            <ul className="space-y-4 tracking-wide">
              <li><Link to="/collection" className="hover:text-[#C5A059] transition-colors">The Collection</Link></li>
              <li><Link to="/philosophy" className="hover:text-[#C5A059] transition-colors">Our Heritage</Link></li>
              <li><Link to="/craftsmanship" className="hover:text-[#C5A059] transition-colors">Craftsmanship</Link></li>
              <li><Link to="/" className="hover:text-[#C5A059] transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F5F2ED] tracking-[0.2em] uppercase mb-6 text-[10px]">Legal</h4>
            <ul className="space-y-4 tracking-wide">
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 text-center text-[10px] tracking-[0.25em] text-[#F5F2ED]/40 uppercase">
          &copy; {new Date().getFullYear()} Aetherion Horology. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
