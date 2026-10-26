import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, Compass, Check } from 'lucide-react';

export default function LocationAndOffice() {
  const landmarks = [
    { title: "Pusat Kota & Alun-Alun Klaten", time: "± 5 Menit Akses Cepat" },
    { title: "Stasiun Kereta Api Klaten", time: "± 6 Menit (KRL Jogja - Solo)" },
    { title: "RS dr. Soeradji Tirtonegoro & RSI Klaten", time: "± 4 Menit Pelayanan Medis" },
    { title: "Akses Utama Jalur Provinsi Jogja - Solo", time: "Bebas Banjir & Jalan Lebar" }
  ];

  return (
    <section id="lokasi-kontak" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
            <span>Lokasi Strategis</span>
            <span aria-hidden="true">·</span>
            <span>Kantor & Proyek</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1" style={{ textWrap: 'balance' }}>
            Kunjungi Kantor Pemasaran & Lokasi Proyek Kami di Klaten Tengah
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Berada di kawasan berkembang yang tenang dan nyaman untuk tempat tinggal keluarga, namun sangat dekat dengan urat nadi perekonomian Klaten.
          </p>
        </div>

        {/* 2-Column Split: Contact & Map Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Kantor Mitra Bangun Prima
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Developer Perumahan & Jasa Konstruksi Klaten
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-blue-50 text-blue-700 rounded-lg shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Alamat Kantor & Proyek:</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {COMPANY_INFO.address}
                  </p>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Kawasan Mojayan Srago, Klaten Tengah, Jawa Tengah
                  </span>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-emerald-50 text-emerald-700 rounded-lg shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">WhatsApp & Telepon Langsung:</span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-blue-700 hover:underline mt-0.5 block"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  <span className="text-[11px] text-slate-500 block">
                    Konsultasi Penjualan & Layanan Teknis Bangunan
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-amber-50 text-amber-700 rounded-lg shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Email Korespondensi:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-700 mt-0.5 block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-slate-100 text-slate-700 rounded-lg shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Jam Operasional:</span>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>

              {/* Nearby Access Points */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-900 block mb-2.5">
                  Keunggulan Aksesibilitas Lokasi:
                </span>
                <div className="space-y-2">
                  {landmarks.map((lm, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-slate-50">
                      <span className="text-slate-700 font-medium">{lm.title}</span>
                      <span className="text-blue-700 font-semibold">{lm.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-4 border-t border-slate-100">
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4 text-blue-400" />
                <span>Petunjuk Arah Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Map Card & Location Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between">
            {/* Interactive/Visual Map Canvas */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-100 overflow-hidden">
              <iframe
                title="Peta Lokasi Mitra Bangun Prima Klaten"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.28821946399!2d110.605!3d-7.708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a44093e62058b%3A0x6b8bc795c64c7827!2sMojayan%2C%20Klaten%20Tengah%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-md border border-slate-200 text-xs">
                <span className="font-bold text-slate-900 block">Mitra Bangun Prima</span>
                <span className="text-[11px] text-slate-500">Jl. Mendut Srago Mojayan, Klaten Tengah</span>
              </div>
            </div>

            {/* Bottom Visit Guide */}
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold block">
                  Jadwal Survey Lokasi
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  Ingin Survey Rumah Contoh & Lokasi Proyek?
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Hubungi kami terlebih dahulu untuk dipandu langsung oleh tim pemasaran kami di lokasi.
                </p>
              </div>

              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("Halo Mitra Bangun Prima, saya ingin menjadwalkan kunjungan / survey lokasi perumahan di Jl. Mendut Srago Mojayan Klaten Tengah.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow transition-colors whitespace-nowrap"
              >
                Jadwalkan Survey
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
