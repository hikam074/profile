import { MdWork, MdSchool } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi"; // <PiFileSql />

const pengalaman = [
    {
      title: "Back-end Developer",
      subtitle: "Sekolah Kopi RAISA Bondowoso",
      date: "Agustus 2025 - Januari 2026",
      deskripsi: "Membangun aplikasi backend berbasis website untuk operasional RAISA : Pengelolaan layanan, notifikasi otomatis dengan SMTP, Hingga penerbitan sertifikat",
      icon: <FaCode />,
      backgroundColor: "#2196f3"
    },
    {
      title: "Asisten Praktikum Tetap",
      subtitle: "Laboratorium Rekayasa Perangkat Lunak UNEJ",
      date: "Juli 2025 - ongoing",
      deskripsi: "Mengajar 80+ mahasiswa mata kuliah Sistem Basis Data dan Pemrograman SQL dengan pendekatan praktis, menyediakan modul dan asistensi, serta mengelola evaluasi hingga capaian nilai rata-rata 84,5.",
      icon: <FaChalkboardTeacher />,
      backgroundColor: "#054783"
    },
    {
      title: "Asisten Praktikum Outsourcing Sistem Basis Data",
      subtitle: "Laboratorium Rekayasa Perangkat Lunak UNEJ",
      date: "Februari 2025 - Juni 2025",
      deskripsi: "Mengajar 40+ mahasiswa mata kuliah Sistem Basis Data dengan pendekatan praktis, menyediakan modul dan asistensi, serta mengelola evaluasi hingga capaian nilai rata-rata 88,58.",
      icon: <FaChalkboardTeacher />,
      backgroundColor: "#054783"
    },
    {
      title: "Penanggungjawab Tim Hadrah Fakultas Ilmu Komputer UNEJ",
      subtitle: "UKM-KI Al-Azhar",
      date: "Februari 2024 - Desember 2025",
      deskripsi: "Mengkoordinasi 15+ anggota tim hadrah dengan strategi berbasis potensi individu hingga meraih Juara 1 Hadrah Festival Mustika UNEJ 2024.",
      icon: <MdWork />,
      backgroundColor: "#347b7e"
    },
    {
      title: "Staf Divisi Syi'ar",
      subtitle: "UKM-KI Al-Azhar",
      date: "Desember 2023 - Desember 2025",
      deskripsi: "Chief Organizer Festival Ramadan 2024, aktif di berbagai kepanitiaan UKM",
      icon: <MdWork />,
      backgroundColor: "#347b7e"
    },
    {
      title: "Mahasiswa Sistem Informasi",
      subtitle: "Universitas Jember",
      date: "2023 - ongoing",
      deskripsi: "Fokus pada pengembangan web dan perancangan sistem informasi. Aktif pada kegiatan organisasi dan asisten praktikum",
      icon: <MdSchool />,
      backgroundColor: "#4caf50"
    },
];

export default pengalaman;
