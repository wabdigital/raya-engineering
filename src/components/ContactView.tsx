import { useState, FormEvent, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Globe, MapPin, Send, HelpCircle, Loader2, Sparkles, Building, Briefcase, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface ContactViewProps {
  onPageChange: (page: PageType) => void;
}

export default function ContactView({ onPageChange }: ContactViewProps) {
  const formRef = useRef<HTMLFormElement>(null);
  
  // State for form
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    userRole: 'Contractor',
    projectType: 'Residential',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // When distributor CTA is clicked, we auto-set the dropdown role to "Distributor" and scroll to form
  const triggerDistributorPreset = () => {
    setFormData(prev => ({
      ...prev,
      userRole: 'Distributor',
      message: 'Hello, I interested in exploring a distribution partnership with Raya Engineering for CLC Blocks / Facades in our zone. Please send package terms.'
    }));
    
    // Smooth scroll to form container
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please fill in required fields (Full Name and Email).');
      return;
    }

    setSubmitting(true);
    // Simulate routing to Info@raya.ng
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  return (
    <div className="bg-[#fcfbfa] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3.5xl border-b border-gray-150 pb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">ESTABLISH CONTACT</span>
          <h1 className="mt-3 font-sans text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-[#122f39]" id="contact-title">
            Contact Raya Engineering
          </h1>
          <p className="mt-5 text-lg text-gray-650 leading-relaxed max-w-3xl">
            Get in touch with our technical sales team today. Whether you want to place a volume order, ask an physical structural question, request a submittal package, or establish a regional distribution relationship — we will analyze and respond quickly.
          </p>
        </div>

        {/* Content Split: Details Cards vs Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details column */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <h3 className="text-lg font-bold text-[#122f39] uppercase tracking-wider">Communication Channels</h3>
            
            {/* Phone WhatsApp card */}
            <div className="p-6 bg-white border border-gray-150 rounded-xl shadow-xs flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100">
                <Phone className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Phone & WhatsApp</span>
                <a href="tel:+2347037686707" className="block text-base font-bold text-[#122f39] hover:text-[#1d4d5d] mt-1">
                  +234 703 768 6707
                </a>
                <span className="block text-xs text-gray-500 mt-1">Available Mon–Sat: 8 AM – 6 PM WAT</span>
              </div>
            </div>

            {/* Email card */}
            <div className="p-6 bg-white border border-gray-150 rounded-xl shadow-xs flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                <Mail className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Email Channels</span>
                <a href="mailto:Info@raya.ng" className="block text-base font-bold text-[#122f39] hover:text-[#1d4d5d] mt-1">
                  Info@raya.ng
                </a>
                <span className="block text-xs text-gray-500 mt-1">Standard response inside 1 business day</span>
              </div>
            </div>

            {/* Site card */}
            <div className="p-6 bg-white border border-gray-150 rounded-xl shadow-xs flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600 border border-purple-100">
                <Globe className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Web Domain</span>
                <a href="https://www.raya.ng" target="_blank" rel="noopener noreferrer" className="block text-base font-bold text-[#122f39] hover:text-[#1d4d5d] mt-1">
                  www.raya.ng
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="p-6 bg-white border border-gray-150 rounded-xl shadow-xs flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-100">
                <MapPin className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">Manufacturing Zone HQ</span>
                <span className="block text-sm font-bold text-gray-905 mt-1">Lagos State, Nigeria</span>
                <span className="block text-xs text-gray-500 mt-1">Supplying and dispatching across Lagos, Abuja, Port Harcourt, and West Africa.</span>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-8 bg-white border border-gray-150 rounded-2xl p-8 sm:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-[#122f39] mb-6 tracking-tight">Direct Site Enquiry Form</h3>
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="c-name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="c-name"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="c-company">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="c-company"
                        placeholder="E.g. Raya Builders LTD"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="c-email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="c-phone">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="c-phone"
                        placeholder="E.g. +234 703 768 6707"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="c-role">
                        I am A...
                      </label>
                      <select
                        id="c-role"
                        value={formData.userRole}
                        onChange={(e) => setFormData({ ...formData, userRole: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      >
                        <option value="Contractor">Main General Contractor</option>
                        <option value="Consultant">Architect / Engineering Consultant</option>
                        <option value="Developer">Property Developer</option>
                        <option value="Distributor">Wholesale Distributor</option>
                        <option value="Project Owner">Private Project Owner</option>
                        <option value="Other">Other Category</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="c-ptype">
                        Project Sector
                      </label>
                      <select
                        id="c-ptype"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                      >
                        <option value="Residential">Residential Development</option>
                        <option value="Commercial">Commercial (Office/Hotel/Retail)</option>
                        <option value="Industrial">Industrial Warehousing</option>
                        <option value="High-Rise">High-Rise Over 5 Floors</option>
                        <option value="Other">Other Specific Build</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5" htmlFor="c-msg">
                      Enquiry Message
                    </label>
                    <textarea
                      id="c-msg"
                      rows={4}
                      placeholder="Detail your requirements: volume sizing, site constraints, delivery timing, etc."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-gray-250 px-3 py-2 text-sm focus:border-[#122f39] focus:outline-none bg-[#fcfbfa]"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#122f39] text-white py-3.5 text-sm font-bold shadow hover:bg-[#1d4d5d] disabled:opacity-50 transition-colors"
                      id="contact-submit-btn"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4.5 w-4.5 animate-spin" />
                          Transmitting enquiry to Info@raya.ng...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 text-white" />
                          Send Enquiry (Info@raya.ng)
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                    <Sparkles className="h-7 w-7 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-950">Message Safely Dispatched!</h4>
                    <p className="text-xs text-gray-500 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-gray-805">{formData.fullName}</span>. Your structural enquiry has been successfully transmitted to <span className="font-semibold italic text-[#122f39]">Info@raya.ng</span>. Our engineering representatives will analyze your details and get back to you within 1 business day.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', companyName: '', email: '', phone: '', userRole: 'Contractor', projectType: 'Residential', message: '' });
                    }}
                    className="inline-flex rounded-lg border border-gray-200 px-5 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 bg-[#fcfbfa]"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SECTION: SEPARATE CTA FOR DISTRIBUTORS */}
        <div className="mt-24 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#122f39] to-[#1d4d5d] text-white border border-[#235868] shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-[#1d4d5d]/40 to-transparent" />
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">B2B WHOLESALE PARTNERSHIP</span>
            <h3 className="text-xl sm:text-2xl font-bold mt-2">Interested in Distributing Raya Engineering Products?</h3>
            <p className="mt-3 text-sm text-[#b4d2db] leading-relaxed">
              We are open to distribution partnerships across Nigeria and West Africa. If you are an established materials supplier, regional distributor, or builder merchant looking to add CLC blocks or GRP/GRC facade elements to your range, let's explore terms.
            </p>
          </div>
          <button
            onClick={triggerDistributorPreset}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#122f39] shadow transition-all hover:bg-gray-100"
          >
            Enquire About Distribution
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* SECTION: WHAT HAPPENS NEXT */}
        <div className="mt-24 pt-16 border-t border-gray-150">
          <h3 className="text-xl font-bold text-[#122f39] text-center mb-12 tracking-tight">Our Rapid Response Journey</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-150 text-center space-y-4">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold">1</div>
              <h4 className="font-bold text-gray-950">1. Send Your Enquiry</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Complete our digital form. Provide specific volumes, structural designs, or desired submittals to fast-track technical sorting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-150 text-center space-y-4">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold">2</div>
              <h4 className="font-bold text-gray-950">2. Technical Review</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Raya materials specialists review your specifications, calculating exact weight deltas, delivery pallet tallies, and dispatch options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-150 text-center space-y-4">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 font-mono font-bold">3</div>
              <h4 className="font-bold text-gray-950">3. Resolution Completed</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Within 1 business day we submit your customized pricing schedule, sample blocks tracking list, or distribution criteria catalog.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
