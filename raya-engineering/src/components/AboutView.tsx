import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, HelpCircle, ArrowRight, Award, Layers, Sparkles, Building2, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PageType } from '../types';

interface AboutViewProps {
  onPageChange: (page: PageType) => void;
}

export default function AboutView({ onPageChange }: AboutViewProps) {
  return (
    <div className="bg-[#fcfbfa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intro Hero Section */}
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">Company Story</span>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-[#122f39]" id="about-title">
            Pioneering Lightweight Construction Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Raya Engineering LTD is a dedicated manufacturing engineering company that provides sustainable building solutions and decorative facade elements. We manufacture Cellular Lightweight Concrete (CLC) blocks, structural level screeds, and GRP/GRC architectural products designed strictly for modern construction — with an active focus on durability, precision, and performance on site.
          </p>
        </div>

        {/* Detailed Description Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-gray-605 leading-relaxed">
            <p>
              Since establishing our specialized manufacturing facility two years ago, Raya Engineering has continually supplied tier-1 contractors, real estate developers, commercial construction firms, and materials distributors across Nigeria. We also hold the industrial capacity to deliver customized orders across West Africa.
            </p>
            <p>
              Rather than generic concrete blocks that strain columns and increase foundation steel budgets, our products are engineered. Through the scientific injection of micro-bubble foaming agents, our proprietary CLC masonry material delivers structurally sound density blocks that meet stringent international regulations. We work with the people who build things — contractors, consultants, project owners, and developers — and we make sure our materials perform reliably on site.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-150">
              <div>
                <span className="block text-3xl font-extrabold text-[#122f39]">2+</span>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-mono mt-1">Years in Manufacturing</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-[#122f39]">30k+</span>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-mono mt-1">Sqm Supplied</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-[#122f39]">100%</span>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400 font-mono mt-1">Tested ASTM compliance</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-150 bg-[#122f39] p-8 text-white">
              <div className="absolute inset-0 bg-radial-at-t from-[#1d4d5d]/50 to-transparent opacity-65" />
              <div className="relative z-10">
                <Building2 className="h-10 w-10 text-emerald-400" />
                <h3 className="text-xl font-bold mt-6 text-white uppercase tracking-tight">Nigeria Facility Base</h3>
                <p className="mt-4 text-sm text-[#b4d2db] leading-relaxed">
                  Our advanced factory combines foam generation systems, automated mixer controls, and pressurized hydration curing chambers, ensuring every batch of blocks achieves identical dry density and structural performance metrics.
                </p>
                <div className="mt-8 pt-6 border-t border-[#1f4a57] flex items-center justify-between text-xs font-mono font-bold text-white uppercase tracking-wider">
                  <span>Factory Location: Nigeria</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: OUR PRODUCT RANGE */}
        <div className="mt-24 pt-16 border-t border-gray-150">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">Comprehensive Portfolio</span>
            <h2 className="mt-2 font-sans text-3xl text-gray-900 font-extrabold text-[#122f39]">
              Our Structural Product Lines
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Raya Engineering produces three distinctive core materials tailored for efficient architectural assembly.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4f7f6] text-[#122f39] font-bold text-lg mb-6">
                  01
                </div>
                <h3 className="text-lg font-bold text-gray-900">CLC iBlox Blocks</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  High-yield Cellular Lightweight Concrete blocks crafted for both load-bearing and non-load-bearing wall layouts. Lightweight, insulating, and fast to stack.
                </p>
              </div>
              <button 
                onClick={() => onPageChange('products-iblox')}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#122f39] hover:text-[#1d4d5d] transition-colors self-start"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4f7f6] text-[#122f39] font-bold text-lg mb-6">
                  02
                </div>
                <h3 className="text-lg font-bold text-gray-900">CLC Lightweight Screed</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Highly insulating and extremely lightweight wet floor screed. Ideal for level optimization and thermal insulation layers on high-rise concrete slabs without straining structural loads.
                </p>
              </div>
              <button 
                onClick={() => onPageChange('technical')}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#122f39] hover:text-[#1d4d5d] transition-colors self-start"
              >
                View Technical Specs <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4f7f6] text-[#122f39] font-bold text-lg mb-6">
                  03
                </div>
                <h3 className="text-lg font-bold text-gray-900">GRP & GRC Facades</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Glass Reinforced Plastic (GRP) and Glass Reinforced Concrete (GRC) materials tailored into light, customized exterior facades, column capitals, cornices, screens, and brackets.
                </p>
              </div>
              <button 
                onClick={() => onPageChange('products-facade')}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#122f39] hover:text-[#1d4d5d] transition-colors self-start"
              >
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION: VISION & MISSION */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl border border-gray-150 p-8 sm:p-12 shadow-sm">
          <div className="space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight text-[#122f39]">Our Mission</h2>
            <p className="text-gray-500 leading-relaxed">
              To become the leading developer and provider of innovative, certified, lightweight, sustainable construction materials across the Nigerian building sector. We combine materials science with reliable service to empower contractors and developers to build faster, cooler, and on budget.
            </p>
          </div>

          <div className="space-y-6 border-t md:border-t-0 md:border-l border-gray-150 pt-8 md:pt-0 md:pl-12">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight text-[#122f39]">Our Vision Goals</h2>
            <ul className="space-y-3">
              {[
                "Deliver high-quality engineered materials that reduce overall building dead weight.",
                "Support and introduce resource-efficient construction methods to modern bricklayers.",
                "Provide flawless communication, on-site assistance, and certified submittal options.",
                "Promote sustainable green-rated raw material profiles to reduce West Africa's carbon footprint."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-gray-500 leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION: WHY RAYA ENGINEERING */}
        <div className="mt-24 pt-16 border-t border-gray-150">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">The Raya Standard</span>
              <h2 className="mt-2 font-sans text-3xl font-extrabold text-[#122f39] tracking-tight">
                Not Just a Building Supplier. We Are Engineers.
              </h2>
              <p className="mt-4 text-sm text-gray-505 leading-relaxed">
                We do not resell generic aggregates. Every CLC block and composite facade element departs our Lagos state manufacturing zone under precise, standardized specifications.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Strong engineering foundation with active focus on cellular science",
                  "Comprehensive submittal documentation available on demand",
                  "Custom thickness sizing with wooden returnable pallet handling",
                  "ASTM C495, BS EN 771, and ISO 9001 compliance standards"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <Award className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-gray-150 rounded-2xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900">Certified Quality Operations</h3>
              <p className="text-xs text-gray-400 font-mono tracking-widest mt-1">QUALITY CHECKS BEFORE SHIPMENT</p>
              
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4f7f6] text-[#122f39] font-mono text-xs font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Pre-hydration Material Batching</h4>
                    <p className="text-xs text-gray-500 mt-1">Our batches blend certified Portland cement with calculated organic protein foaming elements. This prevents block crumbling other suppliers suffer.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4f7f6] text-[#122f39] font-mono text-xs font-bold">
                    B
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Curing Cycle Enforcement</h4>
                    <p className="text-xs text-gray-500 mt-1">All block lines go through controlled wet spray curing blocks. No sun-drying hacks. Full ASTM dry strength compliance is structurally integrated.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4f7f6] text-[#122f39] font-mono text-xs font-bold">
                    C
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">MEP Chasing Integration</h4>
                    <p className="text-xs text-gray-500 mt-1">Our block densities allow clean wire slot channels without cracking adjacent structures, ensuring seamless site utilities integration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
