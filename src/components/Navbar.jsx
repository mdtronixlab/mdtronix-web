import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoSrc from '../assets/MDtronix_black_bg.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'Calculator', path: '/calculator' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-glass-stroke shadow-md shadow-plasma-blue/10">
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <div className="flex items-center gap-base">
          <Link className="flex items-center gap-3 group" to="/">
            <div className="relative flex items-center justify-center">
              <img alt="MDtronix Lab Logo" className="h-10 w-auto object-contain" src={logoSrc} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-tight text-on-surface">MDtronix</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-primary uppercase">Lab</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex gap-stack-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body-md text-body-md ${
                pathname === link.path
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary transition-colors'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => navigate('/calculator')}
          className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold active:scale-95 transition-transform shimmer-btn"
        >
          Get Started
        </button>
      </div>
    </header>
  )
}
