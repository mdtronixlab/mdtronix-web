import ProductCard from '../components/ProductCard'
import WaterLevelVisual from '../components/WaterLevelVisual'
import PRODUCTS from '../data/products.json'

const VISUALS = {
  'water-tank': WaterLevelVisual,
}

const WHATSAPP = '918088377441'

function handleOrder(title) {
  const msg = encodeURIComponent(`Hi, I'm interested in ordering the ${title}. Please share more details.`)
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank', 'noopener')
}

export default function ProductsPage() {
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

      {/* Products grid */}
      <section className="px-gutter pb-stack-lg max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PRODUCTS.map(({ id, title, ...props }) => {
            const Visual = VISUALS[id]
            return (
              <ProductCard
                key={id}
                title={title}
                {...props}
                visual={Visual ? <Visual /> : undefined}
                onOrder={() => handleOrder(title)}
              />
            )
          })}
        </div>
      </section>

    </main>
  )
}
