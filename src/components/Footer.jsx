const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAJOthyLBhNHAz49YwHRAs1JinA-XDVtpby5fIq1fdB7qEGArvlqHJh19PX0IRmqcMhskNE1om56xHPtfylXRf7C0-6Ft4f0TFEoa_RpiEgetxctXxEAejdsOXC0-9fxzYlY2AQIz6_Fk8x1XhmP0Fm6KYc76dmykZ0lA8esfGoZKRTlm7vrboXa6j5HTp3a0iB7GGwMKxGNdlZBHtSwmjtzb2fRR1vyL9LgeVBMuUzZ7GTfrg5rxWv5mE0AR33MX5F39M78zdGoORj'

export default function Footer() {
  return (
    <footer className="bg-void-black w-full py-stack-lg border-t border-glass-stroke mt-stack-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-md px-gutter max-w-container-max mx-auto">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-3 logo-glow">
              <img alt="MDtronix Lab Logo" className="h-10 w-auto object-contain" src={LOGO_URL} />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white uppercase">MDtronix</span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-primary uppercase">Lab</span>
              </div>
            </div>
          </div>
          <p className="text-on-surface-variant text-sm pr-4">
            Intelligence Redefined. We specialize in cutting-edge automation for modern homes and commercial spaces.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-6">Resources</h4>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Installation Guide</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Support Center</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-6">Contact</h4>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">mail</span> hello@mdtronix.lab
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">call</span> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">location_on</span> Mancheswar, Bhubaneswar
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface mb-6">Social</h4>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">share</span>
            </div>
            <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
              <span className="material-symbols-outlined">rss_feed</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter mt-stack-lg pt-8 border-t border-glass-stroke/50 text-center">
        <p className="text-on-surface-variant text-sm">© 2024 MDtronix Lab. Intelligence Redefined.</p>
      </div>
    </footer>
  )
}
