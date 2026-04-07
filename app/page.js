// Server Component — no 'use client', no event handlers, no inline styles.
// CSS lives in public/garden.css; JS in public/garden-app.js (afterInteractive).
export default function Page() {
  return (
    <>
      <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌿</span>
            <div>
              <div className="font-semibold text-base leading-tight">Garden Manager</div>
              <div className="text-green-300 text-xs" id="nav-subtitle">Amur Family Home</div>
            </div>
          </div>
          <div className="flex gap-1 text-sm items-center" id="nav-links"></div>
        </div>
      </nav>

      <main id="app" className="max-w-7xl mx-auto px-4 py-6"></main>

      {/* LIGHTBOX — click listener attached by garden-app.js */}
      <div id="lightbox" className="modal-bg hidden">
        <img id="lightbox-img" className="photo-lg" src="" alt="" />
      </div>

      {/* LOADING OVERLAY */}
      <div id="loading-overlay" className="modal-bg hidden">
        <div className="w-10 h-10 border-4 border-green-300 border-t-white rounded-full spinner"></div>
        <div className="text-white text-sm" id="loading-msg">Loading garden data…</div>
      </div>
    </>
  );
}
