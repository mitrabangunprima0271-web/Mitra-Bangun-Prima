import { useState, useMemo } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Calculator, Hammer, Send, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

interface MortgageCalculatorProps {
  initialPrice?: number;
  initialHouseName?: string;
}

export default function MortgageCalculator({ initialPrice = 375000000, initialHouseName = 'Tipe 45 / 72 — Griya Prima Asri' }: MortgageCalculatorProps) {
  const [activeTab, setActiveTab] = useState<'kpr' | 'bangun'>('kpr');

  // KPR States
  const [propertyPrice, setPropertyPrice] = useState<number>(initialPrice);
  const [dpPercent, setDpPercent] = useState<number>(15);
  const [interestRate, setInterestRate] = useState<number>(5.5); // % per tahun
  const [tenorYears, setTenorYears] = useState<number>(15);
  const [houseNote, setHouseNote] = useState<string>(initialHouseName);

  // Custom Build States
  const [buildingArea, setBuildingArea] = useState<number>(60); // m2
  const [storeys, setStoreys] = useState<number>(1);
  const [finishGrade, setFinishGrade] = useState<'standar' | 'deluxe' | 'luxury'>('deluxe');

  // Calculations: KPR
  const kprCalculations = useMemo(() => {
    const dpAmount = (propertyPrice * dpPercent) / 100;
    const loanPrincipal = propertyPrice - dpAmount;
    
    // Monthly interest
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = tenorYears * 12;
    
    // Annuity formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    let monthlyInstallment = 0;
    if (monthlyRate > 0 && totalMonths > 0) {
      const compound = Math.pow(1 + monthlyRate, totalMonths);
      monthlyInstallment = loanPrincipal * ((monthlyRate * compound) / (compound - 1));
    } else {
      monthlyInstallment = loanPrincipal / totalMonths;
    }

    const totalPayment = monthlyInstallment * totalMonths;
    const totalInterest = totalPayment - loanPrincipal;

    return {
      dpAmount,
      loanPrincipal,
      monthlyInstallment: Math.round(monthlyInstallment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      totalMonths
    };
  }, [propertyPrice, dpPercent, interestRate, tenorYears]);

  // Calculations: Custom Build
  const buildCalculations = useMemo(() => {
    let ratePerMeter = 3500000;
    let gradeLabel = 'Standar Prima';
    if (finishGrade === 'deluxe') {
      ratePerMeter = 4500000;
      gradeLabel = 'Modern Deluxe';
    } else if (finishGrade === 'luxury') {
      ratePerMeter = 5800000;
      gradeLabel = 'Custom Luxury';
    }

    // Multiply by storeys factor (2-storey has structural surcharge ~15% for stairs/slab)
    const storeysMultiplier = storeys === 2 ? 1.15 : 1.0;
    const totalEstimatedCost = Math.round(buildingArea * ratePerMeter * storeysMultiplier);

    const termin1 = Math.round(totalEstimatedCost * 0.30); // Pondasi & Struktur
    const termin2 = Math.round(totalEstimatedCost * 0.30); // Dinding & Atap
    const termin3 = Math.round(totalEstimatedCost * 0.35); // Finishing & MEP
    const termin4 = Math.round(totalEstimatedCost * 0.05); // Garansi Retensi

    return {
      ratePerMeter,
      gradeLabel,
      totalEstimatedCost,
      termin1,
      termin2,
      termin3,
      termin4
    };
  }, [buildingArea, storeys, finishGrade]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const getWaLinkForKpr = () => {
    const text = `Halo Mitra Bangun Prima, saya telah melakukan simulasi KPR untuk "${houseNote}":
- Harga Rumah: ${formatRupiah(propertyPrice)}
- DP (${dpPercent}%): ${formatRupiah(kprCalculations.dpAmount)}
- Plafon KPR: ${formatRupiah(kprCalculations.loanPrincipal)}
- Tenor: ${tenorYears} Tahun
- Estimasi Angsuran: ${formatRupiah(kprCalculations.monthlyInstallment)} / bulan

Mohon info ketersediaan unit dan panduan pengajuan berkas KPR ke bank. Terima kasih!`;
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  const getWaLinkForBuild = () => {
    const text = `Halo Mitra Bangun Prima, saya ingin konsultasi pembangunan rumah:
- Luas Rencana: ${buildingArea} m² (${storeys} Lantai)
- Paket Kualitas: ${buildCalculations.gradeLabel} (Est. ${formatRupiah(buildCalculations.ratePerMeter)}/m²)
- Estimasi Total Anggaran: ${formatRupiah(buildCalculations.totalEstimatedCost)}

Mohon jadwal survey lokasi atau diskusi rancangan desain & RAB detailnya. Terima kasih!`;
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="simulasi-kpr" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
            <span>Kalkulator Transparan</span>
            <span aria-hidden="true">·</span>
            <span>Rencanakan Anggaran</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1" style={{ textWrap: 'balance' }}>
            Simulasi Angsuran KPR & Estimasi Biaya Bangun Rumah
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Hitung perkiraan angsuran bulanan kepemilikan rumah impian Anda atau proyeksikan kebutuhan biaya pembangunan baru dengan sistem perhitungan transparan.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md mb-8">
          <button
            onClick={() => setActiveTab('kpr')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'kpr'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Simulasi KPR Bank</span>
          </button>
          <button
            onClick={() => setActiveTab('bangun')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'bangun'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Hammer className="w-4 h-4" />
            <span>Estimasi Biaya Bangun</span>
          </button>
        </div>

        {/* TAB 1: SIMULASI KPR */}
        {activeTab === 'kpr' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-6">
              
              {/* Unit Label Reference */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pilihan Unit Properti
                </label>
                <input
                  type="text"
                  value={houseNote}
                  onChange={(e) => setHouseNote(e.target.value)}
                  placeholder="Contoh: Tipe 45 / 72 Griya Prima Asri"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Property Price */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Harga Properti
                  </label>
                  <span className="text-sm font-bold text-blue-700 tabular-nums">
                    {formatRupiah(propertyPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={250000000}
                  max={1500000000}
                  step={25000000}
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full accent-blue-700 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>Rp 250 Jt</span>
                  <span>Rp 750 Jt</span>
                  <span>Rp 1.5 Milyar</span>
                </div>
              </div>

              {/* Down Payment (DP) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Uang Muka / DP ({dpPercent}%)
                  </label>
                  <span className="text-sm font-bold text-slate-900 tabular-nums">
                    {formatRupiah(kprCalculations.dpAmount)}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[10, 15, 20, 30].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setDpPercent(pct)}
                      className={`py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                        dpPercent === pct
                          ? 'bg-blue-700 text-white border-blue-700'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Tenor & Suku Bunga Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Jangka Waktu (Tenor)
                  </label>
                  <select
                    value={tenorYears}
                    onChange={(e) => setTenorYears(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                  >
                    <option value={5}>5 Tahun (60 Bulan)</option>
                    <option value={10}>10 Tahun (120 Bulan)</option>
                    <option value={15}>15 Tahun (180 Bulan)</option>
                    <option value={20}>20 Tahun (240 Bulan)</option>
                    <option value={25}>25 Tahun (300 Bulan)</option>
                  </select>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Suku Bunga KPR
                    </label>
                    <span className="text-xs font-bold text-blue-700 tabular-nums">{interestRate}% / thn</span>
                  </div>
                  <input
                    type="range"
                    min={4.0}
                    max={11.0}
                    step={0.25}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-blue-700 cursor-pointer mt-2"
                  />
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Promo KPR Bank BSI / BTN / Mandiri rata-rata 4.5% - 7.5%
                  </span>
                </div>
              </div>

            </div>

            {/* Output Summary Card (Right Column) */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
                  Hasil Simulasi Angsuran
                </span>
                
                {/* Highlight Monthly Installment */}
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">Estimasi Angsuran per Bulan</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 tabular-nums mt-1">
                    {formatRupiah(kprCalculations.monthlyInstallment)}
                    <span className="text-xs font-normal text-slate-400 ml-1.5">/ bulan</span>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="mt-6 space-y-3 text-xs border-t border-slate-800 pt-4">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Uang Muka / DP ({dpPercent}%):</span>
                    <span className="font-semibold text-white tabular-nums">{formatRupiah(kprCalculations.dpAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Plafon Pinjaman (KPR Pokok):</span>
                    <span className="font-semibold text-white tabular-nums">{formatRupiah(kprCalculations.loanPrincipal)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Lama Angsuran:</span>
                    <span className="font-semibold text-white tabular-nums">{tenorYears} Tahun ({kprCalculations.totalMonths} Bulan)</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Suku Bunga Efektif:</span>
                    <span className="font-semibold text-white tabular-nums">{interestRate}% per tahun</span>
                  </div>
                </div>
              </div>

              {/* Note and Action Button */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <p className="text-[11px] text-slate-400 leading-normal">
                  *Perhitungan merupakan simulasi anuitas estimasi. Angsuran final disesuaikan dengan kebijakan bank rekanan (BTN, BSI, Mandiri, BRI, BCA). Tim kami siap mendampingi proses pemberkasan sampai ACC.
                </p>

                <a
                  href={getWaLinkForKpr()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all font-medium active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Konsultasi Simulasi KPR via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: ESTIMASI BIAYA BANGUN / RENOVASI */}
        {activeTab === 'bangun' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-6">
              
              {/* Building Area */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Rencana Luas Bangunan
                  </label>
                  <span className="text-sm font-bold text-blue-700 tabular-nums">
                    {buildingArea} m²
                  </span>
                </div>
                <input
                  type="range"
                  min={36}
                  max={300}
                  step={6}
                  value={buildingArea}
                  onChange={(e) => setBuildingArea(Number(e.target.value))}
                  className="w-full accent-blue-700 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>36 m² (Kecil)</span>
                  <span>100 m² (Menengah)</span>
                  <span>300 m² (Besar/Mewah)</span>
                </div>
              </div>

              {/* Jumlah Lantai */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Jumlah Lantai
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setStoreys(1)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-colors ${
                      storeys === 1
                        ? 'bg-blue-700 text-white border-blue-700'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    1 Lantai
                  </button>
                  <button
                    type="button"
                    onClick={() => setStoreys(2)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center transition-colors ${
                      storeys === 2
                        ? 'bg-blue-700 text-white border-blue-700'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    2 Lantai (Dak Beton K-250)
                  </button>
                </div>
              </div>

              {/* Finishing Quality Package */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pilihan Paket Spesifikasi Material
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFinishGrade('standar')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      finishGrade === 'standar'
                        ? 'bg-white border-blue-700 shadow-sm ring-2 ring-blue-700/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900 block">Standar Prima</span>
                    <span className="text-[11px] text-blue-700 font-semibold block mt-0.5">Rp 3.5 Jt / m²</span>
                    <span className="text-[10px] text-slate-500 block mt-1 leading-tight">
                      Granit 60x60, bata merah, baja ringan, sanitair standar
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFinishGrade('deluxe')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      finishGrade === 'deluxe'
                        ? 'bg-white border-blue-700 shadow-sm ring-2 ring-blue-700/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900 block">Modern Deluxe</span>
                    <span className="text-[11px] text-blue-700 font-semibold block mt-0.5">Rp 4.5 Jt / m²</span>
                    <span className="text-[10px] text-slate-500 block mt-1 leading-tight">
                      Granit glazed, genteng flat/keramik, drop ceiling, Toto
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFinishGrade('luxury')}
                    className={`p-3 text-left rounded-xl border transition-all ${
                      finishGrade === 'luxury'
                        ? 'bg-white border-blue-700 shadow-sm ring-2 ring-blue-700/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-900 block">Custom Luxury</span>
                    <span className="text-[11px] text-blue-700 font-semibold block mt-0.5">Rp 5.8 Jt / m²</span>
                    <span className="text-[10px] text-slate-500 block mt-1 leading-tight">
                      Granit motif marmer, railing tempered, smart lock, batu alam
                    </span>
                  </button>
                </div>
              </div>

            </div>

            {/* Output Summary Card (Right Column) */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block">
                  Proyeksi Total Anggaran
                </span>

                <div className="mt-4 pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400 block">Estimasi Biaya Pembangunan</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 tabular-nums mt-1">
                    {formatRupiah(buildCalculations.totalEstimatedCost)}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Paket: {buildCalculations.gradeLabel} · Luas {buildingArea} m² ({storeys} Lantai)
                  </span>
                </div>

                {/* Termin Breakdown */}
                <div className="mt-6 space-y-2.5 text-xs border-t border-slate-800 pt-4">
                  <span className="text-slate-400 font-semibold block mb-1">Skema Termin Pembayaran Transparan:</span>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Termin 1 (Pondasi & Struktur 30%):</span>
                    <span className="font-semibold text-white tabular-nums">{formatRupiah(buildCalculations.termin1)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Termin 2 (Dinding, Atap, Kusen 30%):</span>
                    <span className="font-semibold text-white tabular-nums">{formatRupiah(buildCalculations.termin2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Termin 3 (Finishing & MEP 35%):</span>
                    <span className="font-semibold text-white tabular-nums">{formatRupiah(buildCalculations.termin3)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Termin 4 (Garansi Retensi 5%):</span>
                    <span className="font-semibold text-white tabular-nums">{formatRupiah(buildCalculations.termin4)}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <p className="text-[11px] text-slate-400 leading-normal">
                  *Perhitungan sudah mencakup material + upah tenaga kerja tukang profesional sampai serah terima kunci. Gratis survey lahan dan konsultasi gambar 3D.
                </p>

                <a
                  href={getWaLinkForBuild()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Rincian Bangun ke WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
