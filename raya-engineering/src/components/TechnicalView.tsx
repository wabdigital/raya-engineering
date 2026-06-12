import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, CheckCircle2, ChevronRight, HelpCircle, HardHat, FileCheck, Landmark, ListChecks, ArrowDownToLine } from 'lucide-react';
import { PageType } from '../types';

interface TechnicalViewProps {
  onPageChange: (page: PageType) => void;
}

export default function TechnicalView({ onPageChange }: TechnicalViewProps) {
  const [downloadingTds, setDownloadingTds] = useState(false);
  const [downloadingPackage, setDownloadingPackage] = useState(false);
  const [showToast, setShowToast] = useState<string | null>(null);

  const simulateDownload = (type: 'tds' | 'package') => {
    if (type === 'tds') {
      setDownloadingTds(true);
      setTimeout(() => {
        setDownloadingTds(false);
        triggerToast('Technical Data Sheet PDF downloaded successfully!');
      }, 1500);
    } else {
      setDownloadingPackage.call(null, true);
      setTimeout(() => {
        setDownloadingPackage(false);
        triggerToast('Submittal Package PDF downloaded successfully!');
      }, 1500);
    }
  };

  const triggerToast = (msg: string) => {
    setShowToast(msg);
    setTimeout(() => {
      setShowToast(null);
    }, 4000);
  };

  const technicalSpecs = [
    { label: 'Dry Density Range', val: '600 – 1,200 kg/m³', desc: 'Regulatible by foam density ratios' },
    { label: 'Compressive Strength', val: '0.5 – 3.25 MPa', desc: 'Compliant across structural specifications' },
    { label: 'Thermal Conductivity', val: '0.10 – 0.30 W/mK', desc: 'Prevents tropical solar radiation transfer' },
    { label: 'Fire Resistance Rating', val: 'Tested Up to 4 Hours', desc: 'Non-combustible premium cell aggregate' },
    { label: 'Water Absorption Metric', val: '10% – 20% by volume', desc: 'Inherent moisture barrier values' },
    { label: 'Drying Shrinkage Coefficient', val: '< 0.05%', desc: 'Highly stable dimensional masonry' },
    { label: 'Acoustic Sound Insulation', val: 'High decibel attenuation', desc: 'Absorbs mid-frequency structural echoes' }
  ];

  return (
    <div className="bg-[#fcfbfa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3.5xl border-b border-gray-150 pb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">TECHNICAL DOCUMENTATION</span>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-[#122f39]" id="technical-title">
            Technical Data & Compliance
          </h1>
          <p className="mt-5 text-lg text-gray-650 leading-relaxed max-w-3xl">
            All the technical, laboratory, and dimensional parameters required to specify, design with, calculate quantities, or procure CLC iBlox blocks. Download the direct Technical Data Sheet below, or request a complete consultant submittal package folder.
          </p>
        </div>

        {/* Technical Data Sheets & Density Table Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Specs sheet */}
          <div className="lg:col-span-7 bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm h-fit">
            <h3 className="text-lg font-bold text-[#122f39] mb-6 flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-[#1d4d5d]" />
              CLC iBlox Property Specification
            </h3>
            
            <div className="space-y-4">
              {technicalSpecs.map((spec, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-gray-100 last:border-b-0 gap-1.5">
                  <div>
                    <span className="block text-sm font-bold text-gray-950">{spec.label}</span>
                    <span className="block text-xs text-gray-400 font-mono">{spec.desc}</span>
                  </div>
                  <span className="text-sm font-bold font-mono text-[#122f39] bg-[#faf7f3] border border-gray-150 py-1.5 px-3.5 rounded self-start sm:self-center">
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Classification & Compliance Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Class Cards */}
            <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#122f39] mb-4 flex items-center gap-2">
                <HardHat className="h-5 w-5 text-[#1d4d5d]" />
                Strength Classifications
              </h3>
              <div className="space-y-3">
                {[
                  { range: 'CLC-600', val: '0.5 MPa', desc: 'Internal division acoustic partitions' },
                  { range: 'CLC-800', val: '1.0 MPa', desc: 'General masonry partition wall systems' },
                  { range: 'CLC-1000', val: '1.75 MPa', desc: 'Load-bearing core / Multi-story structures' },
                  { range: 'CLC-1200', val: '3.25 MPa', desc: 'Heavy load-bearing structural frames' }
                ].map((cls, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-[#faf7f3] border border-gray-100">
                    <div>
                      <span className="block text-xs font-mono font-bold text-[#122f39]">{cls.range}</span>
                      <span className="block text-xs text-gray-500">{cls.desc}</span>
                    </div>
                    <span className="text-xs font-black text-emerald-600">{cls.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance badges */}
            <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#122f39] mb-4 flex items-center gap-2">
                <Landmark className="h-5 w-5 text-[#1d4d5d]" />
                Compliance Standards
              </h3>
              <div className="space-y-3 font-mono text-xs text-gray-650">
                <div className="p-3 border-l-2 border-[#122f39] bg-gray-50/50">
                  <span className="font-extrabold text-gray-950 block">ASTM C495</span>
                  <span className="text-[11px] text-gray-500 block mt-0.5">Method testing of compressive strengths for lightweight insulating concretes</span>
                </div>
                <div className="p-3 border-l-2 border-[#122f39] bg-gray-50/50">
                  <span className="font-extrabold text-gray-950 block">BS EN 771</span>
                  <span className="text-[11px] text-gray-500 block mt-0.5">European masonry product requirements & design standards</span>
                </div>
                <div className="p-3 border-l-2 border-[#122f39] bg-gray-50/50">
                  <span className="font-extrabold text-gray-950 block">ISO 9001</span>
                  <span className="text-[11px] text-gray-500 block mt-0.5">International compliance of factory quality manufacturing controls</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: 7-STEP MANUFACTURING PROCESS */}
        <div className="mt-24 pt-16 border-t border-gray-150">
          <div className="max-w-xl mb-12">
            <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">QUALITY CONTROL</span>
            <h2 className="mt-2 font-sans text-3xl font-extrabold text-[#122f39] tracking-tight">
              Our Controlled 7-Step Manufacturing Process
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              We monitor density metrics at every sequence to ensure full structural compliance before dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Material Batching', desc: 'Hydration ingredients including Portland cement and performance additives are measured with calibrated precision scales.' },
              { step: '2', title: 'Foam Generation', desc: 'Stable, micro-bubble cellular foam is produced through a calibrated high-pressure foam generator.' },
              { step: '3', title: 'Foam Mixing', desc: 'Calibrated foam is thoroughly blended into the cement slurry to secure identical targeting densities.' },
              { step: '4', title: 'Block Casting', desc: 'Mixed slurry compositions are cast inside dimensional precision modular blocks templates.' },
              { step: '5', title: 'Demolding', desc: 'Blocks are systematically extracted from molds once initial set curing structures are reached.' },
              { step: '6', title: 'Hydrated Curing', desc: 'Long-term water curing cycles are enforced to achieve design load compressive strengths.' },
              { step: '7', title: 'Quality Audits', desc: 'Physical load testing and weight evaluations are performed on every batch before loading.' }
            ].map((p, idx) => (
              <div key={idx} className="bg-white border border-gray-150 p-6 rounded-xl flex gap-4 items-start shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
                <span className="absolute bottom-0 right-0 h-6 w-6 uppercase text-gray-100 font-sans font-black flex items-end justify-end p-1 text-2xl">
                  {p.step}
                </span>
                <span className="text-xs font-mono font-bold bg-[#faf7f3] text-[#122f39] p-2 rounded-lg leading-none shrink-0 border border-gray-250">
                  {p.step}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{p.title}</h4>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Downloads Panel */}
        <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-[#122f39] text-white border border-[#235868] shadow-md relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-radial-at-b from-[#1d4d5d]/40 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold">Secure Official Material Documentation Now</h3>
            <p className="mt-3 text-sm text-[#b4d2db] max-w-xl mx-auto">
              Select your required files below. Documents include laboratory compression test certificates, specification spreadsheets, chemical profiles, and methods of assembly.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => simulateDownload('tds')}
                disabled={downloadingTds}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#122f39] shadow-sm hover:bg-gray-100 disabled:opacity-50 transition-all cursor-pointer"
              >
                {downloadingTds ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#122f39] border-t-transparent rounded-full animate-spin"></span>
                    Compiling TDS PDF...
                  </>
                ) : (
                  <>
                    <ArrowDownToLine className="h-4 w-4 text-[#122f39]" />
                    Download Technical Data Sheet (PDF)
                  </>
                )}
              </button>

              <button
                onClick={() => simulateDownload('package')}
                disabled={downloadingPackage}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1d4d5d] border border-[#2e6475] px-6 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-[#235868] disabled:opacity-50 transition-all cursor-pointer"
              >
                {downloadingPackage ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Assembling Package...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Download Submittal Package (PDF)
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Global Toast Success Notification */}
        {showToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#122f39] text-white border border-emerald-500 py-3.5 px-6 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in">
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
            <span className="text-sm font-medium">{showToast}</span>
          </div>
        )}

      </div>
    </div>
  );
}
