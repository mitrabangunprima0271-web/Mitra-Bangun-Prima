import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Logo Mitra Bangun Prima"
                className="w-10 h-10 rounded-full object-cover border border-blue-500/40"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                Mitra Bangun Prima
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Developer perumahan terpercaya dan kontraktor konstruksi berstandar mutu tinggi. Berkomitmen menghadirkan hunian yang aman, nyaman, dan estetis bagi keluarga di Klaten dan sekitarnya.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Legalitas & Mutu:</p>
              <p>Sertifikat Hak Milik (SHM) · PBG Resmi · Garansi Retensi</p>
            </div>
          </div>

          {/* Quick Nav Mirror */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#koleksi-hunian" className="hover:text-blue-400 transition-colors">
                  Tipe Hunian
                </a>
              </li>
              <li>
                <a href="#galeri-proyek" className="hover:text-blue-400 transition-colors">
                  Galeri Proyek Selesai
                </a>
              </li>
              <li>
                <a href="#standar-mutu" className="hover:text-blue-400 transition-colors">
                  Standar Mutu SNI
                </a>
              </li>
              <li>
                <a href="#simulasi-kpr" className="hover:text-blue-400 transition-colors">
                  Kalkulator KPR
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-blue-400 transition-colors">
                  Testimoni Pelanggan
                </a>
              </li>
              <li>
                <a href="#lokasi-kontak" className="hover:text-blue-400 transition-colors">
                  Lokasi & Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Services Scope */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Pembangunan Cluster Perumahan Klaten</li>
              <li>Kontraktor Rumah di Lahan Pribadi</li>
              <li>Jasa Renovasi Total & Tambah Lantai</li>
              <li>Konsultasi Desain Arsitektur & Denah 3D</li>
              <li>Penyusunan Rencana Anggaran Biaya (RAB)</li>
              <li>Pendampingan Proses KPR Perbankan</li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-slate-300 font-semibold"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-amber-300 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("Halo Mitra Bangun Prima, saya ingin konsultasi penawaran harga rumah di Klaten.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-600 rounded-lg shadow-sm transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat WhatsApp Resmi</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {COMPANY_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Klaten Tengah, Jawa Tengah</span>
            <span aria-hidden="true">·</span>
            <span>Konstruksi & Properti</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
