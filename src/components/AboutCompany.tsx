import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Users, Eye, Hammer, CheckCircle2 } from 'lucide-react';

export default function AboutCompany() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi Kebutuhan & Survey",
      desc: "Diskusi mendalam mengenai impian hunian, pemilihan tipe unit, atau peninjauan langsung lahan pribadi Anda di Klaten dan sekitarnya."
    },
    {
      num: "02",
      title: "Rancangan Desain & Transparansi RAB",
      desc: "Penyusunan gambar denah, visualisasi 3D, serta rincian material dan anggaran yang jelas tanpa biaya tak terduga."
    },
    {
      num: "03",
      title: "Konstruksi Berstandar Mutu SNI",
      desc: "Pengerjaan fisik oleh tukang ahli berdisiplin tinggi di bawah pengawasan rutin mandor dan tim teknis sipil Mitra Bangun Prima."
    },
    {
      num: "04",
      title: "Serah Terima & Garansi Pemeliharaan",
      desc: "Pengecekan bersama, serah terima kunci legalitas lengkap (SHM & PBG), serta masa garansi retensi untuk kenyamanan Anda."
    }
  ];

  return (
    <section id="tentang-kami" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Company Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-4 bg-white rounded-2xl shadow-md border border-slate-200 max-w-sm w-full text-center">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Logo Mitra Bangun Prima"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-100 shadow-sm"
              />
              <h3 className="text-xl font-bold text-slate-900 mt-4">
                Mitra Bangun Prima
              </h3>
              <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider mt-1">
                Developer & Kontraktor Klaten
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Jl. Mendut Srago Mojayan, Klaten Tengah, Jawa Tengah
              </p>
              
              <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="font-bold text-blue-700 block">Mutu Tinggi</span>
                  <span className="text-[11px] text-slate-500">Bahan SNI</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <span className="font-bold text-blue-700 block">Transparan</span>
                  <span className="text-[11px] text-slate-500">RAB Terbuka</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
              <span>Tentang Kami</span>
              <span aria-hidden="true">·</span>
              <span>Filosofi & Nilai</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
              Komitmen Membangun Rumah yang Nyaman dan Aman untuk Masa Depan Keluarga
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-800 font-semibold">Mitra Bangun Prima</strong> berdiri dengan misi menghadirkan hunian yang tidak hanya indah dipandang dari luar, tetapi kokoh dalam konstruksi dan sehat untuk ditinggali. Kami berfokus pada kualitas bangunan dan kenyamanan sejati bagi keluarga di wilayah Klaten Tengah dan sekitarnya.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Kami mengutamakan transparansi dan kepuasan pelanggan dalam setiap proyek. Mulai dari kejelasan spesifikasi bahan material, sistem pelaporan berkala, hingga ketepatan waktu serah terima. Kami percaya bahwa kepercayaan konsumen adalah fondasi terpenting dalam bisnis properti dan konstruksi.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pelayanan Ramah & Solutif</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Legalitas Sertifikat SHM Terjamin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Arsitek Berpengalaman & Tanggap</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pengawasan Lapangan Berlapis</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Step Working Process */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
              Alur Kerja Profesional
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              4 Langkah Mudah Mewujudkan Rumah Idaman Anda
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-extrabold text-blue-700/80 block mb-2 font-mono">
                    {st.num}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
