import ctfDicodingPy from '../assets/certificates/2023-12 DICODING BASIC PYTHON.jpg';
import ctfUKBI from '../assets/certificates/Uji UKBI.jpg';
import ctfDicodingWeb from '../assets/certificates/2025-11 PWEB.jpg';

const certificates = [
    {
        title: "Belajar Dasar Pemrograman Web",
        issuer: "Dicoding Indonesia",
        description: "Kelas sertifikasi pemrograman dasar berbasis website : HTML, CSS, JS",
        year: "2025-2028",
        image: ctfDicodingWeb,
        link: "https://www.dicoding.com/certificates/JLX154WQNZ72",
    },
    {
        title: "Memulai Pemrograman dengan Python",
        issuer: "Dicoding Indonesia",
        description: "Kelas sertifikasi pemrograman dasar menggunakan Python : tipe data, logika, operasi, pengkondisian, percabangan dst.",
        year: "2023-2026",
        image: ctfDicodingPy,
        link: "https://www.dicoding.com/certificates/EYX40Y4NOPDL",
    },
    {
        title: "Uji Kemahiran Bahasa Indonesia",
        issuer: "Kemendikbudristek",
        description: "Sertifikasi kemampuan bahasa Indonesia. Lulus dengan predikat \"Istimewa\"",
        year: "2024-2026",
        image: ctfUKBI,
        link: "https://ukbi.kemendikdasmen.go.id/",
    },
];

export default certificates;
