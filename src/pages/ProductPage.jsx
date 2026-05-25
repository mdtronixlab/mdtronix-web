import { useState, useEffect, useRef } from 'react'

const carouselImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAuaPABTShFOeZMsTrYjOmttlvVOzQXvn6kkfxW7O4JmbWHeNc8j7TfDOboC4nTgUDeuEyh35Tv2E5A7BEg6RTaFeLplSd5uIKMtl74suyMVPujZQq44uX5oeJoQNdAWVFOtFoXlDstspRbju-o0Dki6u_FLMSHVM8jmHUbq5F39LU_4BnVtPvUC0ES4FYcF6VM7HnIV41nFWf2ZCps89tpUEp0ig5e8aouOLPu4V7ahEos-QNBmVq-Uxa4nml0vD0ZBg9VrAekZ0tp',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBrdU6Ua7NERry7jEZvdR1zKFp4mNgCJrxSWc15mQq4ndYI-GT1kid5InyFWHaEje0vxRZYYU5HRn6O1WyWvBNYLwoKOVpaSFUv5YiJpt_SUna4luoe1eNjCPFN3OcW8hvci146gS0N_jck2V6x3A8HdLL_6mgeF-lW_ss_6BJEopHEu0AHt9LJOml_eGPaDN_iGkH23zj9grHWScA5YhUUvC_RyAXvxXwFTUXM1mPk5yWv0Xxzgs6kAgDg8QJhkFuTuRbgwZzfHIqC',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC3KvPoseEvwec8YZKT7biioMvpggK33D7rlRqOuH9j0cvYOADuSJ6nXu17i0z156gc0zMtmtqovs_xkX1sjZE0CCHjeyN4rkMc6Qfe3ifaGkOArtOb4Gw2Dphg-E_S8jnK5Yb7e_oyCXLigR3TfZDfoRmkqMNNd9aMZqLHr_A1SybBGHSW8mYfDdTO90VTh-FoUQjyXHe7F5QRK_npOhdN7lVIwog0J_wMT0pqk7dOw_3qlVVFB3ToXVwyZOsBeLWUEbVgLubHU8Cb',
]

const nexusAccordion = [
  {
    id: 'specs',
    title: 'Technical Specs',
    content: 'Dimensions: 120mm × 120mm × 45mm. Connectivity: WiFi 6E, Zigbee 3.0, Matter, Thread. Processor: MDtronix Octa-Core NPU (6 TOPS).',
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    content: 'Your home data never leaves your home. The Nexus Hub operates on a Zero-Cloud architecture by default with 256-bit Edge Encryption.',
  },
  {
    id: 'comp',
    title: 'Compatibility',
    content: 'Works with Apple HomeKit, Google Home, Amazon Alexa, Samsung SmartThings, and Home Assistant.',
  },
]

const waterTankFeatures = [
  { icon: 'water', label: 'Precision Level Display', desc: 'Real-time reading from 0% to 100% with high-accuracy sensing' },
  { icon: 'smartphone', label: 'Mobile App Control', desc: 'Monitor and control your pump from anywhere via the MDtronix app' },
  { icon: 'display_settings', label: 'OLED Display', desc: 'On-board OLED screen shows live water level at a glance' },
  { icon: 'gpp_bad', label: 'Dry-Run Protection', desc: 'Cuts pump power automatically when tank runs dry, protecting the motor' },
  { icon: 'tune', label: 'Auto / Manual Mode', desc: 'Fully automatic filling cycle or manual override whenever you need it' },
  { icon: 'electrical_services', label: 'Starter & Capacitor Support', desc: 'Compatible with both capacitor-run and starter-type pump motors' },
  { icon: 'home_iot_device', label: 'MDtronix Smart Home Ready', desc: 'Native integration with the MDtronix smart home ecosystem' },
]

function WaterLevelVisual() {
  const [level, setLevel] = useState(100)
  const [pumpOn, setPumpOn] = useState(false)
  const pumpRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      setLevel(prev => {
        const pump = pumpRef.current
        // drain at 0.35%/tick, fill at 0.7%/tick
        let next = pump ? prev + 0.7 : prev - 0.35
        next = Math.max(0, Math.min(100, next))

        if (!pump && next <= 30) {
          pumpRef.current = true
          setPumpOn(true)
        } else if (pump && next >= 100) {
          pumpRef.current = false
          setPumpOn(false)
          next = 100
        }
        return parseFloat(next.toFixed(1))
      })
    }, 100)
    return () => clearInterval(id)
  }, [])

  const lvl = Math.round(level)
  const isLow = !pumpOn && lvl <= 45

  return (
    <div className="flex flex-col items-center gap-5 select-none">
      <style>{`@keyframes waveScroll{0%{transform:translateX(-50%)}100%{transform:translateX(0%)}}`}</style>

      <div className="flex items-stretch gap-3">
        {/* Level markers */}
        <div className="flex flex-col justify-between text-[10px] text-on-surface-variant/50 font-mono text-right w-8 py-0.5">
          {['100', '75', '50', '25', '0'].map(n => <span key={n}>{n}%</span>)}
        </div>

        {/* Tank */}
        <div className="relative w-36 h-64 border-2 border-primary/30 rounded-b-2xl rounded-t overflow-hidden bg-surface-container/30">
          {/* Tick lines */}
          {[25, 50, 75].map(p => (
            <div key={p} className="absolute left-0 right-0 border-t border-white/[0.07]" style={{ bottom: `${p}%` }} />
          ))}

          {/* Water body — height driven by level */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: `${level}%`, transition: 'height 0.1s linear' }}
          >
            {/* Fill colour: blue normal, amber when low */}
            <div className={`absolute inset-0 transition-colors duration-700 ${
              isLow
                ? 'bg-gradient-to-t from-amber-600/70 to-amber-400/35'
                : 'bg-gradient-to-t from-blue-700/75 to-cyan-400/45'
            }`} />
            {/* Animated wave surface */}
            <div className="absolute top-0 left-0 right-0 h-5 overflow-hidden">
              <div
                className={`absolute h-10 w-[200%] opacity-50 transition-colors duration-700 ${isLow ? 'bg-amber-400/60' : 'bg-cyan-300/60'}`}
                style={{ borderRadius: '50%', top: '-55%', animation: 'waveScroll 2.8s linear infinite' }}
              />
            </div>
          </div>

          {/* Percent label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className={`text-4xl font-bold drop-shadow-lg transition-colors duration-500 ${isLow ? 'text-amber-200' : 'text-white'}`}>
              {lvl}<span className="text-xl font-semibold">%</span>
            </span>
          </div>

          {/* Low warning badge inside tank */}
          {isLow && (
            <div className="absolute top-3 inset-x-0 flex justify-center">
              <span className="flex items-center gap-1 text-[11px] text-amber-300 font-bold animate-pulse">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                LOW
              </span>
            </div>
          )}
        </div>

        {/* Right spacer */}
        <div className="w-3" />
      </div>

      {/* Pipe + Pump motor */}
      <div className="flex flex-col items-center gap-0.5">
        <div className={`w-1.5 h-5 rounded-full transition-colors duration-500 ${pumpOn ? 'bg-cyan-400' : 'bg-surface-container-high'}`} />
        <div className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
          pumpOn
            ? 'border-cyan-400 bg-cyan-400/15 shadow-[0_0_20px_rgba(34,211,238,0.35)]'
            : 'border-white/15 bg-surface-container'
        }`}>
          <span
            className={`material-symbols-outlined text-2xl transition-colors duration-300 ${pumpOn ? 'text-cyan-400' : 'text-on-surface-variant/40'}`}
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            water_pump
          </span>
          {pumpOn && <span className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping" />}
        </div>
        <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${pumpOn ? 'text-cyan-400' : 'text-on-surface-variant/40'}`}>
          Motor
        </span>
      </div>

      {/* Status row */}
      <div className="flex gap-2 flex-wrap justify-center">
        <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-500 ${
          pumpOn
            ? 'bg-cyan-400/10 border-cyan-400/40 text-cyan-300'
            : 'bg-green-500/10 border-green-500/30 text-green-400'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full inline-block ${pumpOn ? 'bg-cyan-400 animate-pulse' : 'bg-green-400'}`} />
          {pumpOn ? 'Pump ON — Filling' : 'Pump OFF'}
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
          <span className="material-symbols-outlined text-sm">tune</span>
          Auto Mode
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container border border-glass-stroke text-on-surface-variant text-xs font-semibold">
          <span className="material-symbols-outlined text-sm">display_settings</span>
          OLED ON
        </span>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('specs')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="pt-20">

      {/* Page header */}
      <section className="py-14 px-gutter text-center max-w-container-max mx-auto">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest px-3 py-1 border border-primary/30 rounded-full bg-primary/10 inline-block mb-4">
          Our Products
        </span>
        <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface leading-tight mb-4">
          Engineering You Can <span className="text-primary">Trust</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl mx-auto">
          Designed and manufactured by MDtronix Lab — hardware that solves real problems.
        </p>
      </section>

      {/* ── Water Tank Level Controller ── */}
      <section className="px-gutter pb-stack-lg max-w-container-max mx-auto">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Info */}
            <div className="p-10 lg:p-14 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  Hardware Product
                </span>
                <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface mt-4 mb-3">
                  Water Tank Level Controller
                </h2>
                <p className="text-on-surface-variant leading-relaxed">
                  A compact, intelligent module that automates your water pump — keeping your tank full, your motor safe, and your phone informed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {waterTankFeatures.map((f) => (
                  <div key={f.label} className="flex items-start gap-3 p-4 rounded-2xl bg-surface-container/50 border border-glass-stroke hover:border-primary/30 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {f.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-on-surface">{f.label}</p>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="flex flex-wrap gap-4 pt-2">
                <button className="shimmer-btn bg-plasma-blue text-white px-8 py-3.5 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-plasma-blue/20">
                  Order Now
                </button>
                <button className="glass-card text-on-surface px-8 py-3.5 rounded-xl font-bold hover:bg-surface-bright/20 transition-all active:scale-95 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  Learn More
                </button>
              </div> */}
            </div>

            {/* Visual */}
            <div className="flex items-center justify-center p-10 lg:p-14 bg-gradient-to-br from-plasma-blue/5 to-transparent border-t lg:border-t-0 lg:border-l border-glass-stroke">
              <WaterLevelVisual />
            </div>

          </div>
        </div>
      </section>

      {/* ── Nexus AI Hub ── */}
      <section className="px-gutter pb-stack-lg max-w-container-max mx-auto">
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Info */}
            <div className="p-10 lg:p-14 order-2 lg:order-1 space-y-6 flex flex-col justify-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  Smart Home
                </span>
                <div className="flex items-center gap-3 mt-4 mb-2">
                  <h2 className="font-headline-lg text-3xl md:text-4xl text-on-surface">Nexus AI Hub</h2>
                  <div className="flex text-tertiary">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {i === 5 ? 'star_half' : 'star'}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">
                  The central brain of your MDtronix smart home — orchestrates your entire ecosystem with neural processing and zero-cloud privacy.
                </p>
              </div>

              <div className="space-y-3">
                {nexusAccordion.map((item) => (
                  <div key={item.id} className="rounded-2xl overflow-hidden border border-glass-stroke">
                    <button
                      className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-surface-bright/10 transition-colors"
                      onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    >
                      <span className="font-semibold text-sm text-on-surface">{item.title}</span>
                      <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${openAccordion === item.id ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>
                    {openAccordion === item.id && (
                      <div className="px-5 pb-4 border-t border-glass-stroke text-on-surface-variant text-sm leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* <div className="flex flex-wrap items-center gap-4 pt-2">
                <div>
                  <p className="text-xs text-primary font-medium">Starting at</p>
                  <p className="text-2xl font-bold text-on-surface">₹14,999</p>
                </div>
                <button className="shimmer-btn bg-plasma-blue text-white px-8 py-3.5 rounded-xl font-bold hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-plasma-blue/20">
                  Pre-order Now
                </button>
              </div> */}
            </div>

            {/* Carousel */}
            <div className="order-1 lg:order-2 p-8 lg:p-12 bg-gradient-to-br from-plasma-blue/5 to-transparent border-b lg:border-b-0 lg:border-l border-glass-stroke flex items-center justify-center">
              <div className="relative w-full max-w-sm mx-auto group">
                <div className="absolute -inset-8 bg-plasma-blue/15 rounded-full blur-[60px] animate-pulse" />
                <div className="glass-card rounded-[2rem] overflow-hidden p-3 relative aspect-square">
                  <img
                    src={carouselImages[currentSlide]}
                    className="w-full h-full object-cover rounded-2xl transition-opacity duration-500"
                    alt="Nexus AI Hub"
                  />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          currentSlide === i ? 'w-10 bg-primary' : 'w-3 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
