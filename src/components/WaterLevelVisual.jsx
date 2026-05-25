import { useState, useEffect, useRef } from 'react'

export default function WaterLevelVisual() {
  const [level, setLevel] = useState(100)
  const [pumpOn, setPumpOn] = useState(false)
  const pumpRef = useRef(false)

  useEffect(() => {
    const id = setInterval(() => {
      setLevel(prev => {
        const pump = pumpRef.current
        let next = pump ? prev + 0.80 : prev - 0.80
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
        <div className="flex flex-col justify-between text-[10px] text-on-surface-variant/50 font-mono text-right w-8 py-0.5">
          {['100', '75', '50', '25', '0'].map(n => <span key={n}>{n}%</span>)}
        </div>

        <div className="relative w-36 h-64 border-2 border-primary/30 rounded-b-2xl rounded-t overflow-hidden bg-surface-container/30">
          {[25, 50, 75].map(p => (
            <div key={p} className="absolute left-0 right-0 border-t border-white/[0.07]" style={{ bottom: `${p}%` }} />
          ))}

          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: `${level}%`, transition: 'height 0.1s linear' }}
          >
            <div className={`absolute inset-0 transition-colors duration-700 ${
              isLow
                ? 'bg-gradient-to-t from-amber-600/70 to-amber-400/35'
                : 'bg-gradient-to-t from-blue-700/75 to-cyan-400/45'
            }`} />
            <div className="absolute top-0 left-0 right-0 h-5 overflow-hidden">
              <div
                className={`absolute h-10 w-[200%] opacity-50 transition-colors duration-700 ${isLow ? 'bg-amber-400/60' : 'bg-cyan-300/60'}`}
                style={{ borderRadius: '50%', top: '-55%', animation: 'waveScroll 2.8s linear infinite' }}
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className={`text-4xl font-bold drop-shadow-lg transition-colors duration-500 ${isLow ? 'text-amber-200' : 'text-white'}`}>
              {lvl}<span className="text-xl font-semibold">%</span>
            </span>
          </div>

          {isLow && (
            <div className="absolute top-3 inset-x-0 flex justify-center">
              <span className="flex items-center gap-1 text-[11px] text-amber-300 font-bold animate-pulse">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                LOW
              </span>
            </div>
          )}
        </div>

        <div className="w-3" />
      </div>

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
