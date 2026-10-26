import { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Send, CheckCircle2, MessageCircle, Sparkles, AlertCircle } from 'lucide-react';

export default function LeadConsultationForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Beli Unit Perumahan Mitra Bangun Prima');
  const [budget, setBudget] = useState('Rp 350 Juta - Rp 600 Juta');
  const [locationNote, setLocationNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Silakan masukkan nama lengkap Anda.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMsg('Silakan masukkan nomor WhatsApp yang aktif dan valid.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    const message = `Halo Mitra Bangun Prima, saya ingin mengajukan konsultasi & penawaran:
- Nama: ${name}
- No. WhatsApp: ${phone}
- Kebutuhan: ${service}
- Estimasi Budget: ${budget}
- Keterangan / Lokasi Lahan: ${locationNote || '-'}

Mohon informasi jadwal konsultasi atau detail penawarannya. Terima kasih!`;

    const waUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp link in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setLocationNote('');
    setSubmitted(false);
  };

  return (
    <section id="konsultasi-online" className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Call to Action Prose */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wide uppercase">
              <span>Konsultasi Bebas Biaya</span>
              <span aria-hidden="true">·</span>
              <span>Respon Cepat</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Konsultasi Desain & Penawaran Harga Terbaik untuk Rumah Impian Anda
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Mulai langkah pertama mewujudkan hunian aman dan estetis bersama tim ahli Mitra Bangun Prima. Diskusikan denah, spesifikasi material, serta simulasi pembiayaan yang paling pas untuk keluarga Anda.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gratis konsultasi rancangan desain arsitektur 3D awal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Perhitungan RAB transparan tanpa biaya siluman</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bantuan simulasi dan pengurusan KPR perbankan sampai disetujui</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
              <span className="block">Hubungi kami langsung via WhatsApp:</span>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold text-sm mt-0.5 inline-block"
              >
                {COMPANY_INFO.phone} (Jl. Mendut Srago Mojayan, Klaten)
              </a>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Data Konsultasi Siap Dihubungkan!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Terima kasih <strong className="text-slate-800">{name}</strong>. Pesan WhatsApp konsultasi Anda telah siap. Jika jendela chat belum terbuka secara otomatis, silakan klik tombol di bawah ini:
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Halo Mitra Bangun Prima, saya ${name} (${phone}), ingin konsultasi ${service} dengan budget ${budget}. Catatan: ${locationNote || '-'}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Lanjutkan ke WhatsApp</span>
                  </a>

                  <button
                    onClick={resetForm}
                    className="px-4 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg"
                  >
                    Kirim Form Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Formulir Konsultasi & Penawaran Harga
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Isi form singkat ini, tim kami akan segera membalas dengan rincian yang Anda perlukan.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 rounded-lg text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Layanan yang Dibutuhkan
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium text-slate-800"
                    >
                      <option value="Beli Unit Perumahan Mitra Bangun Prima">Beli Unit Perumahan Cluster</option>
                      <option value="Bangun Rumah Baru di Tanah Pribadi">Bangun Rumah Baru di Tanah Pribadi</option>
                      <option value="Renovasi Rumah Tinggal / Komersial">Renovasi Rumah Tinggal</option>
                      <option value="Konsultasi Desain Arsitek & RAB">Konsultasi Desain & Estimasi RAB</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Perkiraan Budget Anggaran
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium text-slate-800"
                    >
                      <option value="Di bawah Rp 350 Juta">Di bawah Rp 350 Juta</option>
                      <option value="Rp 350 Juta - Rp 600 Juta">Rp 350 Juta - Rp 600 Juta</option>
                      <option value="Rp 600 Juta - Rp 900 Juta">Rp 600 Juta - Rp 900 Juta</option>
                      <option value="Di atas Rp 900 Juta">Di atas Rp 900 Juta</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Catatan Kebutuhan / Lokasi Lahan Anda (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    value={locationNote}
                    onChange={(e) => setLocationNote(e.target.value)}
                    placeholder="Contoh: Rencana bangun rumah 1 lantai 3 kamar di daerah Srago Klaten, butuh estimasi biaya dan gambar denah..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all active:scale-[0.99]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Kirim & Mulai Konsultasi via WhatsApp</span>
                  </button>
                  <span className="block text-center text-[11px] text-slate-400 mt-2">
                    Data Anda aman. Kami akan langsung mengarahkan Anda ke tim konsultan resmi Mitra Bangun Prima.
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
