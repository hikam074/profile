import imgNauture from '../assets/portos/porto-nauture.png';
import imgAthemasmasa from '../assets/portos/porto-athemasmasa.png';
import imgBarbermate from '../assets/portos/porto-barbermate.png';
import imgWebProfil from '../assets/portos/porto-profil.png';
import imgSatset from '../assets/portos/porto-satset.png';
import imgUpsence1 from '../assets/portos/porto-upsence1.png';
import imgUpsence2 from '../assets/portos/porto-upsence2.png';
import imgIgAthema from '../assets/portos/porto-ig_athema.png';
import imgIgPasisma from '../assets/portos/porto-ig_pasisma.png';
import imgYtPasisma from '../assets/portos/porto-yt_pasisma.png';
import imgYtAlazhar from '../assets/portos/porto-yt_alazhar.png';
import imgRaisa from '../assets/portos/porto-raisa.png';
import imgONF from '../assets/portos/porto-orenoframe.png';

const projects = [
    {
        title: "Sekolah Kopi Raisa : Aplikasi Website Untuk Pengajuan Kegiatan dan Laporan P4S",
        description: "Backend aplikasi e-commerce dan pelayanan kegiatan Sekolah Kopi Raisa Bondowoso. Berisi toko online produk kopi, manajemen pengajuan lauanan/kegiatan hingga laporan keuangan",
        year: "2025-2026",
        image: imgRaisa,
        technologies: ["JS", "NodeJS", "Express", "Prisma", "Supabase", "Cloudinary", "Swagger", "Joi", "Jest", "Supertest", "Nodemailer"],
        category: "Web Backend",
        link: "https://github.com/contactsekolahkopiraisa-dev/BE-Web-SekolahKopiRaisa",
    },
    {
        title: "俺のフレーム (Ore no Frame) : Aplikasi Website Blog Anime Review",
        description: "Website Blog & Aplikasi CMS (Content Management System) review & resensi anime & budaya jejepangan. Berisi review pengguna untuk anime dan Content Management System dengan pemanfaatan format markdown untuk pembuatan review, mendukung layout responsif baik di mobile maupun desktop",
        year: "2026",
        image: imgONF,
        technologies: ["TS", "NextJS", "TailwindCSS", "React", "Supabase", "Markdown"],
        category: "Web Fullstack",
        link: "https://github.com/hikam074/ore-no-frame",
    },
    {
        title: "Nauture : Sistem Informasi Pelelangan Hasil Panen",
        description: "Aplikasi lelang hasil pertanian berbasis website. Lengkap dengan mekanisme lelang, manajemen serta laporan hingga keuangan, mendukung layoput responsif baik di mobile maupun desktop",
        year: "2025",
        image: imgNauture,
        technologies: ["Laravel", "PHP", "HTML", "CSS", "JS", "NodeJS", "TailwindCSS", "Vite", "SweetAlert2", "Toastr", "ChartJS", "AnimeJS", "Midtrans", "RajaOngkir", "Onesignal", "Fonnte", "DomPDF"],
        category: "Web Fullstack",
        link: "https://github.com/hikam074/nauture",
    },
    {
        title: "Athemasmasa : Website Profil Kelas MIPA 5 SMAN 1 JEMBER",
        description: "Website statis profil kelas 10-12 MIPA 5 SMA Negeri 1 Jember lulusan 2023. Mulai dari profil anggota, galeri kelas, dan masih banyak lagi",
        year: "2022-2025",
        image: imgAthemasmasa,
        technologies: ["HTML", "CSS", "JS"],
        category: "Web Frontend",
        link: "https://athemasmasa.github.io/athemasmasa.com/",
    },
    {
        title: "Website Profil Pribadi",
        description: "Website statis profil saya. Berisi berbagai proyek, karya dan informasi mengenai saya",
        year: "2025",
        image: imgWebProfil,
        technologies: ["React", "CSS", "JS", "NodeJS", "TailwindCSS", "Vite"],
        category: "Web Frontend",
        link: "https://hikam-profile.vercel.app/",
    },
        {
        title: "InnoVixus : Sistem Informasi Manajemen Stok Toko Berbasis FIFO (first-in-first-out)",
        description: "Aplikasi web untuk manajemen toko dan stok dengan sistem FIFO. Termasuk grafik penjualan, rangkuman toko, pengelolaan stok, dan ekspor laporan ke PDF dengan sekali klik.",
        year: "2025",
        image: imgWebProfil,
        technologies: ["HTML", "CSS", "JS", "NodeJS", "TailwindCSS", "Vite", "ChartJS", "DomPDF", "Supabase"],
        category: "Web Fullstack",
        link: "https://github.com/ChieJuwonsFx/Belajar-PWEB",
    },    
    {
        title: "BarberMate : Sistem Informasi Barber Shop",
        description: "Aplikasi Desktop pengelolaan barbershop, mulai dari reservasi, presensi karyawan, hingga permbayaran dan feedback",
        year: "2024",
        image: imgBarbermate,
        technologies: ["C#", "PostgreSQL"],
        category: "Desktop App",
        link: "https://github.com/hikam074/PBOBarberMate",
    },
    {
        title: "SatSet Care : Sistem Informasi Klinik Hewan",
        description: "Aplikasi Konsol (CLI) pengelolaan klinik hewan, dari reservasi, layanan, rekam medis hingga pembayaran",
        year: "2024",
        image: imgSatset,
        technologies: ["Python", "PostgreSQL"],
        category: "CLI App",
        link: "https://github.com/hikam074/basda_sisforklinikhewan",
    },
    {
        title: "Upsence 2.0 : Program Presensi Digital & Manajemen Karyawan",
        description: "Aplikasi Konsol (CLI) lanjutan dari Upsence 1.0. Menambahkan fitur penggajian, analitik kehadiran menggunakan grafik dan algoritma khusus seperti merge sort dst.",
        year: "2024",
        image: imgUpsence2,
        technologies: ["Python"],
        category: "CLI App",
        link: "https://github.com/hikam074/algo2_upsence-programpresensi",
    },
    {
        title: "Upsence 1.0 : Program Presensi Digital",
        description: "Aplikasi Konsol (CLI) manajemen presensi karyawan. Dapat menyusun shift, melakukan presensi, hingga otomatis menangani karyawan yang tidak hadir",
        year: "2023",
        image: imgUpsence1,
        technologies: ["Python"],
        category: "CLI App",
        link: "https://github.com/hikam074/algo1_upsence-programpresensi",
    },  
    {
        title: "Athema Smasa - Instagram",
        description: "Konten kreator dari instagram @athema.smasa",
        year: "2023-2025",
        image: imgIgAthema,
        technologies: ["Instagram", "Canva"],
        category: "Design",
        link: "https://www.instagram.com/athema.smasa/",
    },
    {
        title: "Pasisma Smasa - Instagram",
        description: "Konten kreator dari instagram @pasismasa, organisasi keagamaan SMA Negeri 1 Jember",
        year: "2021-2022",
        image: imgIgPasisma,
        technologies: ["Instagram", "Canva"],
        category: "Design",
        link: "https://www.instagram.com/pasismasa/",
    },
    {
        title: "UKM-KI Al-Azhar - YouTube",
        description: "Tim Multimedia dari youtube @ukmki.al-azhar, unit kegiatan mahasiswa kerohanian islam Fakultas Ilmu Komputer Universitas Jember",
        year: "2024-2025",
        image: imgYtAlazhar,
        technologies: ["Youtube"],
        category: "Design",
        link: "https://www.youtube.com/@ukmki.al-azhar",
    },    
    {
        title: "Pasisma Smasa - YouTube",
        description: "Tim Multimedia & konten kreator dari youtube @pasismasa, organisasi keagamaan SMA Negeri 1 Jember",
        year: "2021-2023",
        image: imgYtPasisma,
        technologies: ["Youtube"],
        category: "Design",
        link: "https://www.youtube.com/@pasismasa",
    },  

];

export default projects;
