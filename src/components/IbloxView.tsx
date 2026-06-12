import { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, Ruler, Box, Sparkles, AlertTriangle, ArrowRight, Table, Cpu, Shield, DownloadCloud, CheckCircle2 } from 'lucide-react';
import { PageType, BlockSize } from '../types';

interface IbloxViewProps {
  onPageChange: (page: PageType) => void;
}

export default function IbloxView({ onPageChange }: IbloxViewProps) {
  const [activeTab, setActiveTab] = useState<'800' | '1000' | 'classification'>('800');

  const sizes800: BlockSize[] = [
    { width: 100, height: 250, length: 510, weightPerBlock: 11.50, weightPerSqm: 89.70 },
    { width: 150, height: 250, length: 510, weightPerBlock: 13.00, weightPerSqm: 101.40 },
    { width: 200, height: 250, length: 510, weightPerBlock: 15.50, weightPerSqm: 120.90 },
    { width: 225, height: 250, length: 510, weightPerBlock: 16.50, weightPerSqm: 128.70 },
  ];

  const sizes1000: BlockSize[] = [
    { width: 100, height: 250, length: 510, weightPerBlock: 14.40, weightPerSqm: 112.20 },
    { width: 150, height: 250, length: 510, weightPerBlock: 16.30, weightPerSqm: 126.80 },
    { width: 200, height: 250, length: 510, weightPerBlock: 19.40, weightPerSqm: 151.20 },
    { width: 225, height: 250, length: 510, weightPerBlock: 20.70, weightPerSqm: 160.90 },
  ];

  return (
    <div className="bg-[#fcfbfa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Intro */}
        <div className="max-w-3.5xl border-b border-gray-150 pb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">CLC MASONRY PRODUCTS</span>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-[#122f39]" id="iblox-title">
            CLC iBlox Lightweight Blocks
          </h1>
          <p className="mt-5 text-lg text-gray-650 leading-relaxed max-w-3xl">
            The CLC iBlox is our Cellular Lightweight Concrete block — available in two density grades, a range of standard structural sizes, and custom dimensions on request. Specially optimized for load-bearing and partition wall construction in residential, commercial, mixed-use housing, and industrial high-rises.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-gray-150 pb-0.5">
          <button
            onClick={() => setActiveTab('800')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === '800' ? 'border-[#122f39] text-[#122f39]' : 'border-transparent text-gray-500 hover:text-gray-950'
            }`}
          >
            iBLOX-800 Block Line
          </button>
          <button
            onClick={() => setActiveTab('1000')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === '1000' ? 'border-[#122f39] text-[#122f39]' : 'border-transparent text-gray-500 hover:text-gray-950'
            }`}
          >
            iBLOX-1000 Structural Line
          </button>
          <button
            onClick={() => setActiveTab('classification')}
            className={`px-5 py-3 text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'classification' ? 'border-[#122f39] text-[#122f39]' : 'border-transparent text-gray-500 hover:text-gray-950'
            }`}
          >
            Full Density Taxonomy
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="mt-10 bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 shadow-sm">
          {activeTab === '800' && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold bg-[#faf7f3] text-[#122f39] border border-gray-250 py-1 px-2.5 rounded">800 kg/m³</span>
                    <span className="text-xs font-mono font-bold bg-[#faf7f3] text-[#122f39] border border-gray-250 py-1 px-2.5 rounded">Strength: 1.0 MPa</span>
                    <span className="text-xs font-mono font-bold bg-[#faf7f3] text-emerald-600 border border-emerald-100 py-1 px-2.5 rounded">High Insulation</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">General Walling & Partitions</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mt-3">
                    The iBLOX-800 is engineered as a lightweight partition block. Best optimized for general interior and external partitioning walls, non-load-bearing enclosures, and floor dividers. It is highly insulation-focused, completely clean to plane or saw on site, and speeds up structural completion values in building frames.
                  </p>
                </div>
                
                {/* Visual Block Representation */}
                <div className="lg:col-span-5 bg-[#faf7f3] border border-gray-200.5 p-6 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    {/* SVG block schematic */}
                    <svg viewBox="0 0 200 120" className="w-52 h-auto mx-auto text-[#1d4d5d]">
                      <path d="M70,30 L160,30 L120,80 L30,80 Z" fill="#b4d2db" stroke="#122f39" strokeWidth="2" strokeLinejoin="miter"/>
                      <path d="M160,30 L160,50 L120,100 L120,80 Z" fill="#7eb3bf" stroke="#122f39" strokeWidth="2" strokeLinejoin="miter"/>
                      <path d="M30,80 L30,100 L120,100 L120,80 Z" fill="#96cbd7" stroke="#122f39" strokeWidth="2" strokeLinejoin="miter"/>
                      {/* Interlocking bump representation */}
                      <circle cx="85" cy="55" r="8" fill="#122f39" opacity="0.15"/>
                    </svg>
                    <span className="block text-[10px] font-mono tracking-widest text-[#122f39] uppercase font-bold mt-4">iBLOX-800 Cell Schematic</span>
                  </div>
                </div>
              </div>

              {/* Sizing Grid Table */}
              <div className="pt-6 border-t border-gray-150">
                <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-[#1d4d5d]" />
                  Available Standard Dimensions (iBLOX-800)
                </h4>
                <div className="overflow-x-auto rounded-lg border border-gray-150">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#faf7f3] border-b border-gray-150 text-[11px] uppercase tracking-wider font-mono text-gray-500 font-bold">
                        <th className="p-4">Width (mm)</th>
                        <th className="p-4">Height (mm)</th>
                        <th className="p-4">Length (mm)</th>
                        <th className="p-4">Weight (kg/Block)</th>
                        <th className="p-4">Sqm Weight (kg/m²)</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100 text-gray-600">
                      {sizes800.map((size, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-bold text-gray-900">{size.width} mm</td>
                          <td className="p-4">{size.height} mm</td>
                          <td className="p-4">{size.length} mm</td>
                          <td className="p-4 font-mono text-[#122f39] font-semibold">{size.weightPerBlock.toFixed(2)} kg</td>
                          <td className="p-4 font-mono">{size.weightPerSqm.toFixed(1)} kg/m²</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === '1000' && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold bg-[#faf7f3] text-[#122f39] border border-gray-250 py-1 px-2.5 rounded">1,000 kg/m³</span>
                    <span className="text-xs font-mono font-bold bg-[#faf7f3] text-[#122f39] border border-gray-250 py-1 px-2.5 rounded">Strength: 1.75 MPa</span>
                    <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 py-1 px-2.5 rounded">Load-Bearing Optimized</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-4">Structural and Light Load-Bearing applications</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mt-3">
                    The iBLOX-1000 is our heavy-duty workhorse line. It maintains high cellular stability, but introduces higher density values to withstand superior structural masonry requirements. Specially engineered for external structural walls, load-bearing frames, multi-story masonry segments, and locations with stringent flexural specifications.
                  </p>
                </div>

                <div className="lg:col-span-5 bg-[#faf7f3] border border-gray-200 p-6 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <svg viewBox="0 0 200 120" className="w-52 h-auto mx-auto text-[#122f39]">
                      <path d="M70,30 L160,30 L120,80 L30,80 Z" fill="#96cbd7" stroke="#122f39" strokeWidth="2.5" strokeLinejoin="miter"/>
                      <path d="M160,30 L160,50 L120,100 L120,80 Z" fill="#1f4a57" stroke="#122f39" strokeWidth="2.5" strokeLinejoin="miter"/>
                      <path d="M30,80 L30,100 L120,100 L120,80 Z" fill="#122f39" stroke="#122f39" strokeWidth="2.5" strokeLinejoin="miter"/>
                    </svg>
                    <span className="block text-[10px] font-mono tracking-widest text-[#122f39] uppercase font-bold mt-4">iBLOX-1000 Density Block Block</span>
                  </div>
                </div>
              </div>

              {/* Sizing Grid Table */}
              <div className="pt-6 border-t border-gray-150">
                <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Ruler className="h-4 w-4 text-[#1d4d5d]" />
                  Available Standard Dimensions (iBLOX-1000)
                </h4>
                <div className="overflow-x-auto rounded-lg border border-gray-150">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#faf7f3] border-b border-gray-150 text-[11px] uppercase tracking-wider font-mono text-gray-500 font-bold">
                        <th className="p-4">Width (mm)</th>
                        <th className="p-4">Height (mm)</th>
                        <th className="p-4">Length (mm)</th>
                        <th className="p-4">Weight (kg/Block)</th>
                        <th className="p-4">Sqm Weight (kg/m²)</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100 text-gray-600">
                      {sizes1000.map((size, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-bold text-gray-900">{size.width} mm</td>
                          <td className="p-4">{size.height} mm</td>
                          <td className="p-4">{size.length} mm</td>
                          <td className="p-4 font-mono text-[#122f39] font-semibold">{size.weightPerBlock.toFixed(2)} kg</td>
                          <td className="p-4 font-mono">{size.weightPerSqm.toFixed(1)} kg/m²</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'classification' && (
            <div className="space-y-6 animate-fade-in hover:shadow-xs">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Dry Density and Compressive Strength Classification</h3>
                <p className="text-sm text-gray-500 leading-relaxed mt-1">
                  Cellular concrete performance is highly dependent on density. We manufacture block structural categories spanning from ultra-light partitions to core load-bearing variants in Nigeria.
                </p>
              </div>

              <div className="overflow-x-auto rounded-lg border border-gray-150">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#faf7f3] border-b border-gray-150 text-[11px] uppercase tracking-wider font-mono text-gray-505 font-bold">
                      <th className="p-4">Class Range</th>
                      <th className="p-4">Target Density (kg/m³)</th>
                      <th className="p-4">Average Min Strength (MPa)</th>
                      <th className="p-4">Primary Application Optimization</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-150 text-gray-600">
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-mono font-bold text-[#1d4d5d]">CLC-600</td>
                      <td className="p-4">600</td>
                      <td className="p-4 font-semibold text-gray-900">0.5 MPa</td>
                      <td className="p-4 text-xs text-gray-500">Partition walls — strictly non-load bearing and thermal relief lines</td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-gray-50">
                      <td className="p-4 font-mono font-bold text-[#1d4d5d]">CLC-800</td>
                      <td className="p-4">800</td>
                      <td className="p-4 font-semibold text-gray-900">1.0 MPa</td>
                      <td className="p-4 text-xs font-medium text-[#122f39]">General walling and exterior division partitions</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-mono font-bold text-[#1d4d5d]">CLC-1000</td>
                      <td className="p-4">1000</td>
                      <td className="p-4 font-semibold text-gray-900">1.75 MPa</td>
                      <td className="p-4 text-xs font-medium text-[#122f39]">Structural framing and light load-bearing partitions</td>
                    </tr>
                    <tr className="bg-gray-50/50 hover:bg-gray-50">
                      <td className="p-4 font-mono font-bold text-[#1d4d5d]">CLC-1200</td>
                      <td className="p-4">1200</td>
                      <td className="p-4 font-semibold text-gray-900">3.25 MPa</td>
                      <td className="p-4 text-xs text-gray-500">Heavy structural / Load-bearing exterior and core wall structures</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex gap-3 items-start bg-[#fffbeb] border border-amber-200 rounded-lg p-4 mt-4">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-700 leading-relaxed">
                  <span className="font-extrabold block">Pallet Delivery Protocols:</span>
                  All bricks are secured, wrapped, and delivered on robust wood structural pallets. To optimize industrial resources, the wood pallets remain Raya property and must be returned safely to the factory base once blocks are deployed on your site.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SECTION: FEATURES OF CLC IBLOX */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interlocking Panel */}
          <div className="bg-white border border-gray-150 p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 mb-6">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#122f39] tracking-tight">Interlocking Capability</h3>
              <p className="mt-4 text-sm text-gray-550 leading-relaxed">
                Raya CLC iBlox blocks are precision manufactured with a native interlocking groove profile. Unlike traditional flat blocks that slide during laying and require deep thick mortar leveling, our interlocking groove system aligns each block automatically. 
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Reduces overall thin-joint adhesive formulation usage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Dramatically accelerates wall leveling and stacking speeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Ensures rigid lateral resistance during standard site cement hydration</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 border-t border-gray-100 pt-6">
              <span className="text-[10px] font-mono tracking-widest text-gray-400 block uppercase mb-4">Interlocking System Diagram</span>
              <div className="bg-[#fcfbfa] border border-gray-200.5 py-4 rounded-lg flex justify-center">
                <svg viewBox="0 0 240 80" className="w-52 h-auto text-gray-400">
                  {/* Left block with bump */}
                  <rect x="20" y="25" width="80" height="30" rx="3" fill="#faf7f3" stroke="#122f39" strokeWidth="2" />
                  <path d="M100,32 L105,32 L105,48 L100,48" stroke="#122f39" strokeWidth="2" fill="none" />
                  {/* Right block with groove */}
                  <rect x="110" y="25" width="80" height="30" rx="3" fill="#b4d2db" stroke="#122f39" strokeWidth="2" />
                  <path d="M110,32 L105,32 L105,48 L110,48" stroke="#122f39" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* MEP Chasing Panel */}
          <div className="bg-white border border-gray-150 p-8 sm:p-10 rounded-2xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-[#122f39] tracking-tight">Clean Site Workability & MEP Chasing</h3>
              <p className="mt-4 text-sm text-gray-550 leading-relaxed">
                Traditional concrete hollow blocks structural matrix breaks apart when hammered or chased for utilities, leading to deep structural patch repairs. Raya iBlox blocks can be easily sawed with dry carpentry hand tools, cut cleanly, planed directly, and chased with electric wall chasers effortlessly.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Prists clean straight conduit pathways with zero structural crumble</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Accommodates all sanitary piping and conduit pipes within narrow profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Dramatically decreases final site mortar plaster repair volume</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-6">
              <span className="text-[10px] font-mono tracking-widest text-gray-400 block uppercase mb-4">U-Chamber conduit integration</span>
              <div className="bg-[#fcfbfa] border border-gray-200.5 py-4 rounded-lg flex justify-center">
                <svg viewBox="0 0 240 80" className="w-52 h-auto text-gray-400">
                  <rect x="50" y="15" width="140" height="50" rx="4" fill="#faf7f3" stroke="#122f39" strokeWidth="2" />
                  {/* Chased groove with tube */}
                  <path d="M110,15 L110,35 A10,10 0 0,0 130,35 L130,15" fill="none" stroke="#122f39" strokeWidth="2" />
                  <circle cx="120" cy="35" r="5" fill="#f59e0b" />
                  <line x1="50" y1="15" x2="190" y2="15" stroke="#122f39" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE CTA */}
        <div className="mt-24 rounded-2xl bg-[#122f39] text-white p-8 sm:p-12 border border-[#235868] text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[#1d4d5d] opacity-20 mix-blend-screen" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold tracking-tight">Ready to specify CLC iBlox on your project?</h3>
            <p className="mt-4 text-sm text-[#b4d2db] max-w-xl mx-auto">
              Get the official consultant submittal package file containing complete test certificates, certified ASTM methods, weight listings, structural ratings, and sample blocks.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onPageChange('submittal')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#122f39] shadow transition-all hover:bg-gray-100"
              >
                Request Submittal Package
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onPageChange('technical')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1d4d5d] border border-[#2e6475] px-6 py-3.5 text-sm font-bold text-white shadow transition-all hover:bg-[#235868]"
              >
                <DownloadCloud className="h-4 w-4" />
                Technical Data Sheet
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
