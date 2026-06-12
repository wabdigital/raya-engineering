import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Flame, Scale, ChevronRight, CheckCircle2, Hammer, Zap, Landmark, Sparkles, Sliders } from 'lucide-react';
import { PageType } from '../types';

interface HomeViewProps {
  onPageChange: (page: PageType) => void;
}

export default function HomeView({ onPageChange }: HomeViewProps) {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="bg-[#fcfbfa]">
      {/* SECTION 2 — HERO */}
      <section className="relative overflow-hidden bg-[#0d1f26] py-32 text-white">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600"
            alt="Raya Engineering Construction Site"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#122f39]/95 via-[#122f39]/80 to-[#1d4d5d]/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-3xl text-left"
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-400 border border-emerald-500/20"
            >
              <Sparkles className="h-3.5 w-3.5" />
              NIGERIA'S LIGHTWEIGHT MATERIALS LEADER
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="mt-6 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white leading-tight"
            >
              Build Lighter.<br />
              <span className="text-[#96cbd7]">Build Faster.</span><br />
              Build Better.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Raya Engineering manufactures CLC lightweight concrete blocks and decorative facade elements for residential, commercial, and industrial construction across Nigeria. Tested to international standards. Trusted by contractors, consultants, and developers.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => onPageChange('products-iblox')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-[#122f39] shadow-md transition-all duration-200 hover:bg-gray-150 active:scale-95"
              >
                View Our Products
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onPageChange('contact')}
                className="inline-flex items-center justify-center rounded-xl bg-[#1d4d5d] px-6 py-3.5 text-base font-bold text-white shadow-md border border-[#235868] transition-all duration-200 hover:bg-[#2a667b] active:scale-95"
              >
                Get a Quote
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — TRUST BAR */}
      <section className="bg-white border-b border-gray-100 shadow-sm relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 divide-y divide-gray-150 md:grid-cols-3 md:divide-y-0 md:divide-x divide-gray-100">
            {/* Cert 1 */}
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 first:pl-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4f7f6] text-[#122f39]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-gray-900 uppercase tracking-wide">
                  ISO 9001 Certified
                </h4>
                <p className="text-xs text-gray-500 mt-1">Quality you can rely on across Africa</p>
              </div>
            </div>

            {/* Cert 2 */}
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4f7f6] text-[#122f39]">
                <Scale className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Up to 40% Lighter
                </h4>
                <p className="text-xs text-gray-500 mt-1">Than standard hollow concrete blocks</p>
              </div>
            </div>

            {/* Cert 3 */}
            <div className="flex items-center gap-4 py-4 md:py-0 md:px-6 last:pr-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4f7f6] text-[#122f39]">
                <Flame className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-gray-900 uppercase tracking-wide">
                  4-Hour Fire Rating
                </h4>
                <p className="text-xs text-gray-500 mt-1">Non-combustible premium cell material</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PRODUCT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" id="home-product-overview">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">Our Products</span>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-[#122f39]">
            Built for Modern Construction
          </h2>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Raya Engineering produces premium product lines — cellular lightweight concrete blocks and architectural decor facade elements. Both are engineered for high-performance settings, built to international standards, and dispatched to major projects across Nigeria.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blocks Product Card */}
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-150 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-64 relative bg-[#0d1f26]">
              <img
                src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200"
                alt="CLC iBlox Blocks"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex rounded bg-[#1d4d5d]/90 px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                  Core Structural
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">CLC iBlox — Lightweight Blocks</h3>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  800 kg/m³ and 1,000 kg/m³ | 100mm – 225mm width
                </p>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Cellular Lightweight Concrete blocks for general walling, light structural load-bearing applications, and high-rise construction. Lighter, faster to install, and significantly cleaner to work with than standard concrete or clay alternatives.
                </p>
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Highly insulating thermal & acoustic cells</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Reduces building dead weight up to 40%</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onPageChange('products-iblox')}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#122f39] hover:text-[#1d4d5d] transition-colors"
                >
                  Explore iBlox Specs
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Facade Product Card */}
          <div className="flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-150 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="h-64 relative bg-[#0d1f26]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="GRP & GRC Facade Elements"
                className="h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex rounded bg-[#1f4a57]/95 px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                  Architectural Cladding
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">GRP & GRC Facade Elements</h3>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  Glass Reinforced Plastic | Glass Reinforced Concrete
                </p>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Decorative facade elements for modern architectural finishes. Lightweight, highly weather-durable, and pressure-molded to bring clean, sleek design intent to life on residential and commercial building exteriors.
                </p>
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Molded into complex customized architectural structures</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Weather, UV, and salt-mist corrosion resistant</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onPageChange('products-facade')}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#122f39] hover:text-[#1d4d5d] transition-colors"
                >
                  Explore Facade Solutions
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onPageChange('products-iblox')}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#122f39] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#1d4d5d]"
          >
            See All Products
            <ArrowRight className="h-4 w-4 text-white" />
          </button>
        </div>
      </section>

      {/* SECTION 5 — KEY BENEFITS */}
      <section className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            <div className="max-w-md lg:sticky lg:top-28">
              <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">Key Advantages</span>
              <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-[#122f39]">
                Why Choose Raya Engineering?
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed">
                Our products perform better, install faster, and cost significantly less to build with than conventional hollow concrete alternatives. We optimize your project from foundation to facade.
              </p>
              <button
                onClick={() => onPageChange('why-clc')}
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#122f39] hover:text-[#1d4d5d] transition-colors"
              >
                See the Full Comparison
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-xl border border-gray-150 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 mb-5">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Reduce Structural Costs</h3>
                <p className="mt-2.5 text-sm text-gray-500 leading-relaxed">
                  CLC blocks reduce building dead load by up to 40%, which translates directly to lighter foundations, leaner frame requirements, and real savings on your project steel budget.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-xl border border-gray-150 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Cut Installation Time</h3>
                <p className="mt-2.5 text-sm text-gray-500 leading-relaxed">
                  The larger block format means fewer units per square meter. Your bricklaying teams lay faster and complete partition layouts sooner with reduced alignment adjustments.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-xl border border-gray-150 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 mb-5">
                  <Flame className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Better Building Performance</h3>
                <p className="mt-2.5 text-sm text-gray-500 leading-relaxed">
                  Superior thermal and acoustic insulation values. Fire resistance tested up to 4 hours. Keeps modern buildings cooler in Nigerian heat, quieter, and structurally safer.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white p-6 rounded-xl border border-gray-150 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3f5] text-[#122f39] mb-5">
                  <Hammer className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Easy to Work With on Site</h3>
                <p className="mt-2.5 text-sm text-gray-500 leading-relaxed">
                  CLC iBlox is cleanly cut, planed, and drilled, and MEP services chasing is completed with minimal crumbling. Reduces material breakage waste and cleans up site finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — APPLICATIONS STRIP */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">Versatile Solutions</span>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-[#122f39]">
            Built for Every Type of Project
          </h2>
          <p className="mt-4 text-base text-gray-600">
            From low-rise housing to high-rise skyscrapers — CLC iBlox and our facade elements are used across residential, commercial, and industrial construction in West Africa.
          </p>
        </div>

        {/* 6 Grid applications */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Residential Buildings", desc: "Housing developments, beachfront estates, and private luxury villas requiring thermal relief and sound dampening." },
            { title: "Commercial Developments", desc: "Retail shopping avenues, corporate offices, and hotels looking for rapid division and reduced weight slabs." },
            { title: "Industrial Facilities", desc: "Heavy warehouses, manufacturing zones, and partition systems needing quick wall layouts and fire isolation safety." },
            { title: "High-Rise Construction", desc: "Essential structural weight relief. Drops dead weight per floor by up to 40% compared to traditional solid masonry units." },
            { title: "Load-Bearing Wall Systems", desc: "High density (CLC-1000 and CLC-1200) blocks optimized for sturdy, load-bearing general masonry." },
            { title: "Non-Load-Bearing Partitions", desc: "High-yield partition blocks (CLC-800 & CLC-600) designed for fast layouts, pristine stucco, and MEP integrations." },
          ].map((app, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <span className="absolute bottom-0 right-0 h-1.5 w-0 bg-[#1d4d5d] transition-all duration-300 group-hover:w-full" />
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#122f39] transition-colors">{app.title}</h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — COMPLETED PROJECTS */}
      <section className="bg-gray-50 border-t border-b border-gray-150/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#1d4d5d]">Proven Performance</span>
              <h2 className="mt-2 font-sans text-3xl font-extrabold text-[#122f39]">
                Projects We Have Supplied
              </h2>
              <p className="mt-3 text-sm text-gray-500">
                We supply our certified lightweight blocks and facade products to major projects across Nigeria.
              </p>
            </div>
            <button
              onClick={() => onPageChange('applications')}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-gray-200 px-5 py-2.5 text-sm font-bold text-gray-700 shadow-xs hover:bg-gray-50 transition-colors"
            >
              See All Applications
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                  alt="Lagos Luxury Heights" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-mono uppercase tracking-widest">Lagos, Nigeria</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3">Lagos Luxury Heights</h3>
                  <p className="text-xs text-gray-400 mt-1 font-mono">PRODUCT: CLC iBlox-800 & iBlox-1000</p>
                  <p className="text-xs text-gray-650 mt-3 leading-relaxed">
                    Provided over 45,000 interlocking blocks to reduce dead load with precise structural specifications.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-gray-50 text-xs font-semibold text-gray-400">
                Status: Completed Delivery (2025)
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                  alt="Beachside Terraces" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-mono uppercase tracking-widest">Lekki, Lagos</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3">Lekki Beachside Terraces</h3>
                  <p className="text-xs text-gray-400 mt-1 font-mono">PRODUCT: GRP/GRC Decorative Facades</p>
                  <p className="text-xs text-gray-650 mt-3 leading-relaxed">
                    Custom architectural GRP moldings and weather-proof external cornices delivered to beachfront locations.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-gray-50 text-xs font-semibold text-gray-400">
                Status: Completed Delivery (2025)
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-gray-150 shadow-sm flex flex-col justify-between">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                  alt="Epe Industrial Warehouse" 
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-mono uppercase tracking-widest">Epe Hub, Lagos</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3">Epe Logistics Warehouse</h3>
                  <p className="text-xs text-gray-400 mt-1 font-mono">PRODUCT: CLC iBlox-800 (150mm & 200mm)</p>
                  <p className="text-xs text-gray-650 mt-3 leading-relaxed">
                    Massive internal fire separation partitions designed to enforce industrial standard 4-hour fire ratings.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-gray-50 text-xs font-semibold text-gray-400">
                Status: Completed Delivery (2026)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — STANDARDS STRIP */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
            Built to Internationally Recognized Quality Standards
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-12 text-left">
            <div className="border border-gray-150 py-3.5 px-6 rounded-lg bg-[#fcfbfa] flex items-center gap-3">
              <Landmark className="h-6 w-6 text-[#122f39]" />
              <div>
                <span className="block text-sm font-extrabold text-gray-900">ASTM C495</span>
                <span className="block text-[11px] text-gray-500">Compressive Strength Standards</span>
              </div>
            </div>
            
            <div className="border border-gray-150 py-3.5 px-6 rounded-lg bg-[#fcfbfa] flex items-center gap-3">
              <Sliders className="h-6 w-6 text-[#122f39]" />
              <div>
                <span className="block text-sm font-extrabold text-gray-900">BS EN 771</span>
                <span className="block text-[11px] text-gray-500">Masonry Unit Specification</span>
              </div>
            </div>

            <div className="border border-gray-150 py-3.5 px-6 rounded-lg bg-[#fcfbfa] flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#122f39]" />
              <div>
                <span className="block text-sm font-extrabold text-gray-900">ISO 9001</span>
                <span className="block text-[11px] text-gray-500">Quality Management Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — MID-PAGE CTA BAND */}
      <section className="bg-[#122f39] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1d4d5d] opacity-10 mix-blend-overlay" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Need a Submittal Package or Technical Data Sheet?
            </h3>
            <p className="mt-2 text-sm text-[#b4d2db] leading-relaxed">
              We provide structural engineers, specifiers, and quantity surveyors with complete submittal packages including technical data sheets, method statements, test certs, and shop drawings.
            </p>
          </div>
          <button
            onClick={() => onPageChange('submittal')}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#122f39] shadow-md transition-colors hover:bg-gray-100 shrink-0"
          >
            Request a Submittal Package
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
