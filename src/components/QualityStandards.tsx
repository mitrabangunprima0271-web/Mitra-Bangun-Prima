import { QUALITY_PILLARS, COMPANY_INFO } from '../data/companyData';
import { CheckCircle2, ShieldCheck, Award, Eye, Home } from 'lucide-react';

export default function QualityStandards() {
  const constructionImage = "/src/assets/images/construction_quality_detail_1792993324577.jpg";
  const interiorImage = "/src/assets/images/interior_living_room_1792993324899.jpg";

  return (
    <section id="standar-mutu" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
            <span>Komitmen & Integritas</span>
            <span aria-hidden="true">·</span>
            <span>Standar Pengerjaan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1" style={{ textWrap: 'balance' }}>
            Mengapa Memilih Mitra Bangun Prima Sebagai Rekan Hunian Anda?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Membangun rumah bukan sekadar mendirikan dinding bata, melainkan menciptakan ruang hidup aman dan penuh ketenangan bagi keluarga tercinta. Kami memadukan standar teknik sipil yang ketat dengan transparansi total.
          </p>
        </div>

        {/* 4 Pillars - Asymmetric Bento/Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {QUALITY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-sm font-bold text-blue-700">
                    {pillar.number}.
                  </span>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-900 block tabular-nums">
                      {pillar.metric}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {pillar.metricLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-blue-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Standar Mutu Terverifikasi Tim Ahli Mitra Bangun Prima</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Proof Split: Construction Precision vs Family Comfort */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Visual Card: Engineering & Structure */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img
                src={constructionImage}
                alt="Detail Mutu Konstruksi dan Pengawasan Mitra Bangun Prima"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold">
                Pengawasan Lapangan & Struktur SNI
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Kekuatan Fisik Bangunan yang Bertahan Antargenerasi
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Semua proyek diawasi langsung oleh mandor berpengalaman dan tenaga sipil. Pengikatan besi, kedalaman galian pondasi, hingga perbandingan adukan semen pasir diuji secara berkala untuk mencegah retak rambut dan penurunan struktur di masa depan.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Rangka C-Truss Bergaransi</span>
                <span aria-hidden="true">·</span>
                <span>Plester Aci Super Halus</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card: Comfort & Living Experience */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
              <img
                src={interiorImage}
                alt="Kenyamanan Interior Keluarga Mitra Bangun Prima"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-blue-700/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-semibold">
                Kenyamanan & Tata Ruang Keluarga
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  Tata Ruang Bernapas: Sejuk Alami dan Penuh Cahaya
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Kami memahami iklim tropis Klaten. Penempatan jendela silang (cross-ventilation) dan ketinggian plafon dirancang sedemikian rupa sehingga sirkulasi hawa hangat keluar dengan lancar, menghemat pemakaian listrik AC dan menciptakan ketenangan di rumah.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Pencahayaan Alami 85%</span>
                <span aria-hidden="true">·</span>
                <span>Hemat Energi Harian</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
