/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import IbloxView from './components/IbloxView';
import FacadeView from './components/FacadeView';
import WhyClcView from './components/WhyClcView';
import TechnicalView from './components/TechnicalView';
import ApplicationsView from './components/ApplicationsView';
import SubmittalView from './components/SubmittalView';
import ContactView from './components/ContactView';
import { PageType } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Page switching helper
  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutView onPageChange={setCurrentPage} />;
      case 'products-iblox':
        return <IbloxView onPageChange={setCurrentPage} />;
      case 'products-facade':
        return <FacadeView onPageChange={setCurrentPage} />;
      case 'why-clc':
        return <WhyClcView onPageChange={setCurrentPage} />;
      case 'technical':
        return <TechnicalView onPageChange={setCurrentPage} />;
      case 'applications':
        return <ApplicationsView onPageChange={setCurrentPage} />;
      case 'submittal':
        return <SubmittalView onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactView onPageChange={setCurrentPage} />;
      default:
        return <HomeView onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col font-sans text-gray-800 bg-[#fcfbfa]" id="app-root-container">
      {/* Dynamic Header */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main viewport transition */}
      <main className="flex-grow relative" id="layout-view-canvas">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="w-full h-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}
