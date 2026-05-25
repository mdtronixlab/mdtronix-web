export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <div className="absolute bottom-full right-0 mb-4 bg-surface-container-high text-on-surface px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-glass-stroke">
        Chat with an automation expert
      </div>
      <a
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        href="https://wa.me/#"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.522-2.961-2.638-.087-.117-.708-.941-.708-1.793s.437-1.27.597-1.43c.16-.16.351-.2.468-.2.117 0 .234.001.334.005.109.004.254-.042.396.302.145.353.496 1.204.54 1.292.044.088.073.19.015.308-.058.118-.088.19-.174.29-.087.101-.183.225-.261.308-.093.102-.191.213-.083.4.108.188.479.789 1.029 1.278.708.631 1.303.826 1.485.914.182.088.288.073.396-.051.107-.124.462-.534.586-.717.124-.183.249-.154.419-.091.17.063 1.085.512 1.271.605.187.093.311.14.355.213.045.074.045.426-.099.831z" />
        </svg>
      </a>
    </div>
  )
}
