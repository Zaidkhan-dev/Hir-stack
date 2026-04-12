import React, { useEffect, useRef, useState } from 'react';

export const About: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 lg:py-28 bg-slate-900/50">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Image */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src="/Hir-stack/phillo.jpeg"
              alt="Learning Environment"
              className="rounded-2xl sm:rounded-3xl shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-5 -right-3 sm:-bottom-8 sm:-right-8 p-4 sm:p-8 glass-card rounded-xl sm:rounded-2xl hidden sm:block">
              <p className="text-blue-400 font-bold text-xl sm:text-2xl mb-1">Expert Led</p>
              <p className="text-slate-400 text-sm sm:text-base">Industry specialist trainers</p>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">Our Philosophy</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 leading-snug">Empowering Minds Through Technical Excellence</h3>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg mb-5 leading-relaxed">
              We are a premier IT training institute committed to delivering industry-aligned, high-impact technical education. Our programs bridge the gap between academic learning and real-world implementation.
            </p>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg mb-7 leading-relaxed">
              Through live industry projects, structured placement assistance, and an immersive learning ecosystem, our learners gain practical experience that mirrors professional IT workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  color: 'blue',
                  icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                  title: 'Practical Focus',
                  desc: 'Designed to assist you master programming skills effectively.',
                  delay: '0s',
                },
                {
                  color: 'indigo',
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                  title: 'Flexible Learning',
                  desc: 'Choose between offline flexibility or online convenience.',
                  delay: '0.3s',
                },
              ].map(({ color, icon, title, desc, delay }) => (
                <div key={title} className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-800/50 border border-white/5">
                  <div
                    className={`w-11 h-11 bg-${color}-500/10 text-${color}-500 rounded-lg flex items-center justify-center mb-3 transition-all duration-700 ${inView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                    style={{ transitionDelay: delay }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-base sm:text-xl mb-1 sm:mb-2">{title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
