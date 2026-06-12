import { motion } from 'motion/react';
import { HelpCircle, Check, X, Scale, Flame, Zap, ArrowRight, Volume2, TreePine, Hammer, SunDim } from 'lucide-react';
import { PageType } from '../types';

interface WhyClcViewProps {
  onPageChange: (page: PageType) => void;
}

export default function WhyClcView({ onPageChange }: WhyClcViewProps) {
  const comparisonRows = [
    { criteria: 'Structural Weight', clc: 'Lightweight (800 - 1000 kg/m³)', traditional: 'Heavy (1800 - 2200 kg/m³)', clcIsBetter: true },
    { criteria: 'Structural Load', clc: 'Low (Reduces foundation steel requirements)', traditional: 'High (Demands heavy columns/beams)', clcIsBetter: true },
    { criteria: 'Thermal Insulation', clc: 'High (Thermal conductivity ~0.15 W/mK)', traditional: 'Low (Conducts direct tropical solar heat)', clcIsBetter: true },
    { criteria: 'Installation Speed', clc: 'Fast (Larger block size, uniform alignment)', traditional: 'Moderate (Irregular size, lots of adjustment)', clcIsBetter: true },
    { criteria: 'MEP Workability', clc: 'Easy (Clean circular sawing and routing)', traditional: 'Difficult (Hard chiseling, lots of cracking)', clcIsBetter: true },
    { criteria: 'Energy Efficiency', clc: 'High (Reduces cooling bills heavily)', traditional: 'Low (Demands near constant standard A/C)', clcIsBetter: true },
    { criteria: 'Fire Resistance', clc: 'Tested Up to 4 Hours Non-combustible', traditional: 'Lower resistance (Thermal fracturing)', clcIsBetter: true },
    { criteria: 'Sound Insulation', clc: 'Highly effective (Cellular acoustic air traps)', traditional: 'Moderate (Solid resonance transmittance)', clcIsBetter: true },
    { criteria: 'Environmental Impact', clc: 'Sustainable (Reduced raw aggregates & quarrying)', traditional: 'High (Deep natural resource extraction)', clcIsBetter: true }
  ];

  return (
    <div className="bg-[#fcfbfa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3.5xl border-b border-gray-150 pb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">TECHNOLOGICAL ADVANTAGE</span>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-[#122f39]" id="why-clc-title">
            Why CLC Blocks?
          </h1>
          <p className="mt-5 text-lg text-gray-650 leading-relaxed max-w-3xl">
            Cellular Lightweight Concrete (CLC) blocks introduce a paradigm shift in masonry technology. By infusing millions of uniform micro-bubbles into highstrength matrix structures, we produce blocks that deliver measurable improvements in construction cost, labor speed, structural load, thermal insulation, and fire safety.
          </p>
        </div>

        {/* 7 Key Advantages */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-[#122f39] mb-10 tracking-tight">7 Key Structural Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 mb-5">
                  <Scale className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">1. Reduce Structural Costs</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Raya iBlox blocks reduce building dead-load metrics by 30% to 40% compared to heavy traditional blocks. This weight reduction allows structural engineers to formulate much leaner slabs, columns, and foundations, saving on concrete volume and structural steel.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-5">
                  <SunDim className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">2. Better Thermal Performance</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Millions of insulated air cells block incoming solar heat. Buildings stay naturally cooler inside amidst Nigeria's harsh tropical weather, resulting in permanent monthly savings on air conditioning electrical bills.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-600 mb-5">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">3. Faster to Build With</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Our larger block profiles span greater wall areas while remaining highly hand-manageable. Bricklayers complete square meter layouts significantly faster, reducing site hydration labor overheads.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600 mb-5">
                  <Flame className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">4. Fire Resistant Up to 4 Hours</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Non-combustible composite materials can resist fire and high insulation-fracturing heat up to 4 full hours. Essential for high-density modern housing and partition walls.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 mb-5">
                  <Volume2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">5. Strong Acoustic Performance</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Sound wave transmittances get scattered inside the extensive foam air bubbles, dampening sound decibels. Ideal for quiet multi-family apartments, offices, and study zones.
                </p>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-8 rounded-xl border border-gray-150 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-green-700 mb-5">
                  <TreePine className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">6. More Sustainable</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Manufacturing uses significantly fewer raw gravel conglomerates and natural resources. Lower carbon impact compared to traditional heavy aggregates quarrying processes.
                </p>
              </div>
            </div>

          </div>

          {/* Benefit 7 standalone wide card */}
          <div className="mt-8 bg-white p-8 rounded-xl border border-gray-150 shadow-xs">
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-gray-700 shrink-0">
                <Hammer className="h-6 w-6 text-[#122f39]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">7. Easy to Work With on Site</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  CLC blocks saw cleanly, accept anchors firmly, and permit smooth utility routing. No hard crumbling, minimal broken blocks in transit, and pristine stucco finishes with less mortar consumption.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="mt-24 pt-16 border-t border-gray-150">
          <div className="max-w-2xl text-left mb-12">
            <h2 className="text-2xl font-extrabold text-[#122f39] tracking-tight">
              CLC iBlox vs. Traditional Hollow Concrete Blocks
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Review how our Cellular engineering stacks up against conventional, heavyweight masonry blocks.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-150 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-[#faf7f3] border-b border-gray-200 text-[11px] font-mono font-bold uppercase text-gray-500 tracking-wider">
                  <th className="p-4 sm:p-5">Comparative Criteria</th>
                  <th className="p-4 sm:p-5 text-[#122f39]">CLC iBlox Blocks</th>
                  <th className="p-4 sm:p-5">Conventional Hollow Blocks</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100 text-gray-650">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-5 hover:text-gray-900 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-gray-900">{row.criteria}</td>
                    <td className="p-4 sm:p-5 bg-emerald-50/25 text-[#122f39] font-medium">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{row.clc}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-gray-500">
                      <div className="flex items-center gap-2">
                        <X className="h-3.5 w-3.5 text-red-400 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-[#122f39] text-white rounded-2xl p-8 sm:p-12 border border-[#235868] shadow-md flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#1d4d5d]/40 to-transparent" />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Ready to specify CLC iBlox on your next project?</h3>
            <p className="mt-3 text-sm text-[#b4d2db] leading-relaxed">
              We provide structural calculation logs, dry density parameters, and certified laboratory validation reports. Request our complete submittal packet folder for immediate review.
            </p>
          </div>
          <button
            onClick={() => onPageChange('submittal')}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#122f39] shadow-md transition-all hover:bg-gray-100"
          >
            Request a Submittal Package
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
