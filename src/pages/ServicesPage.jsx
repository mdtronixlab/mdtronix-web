import laptopRepairImg from '../assets/laptop_repair.png'
import smarthomeImg from '../assets/smarthome.png'
import embeddedImg from '../assets/embedded.png'
import cctvImg from '../assets/cctv.png'

const services = [
  {
    id: 'smart-home',
    icon: 'home_iot_device',
    title: 'Smart Home Automation',
    tagline: 'Your home, intelligently controlled.',
    description:
      'We design and install fully integrated smart home systems that connect your lighting, climate, appliances, and security under one seamless platform — controllable from anywhere via app or voice.',
    features: [
      { icon: 'lightbulb', label: 'Automated lighting scenes' },
      { icon: 'thermostat', label: 'Climate & AC control' },
      { icon: 'lock', label: 'Smart locks & access' },
      { icon: 'sensors', label: 'Motion & occupancy sensors' },
      { icon: 'router', label: 'Centralised hub setup' },
      { icon: 'phone_android', label: 'Remote app control' },
    ],
    localImage: smarthomeImg,
    color: 'from-cyan-500/20 to-blue-600/10',
    accent: 'text-cyan-400',
    ring: 'ring-cyan-500/30',
  },
  {
    id: 'embedded',
    icon: 'developer_board',
    title: 'Embedded System Design',
    tagline: 'From concept to finished hardware.',
    description:
      'End-to-end custom embedded development — schematic design, PCB layout, firmware programming, and prototype testing right through to small-batch production.',
    features: [
      { icon: 'schema', label: 'Schematic & PCB layout' },
      { icon: 'memory', label: 'Microcontroller firmware' },
      { icon: 'cable', label: 'Hardware prototyping' },
      { icon: 'wifi', label: 'IoT connectivity (Wi-Fi, BLE)' },
      { icon: 'factory', label: 'Prototype to production' },
      { icon: 'bug_report', label: 'Hardware debugging & testing' },
      ],
    localImage: embeddedImg,
    color: 'from-violet-500/20 to-purple-600/10',
    accent: 'text-violet-400',
    ring: 'ring-violet-500/30',
  },
  {
    id: 'water-tank',
    icon: 'water_drop',
    title: 'Water Tank Controller',
    tagline: 'No overflow. No dry runs. Ever.',
    description:
      'Ultrasonic level sensing with automatic pump switching — protecting your tank from overflow and your motor from running dry, with real-time OLED display and configurable thresholds.',
    features: [
      { icon: 'sensors', label: 'Ultrasonic level sensing' },
      { icon: 'electrical_services', label: 'Automatic pump switching' },
      { icon: 'monitor_heart', label: 'Real-time OLED display' },
      { icon: 'notifications', label: 'Low-level alert system' },
      { icon: 'tune', label: 'Configurable thresholds' },
      { icon: 'bolt', label: 'Dry-run motor protection' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsW0Fm5FfWblth2xmdEuJgCK06S9WkfflnMhpIN-lUSFk4XrBVsn4fO-sa_fqbi4OBTLSH615RQMhLj5r7Hj9JV5c8tYxn4zf0w6CgxwhHO637aeL5s-Ehzjs-e2lsIyZlgSsCEnkEyTYUad_T23cvWcoBea14NBXCSo7JSl0ocVxAeE6L-sBm3zWYohCl2U1TH9u4CBbNrtiNpGK26FrJ9FkyqBnGewsmF8euPjST418hjtNXve3q4vsz8DrzqxliyJEgovv6FNojgyo',
    color: 'from-blue-500/20 to-sky-600/10',
    accent: 'text-blue-400',
    ring: 'ring-blue-500/30',
  },
  {
    id: 'cctv',
    icon: 'videocam',
    title: 'CCTV Installation',
    tagline: 'Always watching, always secure.',
    description:
      'Professional-grade HD/IP camera supply and installation with remote live viewing, motion-triggered alerts, and cloud or local NVR recording for homes and businesses.',
    features: [
      { icon: 'camera_outdoor', label: 'HD & 4K IP cameras' },
      { icon: 'live_tv', label: 'Remote live viewing' },
      { icon: 'directions_run', label: 'Motion detection alerts' },
      { icon: 'cloud_upload', label: 'Cloud & local NVR storage' },
      { icon: 'night_sight_auto', label: 'Night vision coverage' },
      { icon: 'construction', label: 'Full installation & cabling' },
    ],
    localImage: cctvImg,
    color: 'from-emerald-500/20 to-green-600/10',
    accent: 'text-emerald-400',
    ring: 'ring-emerald-500/30',
  },
  {
    id: 'laptop',
    icon: 'build',
    title: 'Chip Level Laptop Service',
    tagline: 'Deep repair, not just a swap.',
    description:
      'Component-level diagnosis and repair including BGA rework, power circuit fault isolation, liquid damage recovery, and motherboard trace repair — for all major laptop brands.',
    features: [
      { icon: 'memory', label: 'Motherboard diagnostics' },
      { icon: 'settings_input_component', label: 'BGA chip rework & reballing' },
      { icon: 'electrical_services', label: 'Power circuit fault repair' },
      { icon: 'print', label: 'Printer & DVR repair' },
      { icon: 'display_settings', label: 'GPU & display IC repair' },
      { icon: 'laptop', label: 'All major laptop brands' },
    ],
    localImage: laptopRepairImg,
    color: 'from-orange-500/20 to-amber-600/10',
    accent: 'text-orange-400',
    ring: 'ring-orange-500/30',
  },
  {
    id: 'webdev',
    icon: 'code',
    title: 'Web, App & Mobile Dev',
    tagline: 'Digital products built to perform.',
    description:
      'Responsive websites, web applications, and cross-platform mobile apps — from UI/UX design through backend development to deployment and maintenance, tailored to your business.',
    features: [
      { icon: 'language', label: 'Responsive websites' },
      { icon: 'web_asset', label: 'Web app development' },
      { icon: 'phone_android', label: 'Cross-platform mobile apps' },
      // { icon: 'palette', label: 'UI/UX design' },
      { icon: 'storage', label: 'Backend & API development' },
      { icon: 'cloud_done', label: 'Deployment & maintenance' },
    ],
    image: null,
    color: 'from-pink-500/20 to-rose-600/10',
    accent: 'text-pink-400',
    ring: 'ring-pink-500/30',
  },
]

const stats = [
  { value: '50+', label: 'Installations done' },
  { value: '100+', label: 'Happy clients' },
  { value: '6', label: 'Service verticals' },
  { value: '5yr', label: 'Industry experience' },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative py-28 px-gutter flex flex-col items-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
        </div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5 block">
          What We Offer
        </span>
        <h1 className="font-headline-xl text-5xl md:text-6xl font-bold text-on-surface max-w-3xl leading-tight mb-6">
          Services Built Around <span className="text-primary">Real Problems</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          From smart home installations to chip-level repairs and custom software —
          MDtronix Lab engineers technology that works in the real world.
        </p>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <section className="px-gutter max-w-container-max mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-glass-stroke rounded-2xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface-container py-8 flex flex-col items-center gap-1">
              <span className="text-4xl font-bold text-primary">{s.value}</span>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Service overview grid ─────────────────────────── */}
      <section className="px-gutter max-w-container-max mx-auto mb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-on-surface mb-3">Everything We Do</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm">
            Six specialised verticals, one team — end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl border border-glass-stroke bg-surface-container hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* glow backdrop */}
              <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`relative w-16 h-16 rounded-2xl bg-surface-container-high ring-2 ${svc.ring} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <span
                  className={`material-symbols-outlined text-3xl ${svc.accent}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {svc.icon}
                </span>
              </div>

              <h3 className="relative text-base font-bold text-on-surface mb-1">{svc.title}</h3>
              <p className={`relative text-xs font-semibold ${svc.accent} mb-3`}>{svc.tagline}</p>
              <p className="relative text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                {svc.description}
              </p>

              <span className={`relative mt-5 flex items-center gap-1 text-xs font-bold ${svc.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                See details
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Detailed sections ────────────────────────────── */}
      <section className="px-gutter max-w-container-max mx-auto space-y-10 mb-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-on-surface mb-3">In Depth</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm">
            Everything included in each service, clearly laid out.
          </p>
        </div>

        {services.map((svc, i) => (
          <div
            id={svc.id}
            key={svc.id}
            className={`grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-glass-stroke bg-surface-container group scroll-mt-28`}
          >
            {/* Image — swap order on odd rows */}
            <div className={`relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-gradient-to-br ${svc.color} ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
              {svc.localImage ? (
                <img src={svc.localImage} alt={svc.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
              ) : svc.image ? (
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`material-symbols-outlined ${svc.accent} opacity-20`} style={{ fontSize: 140, fontVariationSettings: "'FILL' 1" }}>{svc.icon}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container/80 via-transparent to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-xl bg-surface-container-high ring-1 ${svc.ring} flex items-center justify-center shrink-0`}>
                  <span className={`material-symbols-outlined text-xl ${svc.accent}`} style={{ fontVariationSettings: "'FILL' 1" }}>{svc.icon}</span>
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${svc.accent}`}>{svc.tagline}</p>
                  <h2 className="text-xl font-bold text-on-surface leading-tight">{svc.title}</h2>
                </div>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed">{svc.description}</p>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {svc.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                    <span className={`material-symbols-outlined text-base ${svc.accent} shrink-0`} style={{ fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
                    {f.label}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/8088377441"
                target="_blank"
                rel="noopener noreferrer"
                className={`self-start flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border ${svc.ring} ${svc.accent} bg-surface-container-high hover:bg-surface-container-highest active:scale-95 transition-all`}
              >
                <span className="material-symbols-outlined text-base">chat</span>
                Enquire Now
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="px-gutter max-w-container-max mx-auto pb-24">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/20 p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <h2 className="text-3xl font-bold text-on-surface mb-3">Not sure what you need?</h2>
          <p className="text-on-surface-variant mb-8 max-w-lg mx-auto text-sm">
            Describe your problem or project — we'll find the right solution for you.
          </p>
          <a
            href="https://wa.me/8088377441"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-plasma-blue text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-plasma-blue/20"
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}
