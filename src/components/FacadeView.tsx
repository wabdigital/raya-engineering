import { motion } from 'motion/react';
import { Layers, ShieldCheck, HelpCircle, ArrowRight, Sun, Sparkles, Paintbrush, Compass, Grid } from 'lucide-react';
import { PageType } from '../types';

interface FacadeViewProps {
  onPageChange: (page: PageType) => void;
}

export default function FacadeView({ onPageChange }: FacadeViewProps) {
  return (
    <div className="bg-[#fcfbfa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Intro / Editorial */}
        <div className="max-w-3.5xl border-b border-gray-150 pb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">ARCHITECTURAL FINISHES</span>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-[#122f39]" id="facade-title">
            GRP & GRC Facade Elements
          </h1>
          <p className="mt-5 text-lg text-gray-650 leading-relaxed max-w-3xl">
            Raya Engineering manufactures decorative architectural facade elements utilizing highstrength Glass Reinforced Plastic (GRP) and Glass Reinforced Concrete (GRC). These products are engineered to create spectacular, lightweight exterior profiles, claddings, and solar brise-soleil screens, combining complete design freedom with high tensile durability.
          </p>
        </div>

        {/* Dual Material Split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* GRP Column */}
          <div className="bg-white border border-gray-150 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-mono font-bold text-teal-600 tracking-widest bg-teal-50 px-2.5 py-1 rounded inline-block">Molded Polymer composite</span>
              <h2 className="text-2xl font-extrabold text-[#122f39] tracking-tight">GRP — Glass Reinforced Plastic</h2>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                Glass Reinforced Plastic (fiberglass) is a highly durable, lightweight, structural composite material. Molded into intricate, bespoke forms, Raya GRP is ideal for ornamental cornices, capital columns, detailed door pediments, and bespoke decorative details where traditional materials would require costly, heavy support structures.
              </p>

              <div>
                <h4 className="text-xs font-bold text-[#122f39] uppercase tracking-wider mb-3">Key Material Benefits</h4>
                <ul className="space-y-3">
                  {[
                    { title: "Ultra-Lightweight Profile", desc: "Reduces dead load heavily, making installation fast and extremely safe at high altitudes." },
                    { title: "Infinite Mold Freedom", desc: "Can replicate complex classic, Victorian, or futuristic geometrical profiles easily." },
                    { title: "Complete UV & Climate Resistance", desc: "Impervious to heavy tropical rain, salt-water sea air, and high UV heat rays." },
                    { title: "Zero Corrosion Rusting", desc: "Requires practically zero maintenance or painting over the building's lifecycle." },
                    { title: "Diverse Gloss/Texture Finishes", desc: "Available in custom color tints, high gloss, or structured dry-cast stone textures." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600">
                      <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-950 block">{item.title}</span>
                        <span className="text-gray-500">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-[#f4f7f6] flex items-center justify-center shrink-0">
                <Paintbrush className="h-5 w-5 text-[#122f39]" />
              </div>
              <span className="text-xs text-gray-500">GRP molds are customized in-house from architect CAD profiles.</span>
            </div>
          </div>

          {/* GRC Column */}
          <div className="bg-white border border-gray-150 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-mono font-bold text-indigo-700 tracking-widest bg-indigo-50 px-2.5 py-1 rounded inline-block">Fiber-reinforced cementitious</span>
              <h2 className="text-2xl font-extrabold text-[#122f39] tracking-tight">GRC — Glass Reinforced Concrete</h2>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                Raya Glass Reinforced Concrete merges the solid structural integrity of micro-masonry with the specialized flexural strength of alkali-resistant glass fibers. Replacing traditional cast concrete, GRC panels provide breathtaking concrete aesthetics at a fraction of the structural mass. Best suited for modern brise-soleil screens and architectural cladding.
              </p>

              <div>
                <h4 className="text-xs font-bold text-[#122f39] uppercase tracking-wider mb-3">Key Material Benefits</h4>
                <ul className="space-y-3">
                  {[
                    { title: "Concrete Aesthetic", desc: "Gives structural solid stone and plaster textures without the extreme weight." },
                    { title: "High Flexural & Tensile Strength", desc: "Resistant to impact cracking during transit or installation handling." },
                    { title: "Highly Durability", desc: "Sturdy inside extreme tropical micro-climates, completely warp-free." },
                    { title: "Custom Screen Patterns", desc: "Ideal for molding traditional geometrical Islamic patterns and modern solar screens." },
                    { title: "Excellent Fire Resistance", desc: "Entirely non-combustible material, meeting municipal safety regulations easily." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600">
                      <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-950 block">{item.title}</span>
                        <span className="text-gray-500">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-[#f4f7f6] flex items-center justify-center shrink-0">
                <Sun className="h-5 w-5 text-[#122f39]" />
              </div>
              <span className="text-xs text-gray-500">Perfect for solar heat deflection (brise-soleil design) in West Africa.</span>
            </div>
          </div>

        </div>

        {/* Custom Design Workflow Section */}
        <div className="mt-24 pt-16 border-t border-gray-150">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">THE MANUFACTURING JOURNEY</span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-[#122f39] tracking-tight">
              From Architect Shop Drawings to Cured Installation
            </h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              We coordinate closely with consulting architects, developers, and project structural engineers. We do not mass-produce generic ornaments; each panel belongs to a coordinated structural mold series.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-105 relative">
              <span className="absolute top-4 right-4 text-3xl font-sans font-black text-gray-100">01</span>
              <Compass className="h-6 w-6 text-[#1d4d5d] mb-4" />
              <h4 className="font-bold text-[#122f39]">1. Technical Review</h4>
              <p className="text-xs text-gray-500 mt-2">Architects submit CAD designs and shop drawing files. Our structural engineers review weight distributions, anchor hooks, and wind parameters.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-105 relative">
              <span className="absolute top-4 right-4 text-3xl font-sans font-black text-gray-100">02</span>
              <Grid className="h-6 w-6 text-[#1d4d5d] mb-4" />
              <h4 className="font-bold text-[#122f39]">2. Precision Mold Making</h4>
              <p className="text-xs text-gray-500 mt-2">Once shop drawings are signed and validated, we construct specialized timber, rubber, or glass-reinforced molds to enforce exact dimensions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-105 relative">
              <span className="absolute top-4 right-4 text-3xl font-sans font-black text-gray-100">03</span>
              <Sparkles className="h-6 w-6 text-[#1d4d5d] mb-4" />
              <h4 className="font-bold text-[#122f39]">3. Controlled Casting</h4>
              <p className="text-xs text-gray-500 mt-2">Our technical factory sprays resin or GRC compounds in structured sheets with automated layer rolling, adding structural density.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-105 relative">
              <span className="absolute top-4 right-4 text-3xl font-sans font-black text-gray-100">04</span>
              <ShieldCheck className="h-6 w-6 text-[#1d4d5d] mb-4" />
              <h4 className="font-bold text-[#122f39]">4. Packaging & Dispatch</h4>
              <p className="text-xs text-gray-500 mt-2">The completed facade panels undergo thorough curing cycles followed by dimensional QC check audits, before transport wrap is applied.</p>
            </div>
          </div>
        </div>

        {/* Page CTA */}
        <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-white border border-gray-150 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#122f39] tracking-tight">Looking for customized facade solutions?</h3>
            <p className="mt-3 text-sm text-gray-550 leading-relaxed">
              Get in touch with our team of detail designers to discuss custom pricing, material specifications, and panel installation requirements for your residential or commercial exterior.
            </p>
          </div>
          <button
            onClick={() => onPageChange('contact')}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#122f39] px-7 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-[#1d4d5d]"
          >
            Contact Us
            <ArrowRight className="h-5 w-5 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
}
