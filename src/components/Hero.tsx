import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Compass, FileCheck2, Sparkles, ArrowRight, MessageCircle, MapPin } from 'lucide-react';

export default function Hero() {
  const heroImage = "/src/assets/images/hero_modern_residence_1792993322888.jpg";

  const getWaLink = (message: string) => {
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="relative bg-slate-50 overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Location & Trust Marker (Unboxed clean metadata) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-blue-800 tracking-wide">
              <span className="flex items-center gap-1.5 bg-blue-100/70 text-blue-900 px-3 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                Jl. Mendut Srago Mojayan, Klaten Tengah
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">Jawa Tengah</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">Developer & Kontraktor Resmi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Mewujudkan Hunian Keluarga yang Aman, Nyaman, dan Estetis Berstandar Mutu Tinggi
            </h1>

            {/* Value Proposition Prose */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              <strong className="font-semibold text-slate-800">Mitra Bangun Prima</strong> hadir sebagai developer perumahan dan kontraktor terpercaya di Klaten. Kami mendedikasikan setiap detail pembangunan hunian Anda dengan kejujuran material, transparansi anggaran, serta arsitektur yang dirancang khusus untuk kenyamanan jangka panjang seluruh keluarga.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={getWaLink("Halo Mitra Bangun Prima, saya ingin konsultasi desain & penawaran harga terbaik untuk hunian impian saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all duration-150 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi Desain & Penawaran</span>
              </a>

              <a
                href="#koleksi-hunian"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 hover:text-slate-900 border border-slate-300 rounded-lg transition-colors"
              >
                <span>Lihat Tipe Hunian</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Consultation Highlight */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Garansi Retensi Mutu</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-blue-600" />
                <span>Legalitas SHM & PBG Aman</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Gratis Konsultasi RAB</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
              <img
                src={heroImage}
                alt="Hunian Nyaman dan Modern oleh Mitra Bangun Prima Klaten"
                className="w-full h-80 sm:h-96 lg:h-[430px] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              
              {/* Bottom Scrim Overlay for High Contrast Editorial Note */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-blue-300 font-semibold">
                      Spesifikasi Standar Prima
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      Puri Asri Srago Mojayan — Klaten Tengah
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Struktur Beton SNI · Plafon Tinggi 3.8m · Granit 60x60
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="text-xs text-slate-300 block">Mulai</span>
                    <span className="text-sm sm:text-base font-bold text-amber-300">Rp 375 Jt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quality Stamp */}
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Logo Mitra Bangun Prima"
                className="w-10 h-10 rounded-full object-cover border border-blue-100"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">Mitra Bangun Prima</p>
                <p className="text-[11px] text-slate-500">Mutu Terpercaya Klaten</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Item Proof & Value Summary Row (Full-width row below hero split) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-700 tabular-nums">
              100%
            </span>
            <span className="text-sm font-bold text-slate-900">
              Transparansi Spesifikasi
            </span>
            <span className="text-xs text-slate-500 leading-normal">
              RAB terbuka terperinci per material tanpa biaya terselubung.
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-700 tabular-nums">
              SNI Mutu
            </span>
            <span className="text-sm font-bold text-slate-900">
              Standar Konstruksi Teruji
            </span>
            <span className="text-xs text-slate-500 leading-normal">
              Pondasi kokoh dan pembesian sesuai perhitungan beban sipil.
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-700 tabular-nums">
              Klaten Tengah
            </span>
            <span className="text-sm font-bold text-slate-900">
              Akses Lokasi Strategis
            </span>
            <span className="text-xs text-slate-500 leading-normal">
              Jl. Mendut Srago Mojayan, dekat fasilitas umum kota & stasiun.
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-700 tabular-nums">
              Garansi Retensi
            </span>
            <span className="text-sm font-bold text-slate-900">
              Jaminan Kepuasan Konsumen
            </span>
            <span className="text-xs text-slate-500 leading-normal">
              Masa pemeliharaan purna jual dan pendampingan KPR tuntas.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
