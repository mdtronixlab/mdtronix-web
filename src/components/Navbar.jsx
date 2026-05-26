import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoSrc from '../assets/MDtronix_black_bg.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  // { name: 'Calculator', path: '/calculator' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-glass-stroke shadow-md shadow-plasma-blue/10">
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">

        <Link className="flex items-center gap-3" to="/" onClick={close}>
          <img alt="MDtronix Lab Logo" className="h-10 w-auto object-contain" src={logoSrc} />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-on-surface">MDtronix</span>
            <span className="text-[10px] font-medium tracking-[0.2em] text-primary uppercase">Lab</span>
          </div>
        </Link>

        {/* Desktop nav */}
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

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/calculator')}
            className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-lg font-bold active:scale-95 transition-transform shimmer-btn"
          >
            Get Started
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-on-surface rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-on-surface rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-on-surface rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="bg-background/95 backdrop-blur-xl border-t border-glass-stroke px-gutter py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={close}
              className={`py-3 text-base font-medium border-b border-glass-stroke/40 ${
                pathname === link.path ? 'text-primary' : 'text-on-surface-variant'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => { navigate('/calculator'); close() }}
            className="bg-primary text-on-primary px-6 py-3 rounded-lg font-bold mt-4 active:scale-95 transition-transform"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  )
}
