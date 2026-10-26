import { useState } from 'react';
import { CLIENT_TESTIMONIALS, ClientTestimonial, FAQ_ITEMS, COMPANY_INFO } from '../data/companyData';
import { ChevronDown, Star, MessageSquareQuote, ShieldCheck, CheckCircle2, MessageCircle, Home, MapPin, Calendar } from 'lucide-react';

export default function TestimonialsAndFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<{ image: string; title: string; client: string } | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
            <span>Kepercayaan & Kepuasan Pelanggan</span>
            <span aria-hidden="true">·</span>
            <span>Keluarga di Klaten</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1" style={{ textWrap: 'balance' }}>
            Cerita Nyata dari Pemilik Rumah Mitra Bangun Prima
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Transparansi dan standar mutu kami bukan sekadar janji promosi, melainkan pengalaman nyata para keluarga yang kini menikmati kenyamanan hunian impian mereka di Klaten.
          </p>
        </div>

        {/* Testimonials Grid with Photos of Their Actual Completed Houses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CLIENT_TESTIMONIALS.map((testi) => (
            <div
              key={testi.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow duration-200"
            >
              {/* Top Photo Frame: The Completed House Built For Them */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={testi.houseImage}
                  alt={`Rumah hasil pengerjaan untuk ${testi.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                {/* Top Badge: Verified Status */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{testi.verifiedStatus}</span>
                </div>

                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {testi.projectYear}
                </div>

                {/* Bottom Overlay on Photo: Project Title & Location */}
                <div className="absolute bottom-3 inset-x-3 text-white">
                  <span className="text-[11px] font-medium text-blue-300 block">
                    {testi.projectType}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{testi.location}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Body: Client Profile & Authentic Quote */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Rating Stars & Highlight Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/60">
                      {testi.highlightBenefit}
                    </span>
                  </div>

                  {/* Quote Prose */}
                  <blockquote className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pt-1">
                    "{testi.quote}"
                  </blockquote>
                </div>

                {/* Client Avatar Initial & Credentials */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200">
                    {testi.initial}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {testi.name}
                    </h4>
                    <span className="text-[11px] text-slate-500 block">
                      {testi.role} · {testi.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Trust Proof Banner */}
        <div className="mb-20 p-6 sm:p-8 bg-blue-900 rounded-2xl text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Ingin Berbicara atau Melihat Contoh Rumah yang Sudah Ditempati?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
              Kami dengan senang hati mengajak Anda melihat langsung kualitas fisik pengerjaan di perumahan kami atau berdiskusi dengan tim kami di Klaten Tengah.
            </p>
          </div>

          <a
            href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("Halo Mitra Bangun Prima, saya tertarik melihat referensi rumah yang telah selesai dibangun dan ingin jadwal konsultasi.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Jadwal Kunjungan Referensi</span>
          </a>
        </div>

        {/* FAQ Accordion */}
        <div className="pt-6 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left FAQ Intro */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
                <span>Informasi Transparan</span>
                <span aria-hidden="true">·</span>
                <span>FAQ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
                Pertanyaan Seputar Mutu, Pembayaran & Legalitas
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kami siap memberikan kejelasan menyeluruh sebelum Anda mengambil keputusan berinvestasi atau membangun rumah.
              </p>

              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-900 block">Punya Pertanyaan Khusus?</span>
                <p className="text-[11px] text-slate-600">
                  Konsultasikan langsung denah atau hitungan RAB Anda bersama tim kami.
                </p>
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("Halo Mitra Bangun Prima, saya ingin bertanya lebih lanjut seputar perumahan / proyek bangun rumah di Klaten.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 underline mt-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat Tim Pemasaran Kami via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all bg-white shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 text-xs sm:text-sm hover:text-blue-700 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-700' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
