import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, HardHat, Warehouse, Landmark, Home, Layers, Eye } from 'lucide-react';
import { PageType } from '../types';

interface ApplicationsViewProps {
  onPageChange: (page: PageType) => void;
}

export default function ApplicationsView({ onPageChange }: ApplicationsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'block' | 'facade'>('all');

  const appTypes = [
    {
      id: '1',
      title: 'Residential Buildings',
      tag: 'block',
      img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=800',
      desc: 'Ideal for major housing schemes, estate developments, and premium individual residences. The extreme thermal insulation keeps interiors highly breathable, while the acoustic dampening blocks noises between living modules. Lightweight structures make handling easy on site.'
    },
    {
      id: '2',
      title: 'Commercial Developments',
      tag: 'facade',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      desc: 'Office buildings, retail parks, boutique hotels, and mixed-use malls. Structural weight efficiency allows structural engineers to formulate lighter overhead concrete slabs, significantly dropping construction cost parameters. GRC solar screens add high-end aesthetics.'
    },
    {
      id: '3',
      title: 'Industrial Facilities',
      tag: 'block',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      desc: 'Warehouses, dry factories, and storage parks demanding urgent construction and highly robust fire isolation ratings. CLC blocking walls go up rapidly, provide pristine finishes, and withstand 4-hour fire ratings with high chemical resistance metrics.'
    },
    {
      id: '4',
      title: 'Skyscraper High-Rise Towers',
      tag: 'block',
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
      desc: 'Dead-weight drops are critical at high altitudes. Raya blocking drops structural concrete weight up to 40% per elevation floor compared to hollow concrete blocks, minimizing cumulative structural strain on foundations, columns, and beam spans.'
    },
    {
      id: '5',
      title: 'Load-Bearing Wall Systems',
      tag: 'block',
      img: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800',
      desc: 'High-density block variants (iBLOX-1000 and CLC-1200) are engineered to support vertical loads. They maintain structural safety and bearing standards while remaining considerably lighter than conventional masonry. (Subject to structural engineer sign-off).'
    },
    {
      id: '6',
      title: 'Non-Load-Bearing Partitions',
      tag: 'facade',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      desc: 'iBLOX-800 blocks are perfect for general interior division grids. Exceptionally quick to saw, route wire conduits cleanly, and accept high-end wall stucco plaster directly with zero preparation needs.'
    }
  ];

  const filteredApps = selectedCategory === 'all' 
    ? appTypes 
    : appTypes.filter(app => app.tag === selectedCategory);

  return (
    <div className="bg-[#fcfbfa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Intro */}
        <div className="max-w-3.5xl border-b border-gray-150 pb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">VERSATILITY IN ACTION</span>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-[#122f39]" id="applications-title">
            Structural & Architectural Applications
          </h1>
          <p className="mt-5 text-lg text-gray-650 leading-relaxed max-w-3xl">
            Raya Engineering materials are utilized across diverse civil sectors. From highstrength structural infills inside skyscrapers to spectacular composite finishes and screens, our materials are specified on premium sites across West Africa.
          </p>
        </div>

        {/* Category Controls */}
        <div className="mt-12 flex justify-center border-b border-gray-150 pb-0.5">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                selectedCategory === 'all' ? 'border-[#122f39] text-[#122f39]' : 'border-transparent text-gray-500 hover:text-gray-950'
              }`}
            >
              All Applications
            </button>
            <button
              onClick={() => setSelectedCategory('block')}
              className={`px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                selectedCategory === 'block' ? 'border-[#122f39] text-[#122f39]' : 'border-transparent text-gray-500 hover:text-gray-950'
              }`}
            >
              CLC Block Utility
            </button>
            <button
              onClick={() => setSelectedCategory('facade')}
              className={`px-6 py-3 text-sm font-bold border-b-2 transition-all ${
                selectedCategory === 'facade' ? 'border-[#122f39] text-[#122f39]' : 'border-transparent text-gray-500 hover:text-gray-950'
              }`}
            >
              Facade Solutions
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApps.map((app) => (
            <div key={app.id} className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-52 relative overflow-hidden bg-[#0d1f26]">
                <img 
                  src={app.img} 
                  alt={app.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-4 left-4 text-xs font-mono font-bold tracking-widest text-[#96cbd7] uppercase">
                  {app.tag === 'block' ? 'CLC Concrete Block' : 'GRP/GRC Facade Decor'}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-950">{app.title}</h3>
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECTION: SITE INSTALLATION TIMELINE */}
        <div className="mt-24 pt-16 border-t border-gray-150">
          <div className="max-w-2xl mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">ON-SITE WORKFLOW</span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-[#122f39] tracking-tight">
              Rapid Masonry Site Installation Flow
            </h2>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Dramatically simplify wall construction with Raya iBlox interlocking blocks. See the step-by-step site handling methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative p-6 bg-white rounded-xl border border-gray-150">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#faf7f3] border border-gray-250 font-mono font-bold text-[#122f39] mb-5">
                01
              </div>
              <h4 className="font-bold text-gray-950">1. Pallets Unloading</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2.5">
                Palletized blocks are dispatched directly to site locations. Forklifts deposit pallets inside scaffolding zones cleanly, reducing aggregate breakage waste.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-xl border border-gray-150">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#faf7f3] border border-gray-250 font-mono font-bold text-[#122f39] mb-5">
                02
              </div>
              <h4 className="font-bold text-gray-950">2. Base Course Alignment</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2.5">
                Set down a level structural mortar base bed for your first block course. Precision baseline alignment guarantees rapid horizontal stacking across all layers.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-xl border border-gray-150">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#faf7f3] border border-gray-250 font-mono font-bold text-[#122f39] mb-5">
                03
              </div>
              <h4 className="font-bold text-gray-950">3. Fast Interlock Stacking</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2.5">
                Apply a thin line of adhesive across interlocking joint seams. Position blocks into corresponding tracks. Alignment locks instantly, reducing mortar waste up to 70%.
              </p>
            </div>

            <div className="relative p-6 bg-white rounded-xl border border-gray-150">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#faf7f3] border border-gray-250 font-mono font-bold text-[#122f39] mb-5">
                04
              </div>
              <h4 className="font-bold text-gray-950">4. Conduit Routing & Finish</h4>
              <p className="text-xs text-gray-500 leading-relaxed mt-2.5">
                Use electric chasers or saw paths to rout MEP wire networks, then apply gypsum wall plasters or cement cladding coats directly. Full structurally complete wall!
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-[#122f39] text-white border border-[#235868] shadow-md flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden text-center md:text-left">
          <div className="absolute inset-0 bg-radial-at-t from-[#1d4d5d]/40 to-transparent" />
          <div className="relative z-10 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold">Have a major development we can supply?</h3>
            <p className="mt-3 text-sm text-[#b4d2db] leading-relaxed">
              We work directly with structural engineers, lead quantity surveyors, real estate developers, and construction consultants. Get in touch to schedule a custom volume consultation.
            </p>
          </div>
          <button
            onClick={() => onPageChange('contact')}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#122f39] text-sm font-bold shadow hover:bg-gray-100"
          >
            Discuss Your Project Scope
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
