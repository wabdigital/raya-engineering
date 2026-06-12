import { Building2, Mail, Phone, Globe, MapPin, ArrowRight } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onPageChange: (page: PageType) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleNavClick = (page: PageType) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#122f39] text-white">
      {/* Footer CTA Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-b border-[#1f4a57]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#1d4d5d] to-[#122f39] rounded-2xl p-8 md:p-12 border border-[#235868] shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ready to Order or Need More Information?
            </h3>
            <p className="mt-3 text-[#b4d2db] text-base sm:text-lg">
              Contact the Raya Engineering team today. We provide quick consultations, pricing options, and complete submittal documentation for developers and contractors.
            </p>
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-base font-bold text-[#122f39] shadow-md transition-all duration-200 hover:bg-gray-100 hover:shadow-lg active:scale-95"
            id="footer-cta-contact-btn"
          >
            Contact Us
            <ArrowRight className="h-5 w-5 text-[#122f39]" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">Raya Engineering LTD</span>
          </div>
          <p className="text-sm text-[#b4d2db] leading-relaxed max-w-md">
            Manufacturers of CLC (Cellular Lightweight Concrete) lightweight blocks, structural sand screeds, and GRP/GRC architectural elements. Engineered for structural efficiency, rapid installation, and unmatched thermal and fire safety performance across Nigeria and West Africa.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-[#7eb3bf] bg-white/5 py-1.5 px-3 rounded-md w-fit">
            <span>REGULATED IN NIGERIA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              About Raya
            </button>
            <button
              onClick={() => handleNavClick('products-iblox')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              CLC iBlox Blocks
            </button>
            <button
              onClick={() => handleNavClick('products-facade')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              GRP & GRC Facades
            </button>
            <button
              onClick={() => handleNavClick('why-clc')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              Why CLC?
            </button>
            <button
              onClick={() => handleNavClick('technical')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              Technical Data
            </button>
            <button
              onClick={() => handleNavClick('applications')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              Applications
            </button>
            <button
              onClick={() => handleNavClick('submittal')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              Submittal Package
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left text-sm text-[#b4d2db] hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-semibold tracking-wider text-white uppercase">
            Contact Channels
          </h4>
          <ul className="space-y-3 text-sm text-[#b4d2db]">
            <li className="flex items-start gap-3">
              <Phone className="h-5 w-5 shrink-0 text-emerald-400" />
              <a href="tel:+2347037686707" className="hover:text-white transition-colors">
                +234 703 768 6707
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 shrink-0 text-emerald-400" />
              <a href="mailto:Info@raya.ng" className="hover:text-white transition-colors">
                Info@raya.ng
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="h-5 w-5 shrink-0 text-emerald-400" />
              <a href="https://www.raya.ng" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                www.raya.ng
              </a>
            </li>
            <li className="flex items-start gap-3 pt-2">
              <MapPin className="h-5 w-5 shrink-0 text-emerald-400" />
              <span>
                Lagos State, Nigeria
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright Base */}
      <div className="bg-[#0b1f26] py-6 border-t border-[#1f4a57]/40 text-center text-xs text-[#7eb3bf]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Raya Engineering LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleNavClick('technical')} className="hover:text-white transition-colors">Terms of Use</button>
            <button onClick={() => handleNavClick('submittal')} className="hover:text-white transition-colors">Sitemap</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
