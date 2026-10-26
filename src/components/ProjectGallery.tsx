import { useState } from 'react';
import { COMPLETED_PROJECTS, CompletedProject, COMPANY_INFO } from '../data/companyData';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Calendar, Check, Layers } from 'lucide-react';

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'eksterior' | 'interior' | 'serah-terima'>('all');
  const [activeModalProject, setActiveModalProject] = useState<CompletedProject | null>(null);

  const filteredProjects = activeTab === 'all'
    ? COMPLETED_PROJECTS
    : COMPLETED_PROJECTS.filter(p => p.category === activeTab);

  const openLightbox = (project: CompletedProject) => {
    setActiveModalProject(project);
  };

  const handlePrev = () => {
    if (!activeModalProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === activeModalProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveModalProject(filteredProjects[prevIndex]);
  };

  const handleNext = () => {
    if (!activeModalProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === activeModalProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setActiveModalProject(filteredProjects[nextIndex]);
  };

  const getWaLinkForProject = (project: CompletedProject) => {
    const text = `Halo Mitra Bangun Prima, saya melihat galeri proyek "${project.title}" (${project.location}) di website. Saya tertarik dengan desain atau konsep serupa ini untuk rumah saya. Mohon informasi penawaran dan estimasi biayanya. Terima kasih.`;
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="galeri-proyek" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wide uppercase">
              <span>Portofolio Karya Nyata</span>
              <span aria-hidden="true">·</span>
              <span>Dokumentasi Proyek Selesai</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1" style={{ textWrap: 'balance' }}>
              Galeri Proyek Perumahan & Konstruksi yang Telah Selesai
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Bukti dedikasi mutu Mitra Bangun Prima di Klaten. Dari fasad modern tropis berkarakter hingga interior keluarga yang lapang, sejuk, dan estetis.
            </p>
          </div>

          {/* Interactive Navigation Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Proyek ({COMPLETED_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveTab('eksterior')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'eksterior'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Eksterior & Fasad
            </button>
            <button
              onClick={() => setActiveTab('interior')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'interior'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Interior & Tata Ruang
            </button>
            <button
              onClick={() => setActiveTab('serah-terima')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeTab === 'serah-terima'
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Serah Terima Kunci
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Zoom Trigger */}
              <div 
                onClick={() => openLightbox(project)}
                className="relative h-64 overflow-hidden bg-slate-100 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-slate-900 text-xs font-semibold shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-blue-700" />
                    Lihat Foto Penuh
                  </span>
                </div>

                {/* Clean unboxed category badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 shadow-sm">
                  {project.type}
                </div>

                <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-0.5 rounded text-[11px] font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>Selesai {project.year}</span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-700" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                    {project.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => openLightbox(project)}
                    className="text-xs font-semibold text-slate-700 hover:text-blue-700 transition-colors"
                  >
                    Detail Proyek
                  </button>

                  <a
                    href={getWaLinkForProject(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Tanya Konsep Ini</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Full-Resolution Photo & Deep Dive */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[95vh] flex flex-col">
            
            {/* Modal Top Bar */}
            <div className="p-4 sm:px-6 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-white z-10">
              <div className="pr-6">
                <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider block">
                  {activeModalProject.type} · {activeModalProject.location}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 truncate">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors shrink-0"
                aria-label="Tutup foto penuh"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Main Image with Navigation Arrows */}
            <div className="relative flex-1 bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] max-h-[60vh] overflow-hidden">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white transition-colors focus:outline-none"
                aria-label="Foto sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white transition-colors focus:outline-none"
                aria-label="Foto selanjutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Bottom Detail & Action Bar */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {activeModalProject.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
                  <span>Tahun Selesai: {activeModalProject.year}</span>
                  <span aria-hidden="true">·</span>
                  <span>Standar Mutu SNI & Garansi Retensi</span>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <a
                  href={getWaLinkForProject(activeModalProject)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi Proyek Seperti Ini</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
