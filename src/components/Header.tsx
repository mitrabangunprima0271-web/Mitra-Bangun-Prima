import { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenConsultationModal?: () => void;
}

export default function Header({ onOpenConsultationModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getWaLink = (message: string) => {
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark & Official Emblem */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt="Mitra Bangun Prima" 
              className="w-11 h-11 rounded-full object-cover border border-blue-100 shadow-sm transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap leading-tight">
                Mitra Bangun Prima
              </span>
              <span className="text-[11px] font-medium text-blue-700 tracking-wider uppercase whitespace-nowrap">
                Konstruksi · Properti · Renovasi
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Clean Single-Line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a 
              href="#koleksi-hunian" 
              className="whitespace-nowrap hover:text-blue-700 transition-colors"
            >
              Tipe Hunian
            </a>
            <a 
              href="#galeri-proyek" 
              className="whitespace-nowrap hover:text-blue-700 transition-colors"
            >
              Galeri Proyek
            </a>
            <a 
              href="#standar-mutu" 
              className="whitespace-nowrap hover:text-blue-700 transition-colors"
            >
              Standar Mutu
            </a>
            <a 
              href="#simulasi-kpr" 
              className="whitespace-nowrap hover:text-blue-700 transition-colors"
            >
              Simulasi KPR
            </a>
            <a 
              href="#testimoni" 
              className="whitespace-nowrap hover:text-blue-700 transition-colors"
            >
              Testimoni
            </a>
            <a 
              href="#lokasi-kontak" 
              className="whitespace-nowrap hover:text-blue-700 transition-colors"
            >
              Lokasi & Kontak
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={getWaLink("Halo Mitra Bangun Prima, saya ingin konsultasi mengenai perumahan / rencana pembangunan rumah impian saya di Klaten.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <a
              href="#koleksi-hunian"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-blue-700 transition-colors"
            >
              Tipe Hunian & Properti
            </a>
            <a
              href="#galeri-proyek"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-blue-700 transition-colors"
            >
              Galeri Proyek Selesai
            </a>
            <a
              href="#standar-mutu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-blue-700 transition-colors"
            >
              Standar Mutu Bangunan
            </a>
            <a
              href="#simulasi-kpr"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-blue-700 transition-colors"
            >
              Simulasi KPR & Hitung Biaya
            </a>
            <a
              href="#testimoni"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-blue-700 transition-colors"
            >
              Testimoni Pemilik Rumah
            </a>
            <a
              href="#lokasi-kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-blue-700 transition-colors"
            >
              Lokasi Proyek & Kantor Klaten
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={getWaLink("Halo Mitra Bangun Prima, saya ingin konsultasi mengenai perumahan di Klaten.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Hubungi WhatsApp: 0821-3383-0308</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>Telepon Langsung</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
