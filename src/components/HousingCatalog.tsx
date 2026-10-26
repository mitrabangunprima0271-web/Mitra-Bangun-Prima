import { useState } from 'react';
import { HOUSE_TYPES, HouseType, COMPANY_INFO } from '../data/companyData';
import { Bed, Bath, Car, Maximize2, Check, MessageCircle, X, ChevronRight, Layers } from 'lucide-react';

interface HousingCatalogProps {
  onSelectForKpr?: (price: number, name: string) => void;
}

export default function HousingCatalog({ onSelectForKpr }: HousingCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'minimalis' | 'modern' | 'deluxe' | 'custom'>('all');
  const [selectedHouse, setSelectedHouse] = useState<HouseType | null>(null);

  const filteredHouses = activeFilter === 'all' 
    ? HOUSE_TYPES 
    : HOUSE_TYPES.filter(h => h.category === activeFilter);

  const getWaLinkForHouse = (house: HouseType) => {
    const text = `Halo Mitra Bangun Prima, saya tertarik dengan "${house.name}". Mohon informasi ketersediaan unit, brosur lengkap, dan penawaran harga terbaiknya. Terima kasih.`;
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="koleksi-hunian" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
              <span>Portofolio Properti</span>
              <span aria-hidden="true">·</span>
              <span>Klaten Tengah</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1" style={{ textWrap: 'balance' }}>
              Pilihan Tipe Hunian Idaman Keluarga
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Setiap unit dirancang dengan perhatian mendalam pada ventilasi udara, pencahayaan alami, struktur kuat SNI, serta estetika modern yang tak lekang waktu.
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Pilihan
            </button>
            <button
              onClick={() => setActiveFilter('minimalis')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'minimalis'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tipe 45
            </button>
            <button
              onClick={() => setActiveFilter('modern')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'modern'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tipe 65
            </button>
            <button
              onClick={() => setActiveFilter('deluxe')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'deluxe'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tipe 95 (2 Lantai)
            </button>
            <button
              onClick={() => setActiveFilter('custom')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'custom'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Custom Bangun
            </button>
          </div>
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHouses.map((house) => (
            <div
              key={house.id}
              className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={house.image}
                  alt={house.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Clean Unboxed Category Indicator */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-slate-800 shadow-sm">
                  {house.category === 'custom' ? 'Jasa Bangun / Renovasi' : `Mulai ${house.priceStart}`}
                </div>

                {house.landArea > 0 && (
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[11px] font-medium">
                    LT {house.landArea}m² / LB {house.buildingArea}m²
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <span>Klaten Tengah</span>
                    <span aria-hidden="true">·</span>
                    <span>Legalitas SHM & PBG</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {house.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {house.tagline}
                  </p>

                  {/* Room Features (if residential type) */}
                  {house.bedrooms > 0 && (
                    <div className="flex items-center gap-4 py-3 my-3 border-y border-slate-100 text-xs text-slate-700 font-medium">
                      <div className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-blue-600" />
                        <span>{house.bedrooms} Kamar Tidur</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5 text-blue-600" />
                        <span>{house.bathrooms} Kamar Mandi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="w-3.5 h-3.5 text-blue-600" />
                        <span>{house.carport} Carport</span>
                      </div>
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-1 text-xs text-slate-600">
                    {house.highlightSpecs.slice(0, 3).map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 block">Investasi Mulai</span>
                      <span className="text-base font-extrabold text-blue-700">
                        {house.priceStart}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedHouse(house)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-blue-700 transition-colors py-1 px-2 rounded hover:bg-slate-50"
                    >
                      <span>Spesifikasi Lengkap</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={getWaLinkForHouse(house)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Tanya via WA</span>
                    </a>

                    {house.priceNum > 5000000 ? (
                      <button
                        onClick={() => {
                          if (onSelectForKpr) {
                            onSelectForKpr(house.priceNum, house.name);
                            const el = document.getElementById('simulasi-kpr');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="flex items-center justify-center gap-1 py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                      >
                        <span>Simulasi KPR</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          const el = document.getElementById('simulasi-kpr');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center justify-center gap-1 py-2 px-3 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                      >
                        <span>Hitung Biaya</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Custom Build Banner Card */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-900 rounded-2xl text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Layanan Bangun di Lahan Sendiri
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Punya Tanah Sendiri di Wilayah Klaten & Sekitarnya?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Mitra Bangun Prima siap merancang dan membangun hunian custom dari nol sesuai anggaran Anda. Kami sediakan arsitek, pembuatan RAB transparan, hingga pengurusan Izin PBG.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("Halo Mitra Bangun Prima, saya memiliki lahan sendiri di Klaten dan ingin konsultasi bangun rumah baru / estimasi RAB.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-blue-700" />
              <span>Konsultasi Lahan Pribadi</span>
            </a>
          </div>
        </div>

      </div>

      {/* House Full Specification Modal */}
      {selectedHouse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto border border-slate-200">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedHouse(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Tutup modal spesifikasi"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Spesifikasi Teknis Standar Mutu
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {selectedHouse.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {selectedHouse.tagline}
              </p>
            </div>

            {/* Modal Image & Price */}
            <div className="my-5 rounded-xl overflow-hidden relative h-52 bg-slate-100 border border-slate-200">
              <img
                src={selectedHouse.image}
                alt={selectedHouse.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-blue-700 shadow-sm">
                Harga Investasi: {selectedHouse.priceStart}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5 border-b border-slate-100 pb-2">
                <Layers className="w-4 h-4 text-blue-700" />
                <span>Rincian Material & Konstruksi SNI</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-slate-500 block font-medium">Pondasi & Struktur</span>
                  <span className="text-slate-800 font-semibold mt-0.5 block">{selectedHouse.fullSpecs.pondasi}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-slate-500 block font-medium">Dinding & Cat</span>
                  <span className="text-slate-800 font-semibold mt-0.5 block">{selectedHouse.fullSpecs.dinding}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-slate-500 block font-medium">Lantai Utama</span>
                  <span className="text-slate-800 font-semibold mt-0.5 block">{selectedHouse.fullSpecs.lantai}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-slate-500 block font-medium">Rangka Atap & Genteng</span>
                  <span className="text-slate-800 font-semibold mt-0.5 block">{selectedHouse.fullSpecs.atap}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-slate-500 block font-medium">Plafon Interior</span>
                  <span className="text-slate-800 font-semibold mt-0.5 block">{selectedHouse.fullSpecs.plafon}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-slate-500 block font-medium">Sanitasi & Kamar Mandi</span>
                  <span className="text-slate-800 font-semibold mt-0.5 block">{selectedHouse.fullSpecs.sanitasi}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-slate-500 block font-medium">Daya Listrik & Kabel</span>
                  <span className="text-slate-800 font-semibold mt-0.5 block">{selectedHouse.fullSpecs.listrik}</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/60">
                  <span className="text-slate-500 block font-medium">Kusen Pintu & Jendela</span>
                  <span className="text-slate-800 font-semibold mt-0.5 block">{selectedHouse.fullSpecs.pintuJendela}</span>
                </div>
              </div>

              {/* Extra Features */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-800 block mb-2">Fasilitas & Keunggulan Bawaan:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {selectedHouse.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setSelectedHouse(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Tutup
              </button>
              <a
                href={getWaLinkForHouse(selectedHouse)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi Unit Ini via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
