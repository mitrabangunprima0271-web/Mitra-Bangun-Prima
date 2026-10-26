import { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2">
      {/* Speech bubble note */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-900 px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 text-xs animate-fade-in">
          <div className="flex flex-col">
            <span className="font-bold text-slate-900">Konsultasi Hunian Klaten</span>
            <span className="text-[11px] text-slate-500">Respon cepat via WhatsApp</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded"
            aria-label="Tutup petunjuk"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <a
        href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("Halo Mitra Bangun Prima, saya ingin konsultasi mengenai perumahan di Klaten.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp Mitra Bangun Prima"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
}
