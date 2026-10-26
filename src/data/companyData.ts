export interface HouseType {
  id: string;
  name: string;
  category: 'minimalis' | 'modern' | 'deluxe' | 'custom';
  tagline: string;
  priceStart: string;
  priceNum: number;
  landArea: number; // m2
  buildingArea: number; // m2
  bedrooms: number;
  bathrooms: number;
  carport: number;
  image: string;
  highlightSpecs: string[];
  fullSpecs: {
    pondasi: string;
    dinding: string;
    lantai: string;
    atap: string;
    plafon: string;
    sanitasi: string;
    listrik: string;
    pintuJendela: string;
  };
  features: string[];
}

export const COMPANY_INFO = {
  name: "Mitra Bangun Prima",
  legalName: "Mitra Bangun Prima Developer & Kontraktor",
  logoUrl: "/assets/aistudio/image_57854515_f5293738.jpg",
  tagline: "Developer Perumahan & Kontraktor Berkualitas di Klaten",
  subTagline: "Mewujudkan Hunian Aman, Nyaman, dan Estetis dengan Standar Mutu Tinggi & Transparansi Penuh untuk Keluarga Anda",
  address: "Jl. Mendut Srago Mojayan, Klaten Tengah, Jawa Tengah",
  mapsUrl: "https://maps.google.com/?q=Jl.+Mendut+Srago+Mojayan+Klaten+Tengah+Jawa+Tengah",
  phone: "+62 821-3383-0308",
  phoneRaw: "6282133830308",
  whatsappUrl: "https://wa.me/6282133830308",
  email: "mitrabangunprima0271@gmail.com",
  workingHours: "Senin - Sabtu: 08.00 - 17.00 WIB (Layanan Konsultasi Online 24/7)",
  licenseNote: "Sertifikat Hak Milik (SHM) & PBG Terjamin",
};

export const HOUSE_TYPES: HouseType[] = [
  {
    id: "tipe-45",
    name: "Tipe 45 / 72 — Griya Prima Asri",
    category: "minimalis",
    tagline: "Pilihan favorit keluarga muda: kompak, hemat energi, dan fungsional",
    priceStart: "Rp 375 Juta",
    priceNum: 375000000,
    landArea: 72,
    buildingArea: 45,
    bedrooms: 2,
    bathrooms: 1,
    carport: 1,
    image: "/src/assets/images/hero_modern_residence_1792993322888.jpg",
    highlightSpecs: [
      "Lantai Granit Tile 60x60 cm",
      "Plafon Tinggi 3.8m Sejuk Alami",
      "Kusen Aluminium Powder Coating",
      "Sanitair Monoblok & Shower Set"
    ],
    fullSpecs: {
      pondasi: "Batu Kali + Sloof Beton Bertulang SNI",
      dinding: "Bata Merah Pres / Bata Ringan Plester Aci Cat Dulux/Jotun Weather",
      lantai: "Homogeneous Tile / Granit 60x60 cm Polish",
      atap: "Rangka Baja Ringan Zincalume C75 + Genteng Beton Flat",
      plafon: "Gypsum Board 9mm Rangka Hollow Galvanis finishing cat",
      sanitasi: "Kloset Duduk Toto/American Standard + Pipa PVC Maspion AW",
      listrik: "PLN 1.300 VA Underground / Standar dengan pengaman ELCB",
      pintuJendela: "Pintu Utama Kayu Solid Jati/Kamper, Pintu Kamar Engineering Door, Jendela Alumunium 3 inch"
    },
    features: [
      "Carport rabat beton & koral sikat",
      "Taman depan hijau asri & sisa halaman belakang",
      "Dapur semi-terbuka dengan kitchen sink stainless",
      "Sumur bor / PDAM + toren air bersih 500L"
    ]
  },
  {
    id: "tipe-65",
    name: "Tipe 65 / 96 — Graha Harmony Tropis",
    category: "modern",
    tagline: "Ruang keluarga lapang dengan sirkulasi udara optimal dan taman asri",
    priceStart: "Rp 525 Juta",
    priceNum: 525000000,
    landArea: 96,
    buildingArea: 65,
    bedrooms: 3,
    bathrooms: 2,
    carport: 1,
    image: "/src/assets/images/interior_living_room_1792993324899.jpg",
    highlightSpecs: [
      "3 Kamar Tidur Nyaman Keluarga",
      "Master Bedroom dengan Kamar Mandi Dalam",
      "Taman Belakang Inner Court Alami",
      "Smart Light Ready & Instalasi AC"
    ],
    fullSpecs: {
      pondasi: "Batu Kali Kombinasi Cakar Ayam Footplate Beton K-250",
      dinding: "Bata Merah Halus Dobel Dinding antar unit, plester aci rapi",
      lantai: "Granit Glazed Polished 60x60 cm High Quality",
      atap: "Baja Ringan Bluescope + Genteng Keramik Berglazur",
      plafon: "Drop Ceiling Ruang Tamu dengan LED warm light",
      sanitasi: "2 Kloset Duduk, Kamar Mandi Dinding Keramik Full Plafon",
      listrik: "PLN 2.200 VA instalasi kabel NYM Supreme standar PLN",
      pintuJendela: "Kusen Aluminium Alexindo Black/White, Kaca Rayben 5mm"
    },
    features: [
      "Ruang tamu & ruang keluarga konsep open space lega",
      "Carport muat 1 mobil MPV/SUV + 2 sepeda motor",
      "Instalasi water heater sudah tertanam",
      "Sistem drainase tertutup anti-banjir"
    ]
  },
  {
    id: "tipe-95",
    name: "Tipe 95 / 120 — Royal Grande 2 Lantai",
    category: "deluxe",
    tagline: "Kemewahan hunian 2 lantai elegan di kawasan elit Klaten Tengah",
    priceStart: "Rp 880 Juta",
    priceNum: 880000000,
    landArea: 120,
    buildingArea: 95,
    bedrooms: 4,
    bathrooms: 3,
    carport: 2,
    image: "/src/assets/images/house_type_deluxe_1792993323193.jpg",
    highlightSpecs: [
      "2 Lantai Struktur Beton K-275 Kokoh",
      "Carport Luas untuk 2 Mobil Bersebelahan",
      "Balkon Santai dengan Railing Kaca Tempered",
      "Desain Fasad Modern Scandinavian Tropis"
    ],
    fullSpecs: {
      pondasi: "Footplate Bertulang Besi Ulir 13mm + Sloof & Kolom Beton K-275",
      dinding: "Bata Merah Pres Super Klaten, Finishing Cat WeatherShield Exterior",
      lantai: "Granit Tile Motif Marmer 60x120 cm / 80x80 cm",
      atap: "Baja Ringan C-Truss Heavy Duty + Genteng Aspal / Keramik",
      plafon: "Gypsum Elegan dengan Hidden LED Ambience Lighting",
      sanitasi: "Kloset Duduk Toto Smart Eco Washer + Shower Box Kaca",
      listrik: "PLN 3.500 VA Daya Besar Bebas Anjlok",
      pintuJendela: "Pintu Smart Digital Lock (Fingerprint/PIN), Jendela Alumunium Tebal"
    },
    features: [
      "4 Kamar Tidur (1 Master Suite, 2 Kamar Anak, 1 Kamar Tamu/Kerja)",
      "Balkon pribadi lantai 2 dengan pemandangan terbuka",
      "Carport 2 mobil paving/andesit berkanopi elegan",
      "Tandon air atas stainless + pompa pendorong otomatis"
    ]
  },
  {
    id: "custom-bangun",
    name: "Bangun / Renovasi Sesuai Lahan Pribadi",
    category: "custom",
    tagline: "Desain arsitektur bebas sesuai impian Anda dengan transparansi RAB detail",
    priceStart: "Mulai Rp 3.5 Jt / m²",
    priceNum: 3500000,
    landArea: 0,
    buildingArea: 0,
    bedrooms: 0,
    bathrooms: 0,
    carport: 0,
    image: "/src/assets/images/construction_quality_detail_1792993324577.jpg",
    highlightSpecs: [
      "Gratis Konsultasi Desain & Gambar 3D",
      "RAB Transparan Terperinci per Material",
      "Sistem Pembayaran Bertahap sesuai Termin",
      "Garansi Retensi Pemeliharaan Pasca Bangun"
    ],
    fullSpecs: {
      pondasi: "Disesuaikan kondisi tanah hasil sondir & struktur bangunan",
      dinding: "Pilihan Bata Merah / Hebel ber-SNI",
      lantai: "Bebas pilih (Granit, Keramik, Vinyl, Parquet)",
      atap: "Baja Ringan atau Dak Beton Konsep Rooftop",
      plafon: "Desain custom (Flat, Drop, Wood Slat)",
      sanitasi: "Merk & tipe sanitair fleksibel sesuai preferensi",
      listrik: "Disesuaikan beban daya kebutuhan rumah Anda",
      pintuJendela: "Kusen Kayu Solid, Alumunium, atau UPVC"
    },
    features: [
      "Laporan progres mingguan via foto & video dokumentasi",
      "Tenaga tukang berpengalaman diawasi mandor & arsitek sipil",
      "Bebas revisi desain pada tahap konseptual awal",
      "Bantuan pengurusan izin PBG (Persetujuan Bangunan Gedung)"
    ]
  }
];

export interface CompletedProject {
  id: string;
  title: string;
  category: 'eksterior' | 'interior' | 'serah-terima';
  location: string;
  year: string;
  type: string;
  image: string;
  description: string;
  features: string[];
}

export const COMPLETED_PROJECTS: CompletedProject[] = [
  {
    id: "proj-srago-facade",
    title: "Griya Harmony Srago — Fasad Tropis Modern",
    category: "eksterior",
    location: "Srago Mojayan, Klaten Tengah",
    year: "2024",
    type: "Hunian 1 Lantai Tipe 65",
    image: "/src/assets/images/gallery_modern_facade_klaten_1792993841421.jpg",
    description: "Desain fasad minimalis modern dengan aksen batu alam andesit tekstur kasar, kanopi carport baja profil hitam elegan, serta taman depan asri dengan drainase resapan air optimal.",
    features: ["Aksen Dinding Batu Andesit", "Carport Rabat Aspal & Kanopi Baja", "Kusen Aluminium Powder Coating", "Taman Asri Tropis"]
  },
  {
    id: "proj-kitchen-dining",
    title: "Dapur & Ruang Makan Terbuka Terkoneksi",
    category: "interior",
    location: "Mojayan, Klaten Tengah",
    year: "2025",
    type: "Interior Custom Living",
    image: "/src/assets/images/gallery_modern_kitchen_dining_1792993842266.jpg",
    description: "Konsep open-plan kitchen island bermaterial kuarsa putih dipadukan dengan kabinet kayu jati hangat dan pencahayaan lampu gantung arsitektural untuk kebersamaan keluarga.",
    features: ["Kitchen Island Quartz Stone", "Plafon Balok Kayu Ekspos", "Lantai Granit Motif Kayu Anti-Gores", "Sirkulasi Udara Bebas Asap"]
  },
  {
    id: "proj-master-suite",
    title: "Master Bedroom dengan Akses Inner Courtyard",
    category: "interior",
    location: "Klaten Kota",
    year: "2025",
    type: "Kamar Tidur Utama Privat",
    image: "/src/assets/images/gallery_master_bedroom_1792993843278.jpg",
    description: "Kamar tidur utama bernuansa resort dengan pintu kaca lipat geser berukuran penuh yang langsung menghadap ke taman dinding batu alam pribadi, memberikan ketenangan total.",
    features: ["Pintu Kaca Lipat Kedap Suara", "Pemandangan Taman Inner Court", "Pencahayaan Ambient Warm Light", "Lantai Kayu Vinyl Nyaman"]
  },
  {
    id: "proj-handover-royal",
    title: "Serah Terima Kunci Royal Grande 2 Lantai",
    category: "serah-terima",
    location: "Jl. Mendut, Klaten Tengah",
    year: "2025",
    type: "Hunian 2 Lantai Tipe 95",
    image: "/src/assets/images/gallery_handover_front_1792993843828.jpg",
    description: "Momen serah terima kunci unit 2 lantai dengan struktur beton K-275, balkon kaca tempered, carport 2 mobil, dan akses jalan paving cluster lebar 6 meter.",
    features: ["Serah Terima Tepat Waktu", "Balkon Kaca Tempered Minimalis", "Carport Muat 2 Kendaraan", "Sertifikat SHM & PBG Sah"]
  },
  {
    id: "proj-living-space",
    title: "Ruang Keluarga Sejuk Berplafon Tinggi 4 Meter",
    category: "interior",
    location: "Srago, Klaten",
    year: "2024",
    type: "Interior Ruang Tamu & Keluarga",
    image: "/src/assets/images/interior_living_room_1792993324899.jpg",
    description: "Ruang keluarga berkonsep santai yang lapang dengan plafon tinggi dan bukaan jendela kaca besar mengarah ke taman samping, membuat suhu ruangan tetap sejuk tanpa AC berlebih.",
    features: ["Plafon Tinggi 4.0 Meter", "Cross-Ventilation Udara Bersih", "Pencahayaan Alami 85%", "Drop Ceiling Ambience LED"]
  },
  {
    id: "proj-luxury-night",
    title: "Hunian Modern Kontemporer Deluxe",
    category: "eksterior",
    location: "Klaten Tengah",
    year: "2024",
    type: "Hunian Mewah 2 Lantai",
    image: "/src/assets/images/house_type_deluxe_1792993323193.jpg",
    description: "Kombinasi material modern, kisi-kisi kayu fasad pelindung terik matahari barat, dan pencahayaan warm exterior yang memancarkan kemewahan bersahaja di malam hari.",
    features: ["Fasad Kisi-kisi Kayu Fungsional", "Tata Cahaya LED Tersembunyi", "Pagar Minimalis & Paving Rapi", "Keamanan Sistem One-Gate"]
  }
];

export const QUALITY_PILLARS = [
  {
    number: "01",
    title: "Standar Struktur SNI & Kuat Teruji",
    desc: "Setiap pondasi, pembesian sloof, dan kolom beton dikerjakan dengan perhitungan beban matang menggunakan besi berstandar SNI dan adukan beton terukur, menghasilkan rumah kokoh yang aman untuk puluhan tahun.",
    metric: "100% Besi SNI",
    metricLabel: "Ketahanan Struktur Utama"
  },
  {
    number: "02",
    title: "Transparansi Penuh Material & Anggaran",
    desc: "Kami menjunjung etika keterbukaan. Spesifikasi bahan yang disepakati dalam Rencana Anggaran Biaya (RAB) adalah yang terpasang di lapangan tanpa downgrade material atau biaya tersembunyi.",
    metric: "0 Biaya Siluman",
    metricLabel: "Kejujuran Spesifikasi & RAB"
  },
  {
    number: "03",
    title: "Kenyamanan Tropis & Estetika Tinggi",
    desc: "Dirancang ramah iklim tropis Klaten dengan plafon tinggi (high ceiling), tata ruang terbuka, dan pencahayaan alami yang melimpah, menciptakan suasana rumah yang sejuk, lapang, dan menenangkan.",
    metric: "3.6 - 4.0 m",
    metricLabel: "Ketinggian Plafon Sejuk Alami"
  },
  {
    number: "04",
    title: "Legalitas Aman & Pendampingan Tuntas",
    desc: "Sertifikat Hak Milik (SHM) telah pecah dan Persetujuan Bangunan Gedung (PBG) resmi. Kami mendampingi proses KPR dengan bank rekanan terkemuka hingga proses serah terima kunci dan masa garansi retensi.",
    metric: "SHM & PBG",
    metricLabel: "Status Kepemilikan Sah"
  }
];

export interface ClientTestimonial {
  id: string;
  name: string;
  initial: string;
  role: string;
  location: string;
  projectType: string;
  projectYear: string;
  houseImage: string;
  quote: string;
  highlightBenefit: string;
  verifiedStatus: string;
}

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: "testi-agus",
    name: "Bapak H. Agus Setiawan & Keluarga",
    initial: "AS",
    role: "Wiraswasta",
    location: "Mojayan, Klaten Tengah",
    projectType: "Pembangunan Hunian Tipe 65 Tropis",
    projectYear: "2024",
    houseImage: "/src/assets/images/gallery_modern_facade_klaten_1792993841421.jpg",
    quote: "Dari awal konsultasi denah sampai serah terima kunci, laporannya sangat terbuka dan transparan tiap minggu. Kualitas plesteran acian dan pemasangan granitnya sangat rapi. Sirkulasi udaranya jempolan, siang hari tidak gerah sama sekali. Keluarga kami sangat puas tinggal di sini.",
    highlightBenefit: "RAB 100% Sesuai Kesepakatan Awal",
    verifiedStatus: "Pemilik Rumah Terverifikasi"
  },
  {
    id: "testi-hendra",
    name: "Ibu Rina Wulandari & dr. Hendra",
    initial: "RH",
    role: "Dokter & Pendidik",
    location: "Srago, Klaten Tengah",
    projectType: "Custom Bangun Rumah 2 Lantai di Lahan Sendiri",
    projectYear: "2025",
    houseImage: "/src/assets/images/gallery_handover_front_1792993843828.jpg",
    quote: "Kami awalnya ragu memilih kontraktor karena pengalaman teman yang biayanya membengkak. Tapi Mitra Bangun Prima membuktikan integritasnya: progres terjadwal rapi, material terpasang sesuai spek SNI, dan arsiteknya sangat solutif mewujudkan balkon kaca impian kami.",
    highlightBenefit: "Selesai Tepat Waktu & Bergaransi",
    verifiedStatus: "Klien Custom Terverifikasi"
  },
  {
    id: "testi-wahyudi",
    name: "Bapak Tri Wahyudi",
    initial: "TW",
    role: "Karyawan BUMN",
    location: "Klaten Kota",
    projectType: "Pembelian Unit Cluster Tipe 45",
    projectYear: "2025",
    houseImage: "/src/assets/images/hero_modern_residence_1792993322888.jpg",
    quote: "Harga yang ditawarkan sangat kompetitif dengan kualitas bangunan yang kokoh. Pengurusan KPR dibantu oleh staf Mitra Bangun Prima dari berkas sampai ACC di bank rekanan tanpa ribet. Legalitas SHM juga langsung beres. Sangat recommended bagi keluarga muda di Klaten!",
    highlightBenefit: "Proses KPR & SHM Dibantu Tuntas",
    verifiedStatus: "Pembeli Unit Terverifikasi"
  },
  {
    id: "testi-nurjanah",
    name: "Ibu Siti Nurjanah",
    initial: "SN",
    role: "PNS Daerah",
    location: "Klaten Tengah",
    projectType: "Interior & Renovasi Dapur Terbuka",
    projectYear: "2025",
    houseImage: "/src/assets/images/gallery_modern_kitchen_dining_1792993842266.jpg",
    quote: "Hasil renovasi dapur dan ruang makan keluarga melebihi ekspektasi kami. Meja kitchen island kuarsanya mewah dan tukangnya sangat sopan serta rajin membersihkan area kerja setiap sore. Pilihan terbaik untuk urusan konstruksi di Klaten.",
    highlightBenefit: "Hasil Presisi Melebihi Ekspektasi",
    verifiedStatus: "Klien Renovasi Terverifikasi"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Apakah lokasi proyek perumahan Mitra Bangun Prima strategis?",
    a: "Ya, berlokasi di Jl. Mendut Srago Mojayan, Klaten Tengah. Lokasi ini sangat dekat dengan pusat kota Klaten, stasiun kereta, rumah sakit, pusat perbelanjaan, dan sekolah unggulan, dengan akses jalan aspal mulus dan bebas banjir."
  },
  {
    q: "Bagaimana skema pembayaran yang tersedia?",
    a: "Kami menyediakan opsi pembayaran fleksibel: Cash Keras (dengan diskon khusus), Cash Bertahap (tanpa bunga sesuai progres pembangunan), serta fasilitas KPR melalui bank rekanan terpercaya (BSI, BTN, BRI, Mandiri, BCA)."
  },
  {
    q: "Apakah bisa mengajukan custom denah atau perubahan desain?",
    a: "Bisa! Kami memiliki tim arsitek internal yang siap berdiskusi untuk menyesuaikan tata ruang interior, penambahan kamar, atau konsep fasad sesuai impian dan kebutuhan gaya hidup keluarga Anda."
  },
  {
    q: "Apakah Mitra Bangun Prima juga melayani jasa renovasi atau bangun di tanah sendiri?",
    a: "Tentu. Selain memasarkan unit perumahan cluster, kami melayani jasa kontraktor bangun baru dari nol di atas lahan pribadi konsumen maupun proyek renovasi total dengan RAB terperinci."
  },
  {
    q: "Apakah ada garansi pemeliharaan setelah rumah selesai?",
    a: "Pasti. Kami memberikan garansi retensi masa pemeliharaan selama 100 hari setelah serah terima kunci untuk memastikan apabila ada keluhan seperti rembes atau penyesuaian cat akan segera kami tangani secara gratis."
  }
];
