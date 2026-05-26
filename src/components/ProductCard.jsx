export default function ProductCard({
  badge,
  title,
  description,
  features = [],
  image,
  visual,
  tags = [],
  accent = 'text-primary',
  ring = 'ring-primary/30',
  onOrder,
  onLearnMore,
}) {
  return (
    <div className="group relative flex flex-col rounded-3xl border border-glass-stroke bg-surface-container overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">

      {/* Image / Visual */}
      <div className="relative h-56 bg-gradient-to-br from-primary/10 to-transparent overflow-hidden shrink-0">
        {visual ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="scale-[0.6] pointer-events-none">{visual}</div>
          </div>
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-7xl text-primary/15" style={{ fontVariationSettings: "'FILL' 1" }}>
              devices
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-surface-container/60 to-transparent" />

        {badge && (
          <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-[0.15em] text-primary bg-surface-container/80 backdrop-blur-sm border border-primary/20 px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Title + description */}
        <div>
          <h3 className="text-lg font-bold text-on-surface mb-1.5 leading-snug">{title}</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-glass-stroke pt-4">
            {features.map((f) => (
              <li key={f.label} className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span
                  className={`material-symbols-outlined text-sm ${accent} shrink-0`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {f.icon ?? 'check_circle'}
                </span>
                {f.label}
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container-high border border-glass-stroke text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTAs */}
        {(onOrder || onLearnMore) && (
          <div className="flex gap-2.5 mt-auto pt-2">
            {onOrder && (
              <button
                onClick={onOrder}
                className="flex-1 bg-plasma-blue text-white py-2.5 rounded-xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-plasma-blue/20"
              >
                Order Now
              </button>
            )}
            {onLearnMore && (
              <button
                onClick={onLearnMore}
                className="flex-1 border border-glass-stroke bg-surface-container-high text-on-surface py-2.5 rounded-xl font-bold text-sm hover:border-primary/30 active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <span className={`material-symbols-outlined text-base ${accent}`}>info</span>
                Learn More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
