export default function Page() {
  return (
    <>
      {/* NAV */}
      <nav className="bg-green-800 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌿</span>
            <div>
              <div className="font-semibold text-base leading-tight">Garden Manager</div>
              <div className="text-green-300 text-xs" id="nav-subtitle">Amur Family Home</div>
            </div>
          </div>
          <div className="flex gap-1 text-sm items-center" id="nav-links">
            {/* Populated by garden-app.js after auth */}
          </div>
        </div>
      </nav>

      <main id="app" className="max-w-7xl mx-auto px-4 py-6"></main>

      {/* LIGHTBOX */}
      <div id="lightbox" className="modal-bg hidden" onClick={() => window.closeLightbox && window.closeLightbox()}>
        <img id="lightbox-img" className="photo-lg" src="" alt="" />
      </div>

      {/* LOADING OVERLAY */}
      <div id="loading-overlay" className="modal-bg hidden flex-col gap-3">
        <div className="w-10 h-10 border-4 border-green-300 border-t-white rounded-full spinner"></div>
        <div className="text-white text-sm" id="loading-msg">Loading garden data…</div>
      </div>

      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .plant-card { transition: transform 0.18s, box-shadow 0.18s; }
        .plant-card:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,0.13); }
        .photo-thumb { width:80px; height:80px; object-fit:cover; border-radius:8px; cursor:pointer; }
        .photo-lg { max-height:70vh; max-width:100%; border-radius:12px; }
        input[type=file] { display:none; }
        .modal-bg { position:fixed; inset:0; background:rgba(0,0,0,0.65); z-index:100; display:flex; align-items:center; justify-content:center; }
        .badge-good { background:#dcfce7; color:#166534; }
        .badge-fair { background:#fef9c3; color:#854d0e; }
        .badge-poor { background:#fee2e2; color:#991b1b; }
        .priority-urgent { border-left: 4px solid #dc2626; }
        .priority-high    { border-left: 4px solid #f97316; }
        .priority-medium  { border-left: 4px solid #eab308; }
        .priority-low     { border-left: 4px solid #22c55e; }
        .spinner { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        pre { white-space: pre-wrap; word-break: break-all; }
        @media print {
          nav, .no-print { display:none !important; }
          body { background: white; }
        }
      `}</style>
    </>
  );
}
