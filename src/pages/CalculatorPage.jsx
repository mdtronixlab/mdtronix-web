import { useState } from 'react'

const prices = {
  lighting: 1200,
  security: 2500,
  climate: 1800,
  entertainment: 3500,
  water: 850,
  solar: 4200,
  monitoring: 49,
}

const coreOptions = [
  { key: 'lighting', label: 'Smart Lighting' },
  { key: 'security', label: 'Advanced Security' },
  { key: 'climate', label: 'Climate Control' },
  { key: 'entertainment', label: 'Entertainment Systems' },
]

export default function CalculatorPage() {
  const [rooms, setRooms] = useState(3)
  const [selections, setSelections] = useState({
    lighting: true,
    security: false,
    climate: true,
    entertainment: false,
    water: false,
    solar: false,
    monitoring: false,
  })

  const toggle = (key) => setSelections((prev) => ({ ...prev, [key]: !prev[key] }))

  const calculateTotal = () => {
    const base = 499 + rooms * 200
    const selectedTotal = Object.entries(selections)
      .filter(([key, on]) => on && key !== 'monitoring')
      .reduce((sum, [key]) => sum + prices[key], 0)
    return base + selectedTotal
  }

  return (
    <main className="pt-32 pb-stack-lg px-gutter max-w-container-max mx-auto">
      <section className="mb-stack-lg text-center md:text-left">
        <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl mb-4 text-primary">
          Investment Calculator
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-body-md">
          Tailor your smart home ecosystem and get an instant estimate. Intelligence, precision, and fluidity integrated into your living space.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-start">
        <div className="lg:col-span-7 space-y-stack-md">
          {/* Room selector */}
          <div className="glass-card p-stack-md rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">meeting_room</span> Select Your Space
              </h3>
              <span className="font-label-sm text-primary text-xl bg-primary/10 px-4 py-1 rounded-full">
                {rooms} Rooms
              </span>
            </div>
            <input
              className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
              max="10"
              min="1"
              type="range"
              value={rooms}
              onChange={(e) => setRooms(parseInt(e.target.value))}
            />
          </div>

          {/* Core automation */}
          <div className="glass-card p-stack-md rounded-xl">
            <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">settings_input_component</span> Core Automation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreOptions.map(({ key, label }) => (
                <label
                  key={key}
                  className="flex items-center gap-4 p-4 rounded-lg bg-surface-container-low border border-glass-stroke cursor-pointer hover:border-primary/50 transition-all"
                >
                  <input
                    type="checkbox"
                    checked={selections[key]}
                    onChange={() => toggle(key)}
                    className="w-6 h-6 rounded bg-transparent text-primary focus:ring-primary"
                  />
                  <div className="flex flex-col">
                    <span className="font-bold text-on-surface">{label}</span>
                    <span className="text-sm text-on-surface-variant">Precision engineered module</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Price summary */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-card p-stack-md rounded-xl plasma-glow relative overflow-hidden">
            <div className="relative z-10">
              <img
                className="w-full h-48 object-cover rounded-lg mb-6 shadow-lg border border-glass-stroke"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAof7kO-yopjq1UffGLWB33xuMKu8DvEGdQcFyrEk4um89EJf_7cCETfH22pbt5X4mCEvrfHWZRrvYy2SkbLfc4OO91o7TqS6p0LzLhzOyaKGFCNjL9FE4vcGAWNTgrIsOmq14Fx0XZv_8eyulnh4zoqq-_bqZiJGfLaHF9vmXyDEJTtZewRq3OgeS_6aeUuhUniByCmQLAhjMwpGVZpk3z_kLuq0dkhu0Mi4aZxFHgcGHK8odp9eiGTXVlA4VrX3Ou-8XaQTOaIp9y"
                alt="Smart home overview"
              />
              <h4 className="font-label-sm text-on-surface-variant uppercase mb-2">Estimated Investment</h4>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-primary font-headline-xl text-5xl tracking-tight">₹</span>
                <span className="text-primary font-headline-xl text-6xl tracking-tight">
                  {calculateTotal().toLocaleString()}
                </span>
              </div>
              <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                Request Final Quote <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
