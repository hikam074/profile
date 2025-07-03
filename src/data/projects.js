import imgNauture from '../assets/porto/porto-nauture.png';
import imgAthemasmasa from '../assets/porto/porto-athemasmasa.png';
import imgBarbermate from '../assets/porto/porto-barbermate.png';
import imgWebProfil from '../assets/porto/porto-profil.png';
import imgSatset from '../assets/porto/porto-satset.png';
import imgUpsence1 from '../assets/porto/porto-upsence1.png';
import imgUpsence2 from '../assets/porto/porto-upsence2.png';
import imgIgAthema from '../assets/porto/porto-ig_athema.png';
import imgIgPasisma from '../assets/porto/porto-ig_pasisma.png';
import imgYtPasisma from '../assets/porto/porto-yt_pasisma.png';
import imgYtAlazhar from '../assets/porto/porto-yt_alazhar.png';

const projects = [
    {
        title: "Nauture : Sistem Informasi Pelelangan Hasil Panen",
        description: "Aplikasi lelang hasil pertanian berbasis website. Lengkap dengan mekanisme lelang, manajemen serta laporan hingga keuangan",
        year: "2025",
        image: imgNauture,
        technologies: ["Laravel", "TailwindCSS", "Vite", "Midtrans", "RajaOngkir", "Onesignal", "Fonnte"],
        category: "Web Fullstacks",
        link: "https://github.com/hikam074/nauture",
    },
    {
        title: "AthemaSmasa : Website Profil Kelas MIPA 5 SMAN 1 JEMBER",
        description: "Website statis profil kelas 10-12 MIPA 5 SMA Negeri 1 Jember lulusan 2023. Mulai dari profil anggota, galeri kelas, dan masih banyak lagi",
        year: "2022-2025",
        image: imgAthemasmasa,
        technologies: ["HTML", "CSS", "JS"],
        category: "Web Frontend",
        link: "https://github.com/athemasmasa/athemasmasa.com",
    },
    {
        title: "Website Profil Pribadi",
        description: "Website statis profil saya. Berisi berbagai proyek, karya dan informasi mengenai saya",
        year: "2025",
        image: imgWebProfil,
        technologies: ["React", "CSS", "JS", "TailwindCSS", "Vite"],
        category: "Web Frontend",
        link: "https://profile-virid-pi.vercel.app/",
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
        title: "Athema Smasa - Instagram",
        description: "Konten kreator dari instagram @athema.smasa",
        year: "2023-2025",
        image: imgIgAthema,
        technologies: ["Instagram", "Canva"],
        category: "Design",
        link: "https://www.instagram.com/athema.smasa/",
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
        link: "https://github.com/hikam074/algo1_upsence-programpresensi",
    },    
    {
        title: "Pasisma Smasa - YouTube",
        description: "Tim Multimedia & konten kreator dari youtube @pasismasa, organisasi keagamaan SMA Negeri 1 Jember",
        year: "2021-2023",
        image: imgYtPasisma,
        technologies: ["Youtube"],
        category: "Design",
        link: "https://github.com/hikam074/algo1_upsence-programpresensi",
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
];

export default projects;
