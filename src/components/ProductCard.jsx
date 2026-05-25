export default function ProductCard({
  badge,
  title,
  description,
  features = [],
  image,
  visual,
  tags = [],
  onOrder,
  onLearnMore,
}) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-primary/20 transition-colors duration-300">

      {/* Image / Visual area */}
      <div className="relative h-72 bg-gradient-to-br from-plasma-blue/10 to-transparent border-b border-glass-stroke overflow-hidden">
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
          <span className="material-symbols-outlined text-6xl text-primary/30" style={{ fontVariationSettings: "'FILL' 1" }}>
            devices
          </span>
        )}

        {badge && (
          <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full backdrop-blur-sm">
            {badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Title + description */}
        <div>
          <h3 className="font-headline-lg text-xl text-on-surface mb-2 leading-snug">{title}</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">{description}</p>
        </div>

        {/* Feature list */}
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f.label} className="flex items-center gap-2.5 text-sm text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-base text-primary shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {f.icon ?? 'check_circle'}
                </span>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-surface-container border border-glass-stroke text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA row — pinned to bottom */}
        {(onOrder || onLearnMore) && (
          <div className="flex gap-3 mt-auto pt-2">
            {onOrder && (
              <button
                onClick={onOrder}
                className="flex-1 bg-plasma-blue text-white py-2.5 rounded-xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-plasma-blue/20"
              >
                Order Now
              </button>
            )}
            {onLearnMore && (
              <button
                onClick={onLearnMore}
                className="flex-1 glass-card text-on-surface py-2.5 rounded-xl font-bold text-sm hover:bg-surface-bright/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-primary text-base">info</span>
                Learn More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
