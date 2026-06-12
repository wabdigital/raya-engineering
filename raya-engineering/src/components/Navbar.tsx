import { useState } from 'react';
import { Menu, X, ChevronDown, Building2 } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', value: 'home' as PageType },
    { name: 'About', value: 'about' as PageType },
    { 
      name: 'Products', 
      value: 'products-iblox' as PageType, 
      hasDropdown: true,
      subItems: [
        { name: 'CLC iBlox Blocks', value: 'products-iblox' as PageType },
        { name: 'GRP & GRC Facade Elements', value: 'products-facade' as PageType }
      ]
    },
    { name: 'Why CLC?', value: 'why-clc' as PageType },
    { name: 'Technical', value: 'technical' as PageType },
    { name: 'Applications', value: 'applications' as PageType },
    { name: 'Consultant Submittal', value: 'submittal' as PageType },
    { name: 'Contact', value: 'contact' as PageType },
  ];

  const handleLinkClick = (page: PageType) => {
    onPageChange(page);
    setIsOpen(false);
    setProductDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="group flex items-center gap-3 text-left focus:outline-none"
          id="nav-logo"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#122f39] text-white transition-all duration-300 group-hover:bg-[#1f4a57]">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <span className="block font-sans text-lg font-bold tracking-tight text-[#122f39] uppercase">
              Raya Engineering
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase">
              Nigeria • Est. 2024
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              const isActive = currentPage === 'products-iblox' || currentPage === 'products-facade';
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setProductDropdownOpen(true)}
                  onMouseLeave={() => setProductDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#122f39] focus:outline-none ${
                      isActive ? 'text-[#122f39] bg-gray-50' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown menu */}
                  {productDropdownOpen && (
                    <div className="absolute left-0 mt-0 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5 animate-fade-in">
                      {link.subItems?.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleLinkClick(sub.value)}
                          className={`w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors hover:bg-gray-50 ${
                            currentPage === sub.value ? 'text-[#122f39] bg-gray-50/70 font-semibold border-l-2 border-[#122f39]' : 'text-gray-600'
                          }`}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = currentPage === link.value;
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.value)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[#122f39] ${
                  isActive ? 'text-[#122f39] bg-gray-50 font-semibold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile toggle */}
        <div className="flex items-center gap-4">

          
          <button
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#122f39] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1d4d5d] active:scale-[0.98]"
            id="nav-cta-btn"
          >
            Get a Quote
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 lg:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-inner">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {link.name}
                    </div>
                    {link.subItems?.map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleLinkClick(sub.value)}
                        className={`block w-full rounded-lg px-6 py-2 text-left text-sm font-medium transition-colors ${
                          currentPage === sub.value ? 'bg-gray-50 text-[#122f39] font-bold' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                );
              }

              const isActive = currentPage === link.value;
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.value)}
                  className={`block w-full rounded-lg px-3 py-2.5 text-left text-base font-medium transition-colors ${
                    isActive ? 'bg-gray-50 text-[#122f39] font-bold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">

              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center rounded-lg bg-[#122f39] py-3 text-base font-bold text-white shadow-sm"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
