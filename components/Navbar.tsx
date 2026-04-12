import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Subscription } from './Subscription';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 glass-card shadow-lg shadow-black/40' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/Hir-stack/logo-hirstack.png" alt="HirStack Logo" className="h-12 sm:h-14 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-sm lg:text-base">
            <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#courses" className="text-slate-300 hover:text-blue-400 transition-colors">Courses</a>
            <a href="#advisor" className="text-slate-300 hover:text-blue-400 transition-colors">Career Advice</a>
            <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full font-bold transition-all active:scale-95 shadow-lg shadow-blue-600/30"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg glass-card text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu — full-screen overlay feel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 flex flex-col gap-1 shadow-2xl">
            {['About', 'Courses', 'Career Advice'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/ /g, '')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 text-lg font-medium py-3 border-b border-white/5 hover:text-blue-400 transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="pt-4">
              <button
                onClick={() => { setMobileMenuOpen(false); setShowModal(true); }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 w-full py-4 rounded-2xl font-bold text-white text-lg shadow-lg shadow-blue-600/30"
              >
                Join Now — Free Preview
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Subscription Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto py-6 px-4">
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={() => setShowModal(false)} />

          <button
            onClick={() => setShowModal(false)}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[200] p-3 bg-white/10 hover:bg-red-500/40 text-white rounded-full transition-all hover:scale-110 shadow-xl border border-white/10"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          <div className="relative z-[150] w-full max-w-5xl mt-12 animate-in zoom-in-95 duration-300">
            <Subscription />
          </div>
        </div>
      )}
    </>
  );
};
