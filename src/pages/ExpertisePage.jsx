const features = [
  'Full Ecosystem Integration',
  'AI-Powered Automation',
  'Energy Optimization',
  '24/7 Remote Monitoring',
]

export default function ExpertisePage() {
  return (
    <main className="pt-20">
      <header className="relative pt-20 pb-stack-lg px-gutter min-h-[614px] flex flex-col items-center justify-center text-center hero-glow overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-stack-md animate-fadeInUp">
          <span className="font-label-sm text-primary uppercase tracking-widest block mb-4 animate-glow">
            Elevating Life through Tech
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface">Our Expertise</h1>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto opacity-90">
            Delivering seamless smart home experiences through precision engineering and intelligent design.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 blur-3xl scale-150 animate-pulse bg-plasma-blue/30 rounded-full"></div>
      </header>

      <section className="py-stack-lg px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center glass-card p-12 rounded-3xl relative overflow-hidden group">
          <div className="space-y-stack-md animate-fadeInUp">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Smart Home Solution</h2>
            <p className="font-body-md text-on-surface-variant">
              Experience the ultimate luxury of a fully automated home. Managed by cutting-edge AI.
            </p>
            <ul className="space-y-4">
              {features.map((text, idx) => (
                <li
                  key={text}
                  className="flex items-center gap-4 transition-transform hover:translate-x-2"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <span
                    className="material-symbols-outlined text-primary animate-glow"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-body-md">{text}</span>
                </li>
              ))}
            </ul>
            <button className="bg-plasma-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95">
              <span>Explore Flagship Features</span>
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkO3r_fCpTrt70q8M-i4F3XO4fGVvscUw-SA0DDv9vhxT0nOhEZGqGYM0PROW0xwciq3eKTKmwvCldvUG1ZRM1AFTFCXrxl7WK3rPrtj_o6bcVxM-yYLEY9LSpVCxXUqFRGDJ4ohsl0Dw3w2-QgtNhVAvAHFdR6XwQwzOUQ8gHy_PvzXdh6EMnjajV8fmZsRTntjj3tPTP8gpBDqcI0yztxMMsSUUbbhWPiQ9ImYCtVQ2LfrRi5J2ldTOTQZpkng4u_TSYec_qnvmk"
              alt="Smart home solutions"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
