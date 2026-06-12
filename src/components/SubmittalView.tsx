import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, CheckSquare, Users, Phone, Mail, FileCheck, ArrowDownToLine, Loader2, Send } from 'lucide-react';
import { PageType } from '../types';

interface SubmittalViewProps {
  onPageChange: (page: PageType) => void;
}

export default function SubmittalView({ onPageChange }: SubmittalViewProps) {
  // Form submission state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectName: '',
    projectType: 'Residential',
  });

  const [neededItems, setNeededItems] = useState({
    tds: true,
    catalog: false,
    method: false,
    testCerts: false,
    sampleBlocks: false,
    shopDrawings: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleCheckboxChange = (key: keyof typeof neededItems) => {
    setNeededItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.companyName) {
      alert('Please fill in the required fields (Full Name, Company Name, and Email).');
      return;
    }

    setSubmitting(true);
    // Simulate API request to Info@raya.ng
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div className="bg-[#fcfbfa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3.5xl border-b border-gray-150 pb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">B2B SPECIFIER HUB</span>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-[#122f39]" id="submittal-title">
            Consultant Submittal Package
          </h1>
          <p className="mt-5 text-lg text-gray-650 leading-relaxed max-w-3xl">
            If you are specifying CLC iBlox blocks or Raya GRP/GRC facade architectural elements on an active construction blueprint, we streamline your administrative approval cycles. We provide structural consultants with a comprehensive, certified Material Submittal Package with everything your engineering review board requires.
          </p>
        </div>

        {/* 2x2 Grid: What's included & Who is it for */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Whats included */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-[#122f39] flex items-center gap-2.5">
              <FileCheck className="h-5.5 w-5.5 text-[#1d4d5d]" />
              What is Contained Inside
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Our pre-assembled submittal folder contains rigorous documents to expedite municipal and engineering approvals:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Technical Data Sheet', desc: 'Sizing grids, compressive strengths, absorption ratios, and dry densities.' },
                { title: 'Product Catalogue', desc: 'Visual models of iBlox and GRP/GRC ornament profiles.' },
                { title: 'Method Statement', desc: 'Official step-by-step guideline on stacking, adhesive, and chasing.' },
                { title: 'Test Certificates', desc: 'Laboratory compression and fire testing validation forms.' },
                { title: 'Sample Blocks', desc: 'Available for delivery directly to consultant offices upon request.' },
                { title: 'Shop Drawings', desc: 'Detailed anchoring layouts for decorative GRP/GRC panels.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white border border-gray-150 rounded-lg shadow-xs">
                  <span className="block text-sm font-bold text-gray-950">{item.title}</span>
                  <span className="block text-xs text-gray-500 mt-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who is this for */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-[#122f39] flex items-center gap-2.5">
              <Users className="h-5.5 w-5.5 text-[#1d4d5d]" />
              Who Specifiedraya Materials?
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Designed to support modern standard construction professionals organizing material evaluations and procurement approvals:
            </p>
            <div className="space-y-3.5">
              {[
                { title: 'Structural & Civil Engineers', desc: 'Requiring exact block densities, MPa loads, and shrinkage values for structural framing calculations.' },
                { title: 'Quantity Surveyors (QS)', desc: 'Validating per-sqm price benchmarks, returnable pallet policies, and estimating structural adhesive ratios.' },
                { title: 'Project Managers & Main Contractors', desc: 'In charge of coordinating construction workflow charts, masonry speed, and submitting official materials approval files.' },
                { title: 'Architects & Design Specifiers', desc: 'Requiring clean CAD block drawings, customized GRP molding limits, and thermal-efficiency green credentials.' }
              ].map((who, idx) => (
                <div key={idx} className="flex gap-3.5 items-start p-4 rounded-xl bg-white border border-gray-100">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#faf7f3] border border-gray-250 shrink-0 font-mono text-xs font-bold text-[#122f39]">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-gray-950">{who.title}</span>
                    <span className="block text-xs text-gray-500 mt-1 leading-relaxed">{who.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION: THE REQUEST FORM */}
        <div className="mt-24 bg-white border border-gray-150 rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto">
          
          {/* Info Side Panel */}
          <div className="lg:col-span-4 bg-[#122f39] p-8 sm:p-10 text-white relative">
            <div className="absolute inset-0 bg-[#1d4d5d] opacity-15 mix-blend-screen" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#96cbd7] font-mono block mb-2">PROCUREMENT HUB</span>
                <h3 className="text-xl font-bold text-white tracking-tight">Request Submittal</h3>
                <p className="mt-4 text-xs text-[#b4d2db] leading-relaxed">
                  Fill in the details. Once submitted, our division heads will dispatch your comprehensive architectural submittal packet by email within 2 business days.
                </p>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-4 text-xs">
                <span className="block font-bold text-[#96cbd7] uppercase tracking-wider font-mono">Or Contact Direct:</span>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <a href="tel:+2347037686707" className="hover:text-white mt-0.5 font-sans font-bold">+234 703 768 6707</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                  <a href="mailto:Info@raya.ng" className="hover:text-white mt-0.5 font-sans font-bold">Info@raya.ng</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-8 p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="submittal-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="sub-name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="sub-name"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="sub-company">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="sub-company"
                        required
                        placeholder="E.g. Raya Builders LTD"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="sub-email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="sub-email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="sub-phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="sub-phone"
                        placeholder="E.g. +234 703 768 6707"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="sub-pname">
                        Project Name
                      </label>
                      <input
                        type="text"
                        id="sub-pname"
                        placeholder="Project Name or Location"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="sub-ptype">
                        Project Sector
                      </label>
                      <select
                        id="sub-ptype"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      >
                        <option value="Residential">Residential Building</option>
                        <option value="Commercial">Commercial/Hotel</option>
                        <option value="Industrial">Industrial Warehousing</option>
                        <option value="High-Rise">High-Rise Skyscraper</option>
                        <option value="Other">Other Specialty Construction</option>
                      </select>
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">Which Submittal Sheets Do You Need?</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {[
                        { key: 'tds' as const, label: 'Technical Data Sheets (TDS)' },
                        { key: 'catalog' as const, label: 'Product Catalog / Material Sizes' },
                        { key: 'method' as const, label: 'Construction Method Statement' },
                        { key: 'testCerts' as const, label: 'Laboratory Test Certificates' },
                        { key: 'sampleBlocks' as const, label: 'Sample Blocks (Delivered to Office)' },
                        { key: 'shopDrawings' as const, label: 'Bespoke Facade Shop Drawings' }
                      ].map((chk) => (
                        <label key={chk.key} className="flex items-center gap-3 select-none text-xs text-gray-650 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={neededItems[chk.key]}
                            onChange={() => handleCheckboxChange(chk.key)}
                            className="h-4 w-4 rounded border-gray-300 text-[#122f39] focus:ring-[#122f39]"
                          />
                          <span>{chk.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#122f39] text-white py-3.5 text-sm font-bold shadow hover:bg-[#1d4d5d] disabled:opacity-50 transition-colors"
                      id="submittal-submit-btn"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4.5 w-4.5 animate-spin" />
                          Transmitting data request...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-white" />
                          Send Request (Info@raya.ng)
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="submittal-success"
                  className="text-center py-12 space-y-6 animate-fade-in"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <FileCheck className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-950">Submittal Request Transmitted!</h4>
                    <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-gray-805">{formData.fullName}</span>. Your specification request was submitted to <span className="font-semibold italic text-[#122f39]">Info@raya.ng</span>. Our engineering sales team will dispatch the requested material files within 2 business days.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', companyName: '', email: '', phone: '', projectName: '', projectType: 'Residential'});
                    }}
                    className="inline-flex rounded-lg border border-gray-200 px-5 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 bg-[#fcfbfa]"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Direct Submittal download band */}
        <div className="mt-24 border-t border-gray-150 pt-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-lg font-bold text-[#122f39] tracking-tight">Need immediate physical estimation logs?</h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              If your review board is sitting today, click below to pull our instant core PDF package which contains dry weight density listings, MPa stress test curves, and basic drawings.
            </p>
          </div>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white border border-gray-200 px-6 py-3.5 text-xs font-bold text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-50 transition-all cursor-pointer"
          >
            {downloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#122f39]" />
                Assembling ZIP...
              </>
            ) : (
              <>
                <ArrowDownToLine className="h-4 w-4 text-[#122f39]" />
                Download Submittal Package (.PDF)
              </>
            )}
          </button>
        </div>

        {/* Local confirmation notification */}
        <AnimatePresence>
          {downloadSuccess && (
            <motion.div 
              className="fixed bottom-6 right-6 z-50 bg-[#122f39] text-white border border-emerald-500 py-3.5 px-6 rounded-xl shadow-2xl flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <CheckSquare className="h-5 w-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-medium">B2B Core submittal bundle downloaded successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
