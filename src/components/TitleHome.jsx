import contacts from "../data/contacts";
import ContactCard from "./ContactCard";
import TypingAnimate from "./utils/TypingAnimate";
import LazyReveal from "./utils/LazyReveal";

export default function TitleHome() {
    return (
        <LazyReveal duration={0.6} stagger={0.4} threshold={0.3} className="px-6 min-h-[70vh] flex flex-col-reverse items-center gap-10
            md:flex-row md:justify-between lg:px-20
            ">
            <div className="max-w-[500px]">
                <LazyReveal className="flex flex-col gap-5">
                    <LazyReveal>
                        <h1 className="text-5xl font-bold">Hai! Saya Seorang</h1>
                        <h1 className="text-5xl font-bold"><TypingAnimate kalimat={['Website Developer', 'Asisten Praktikum Lab RPL', 'Pengurus Divisi Syiar UKM-KI Al-Azhar']} /></h1>
                    </LazyReveal>
                    <span className="font-light">Hai! Nama saya Mohammad Al Hikam, atau panggil saja Hikam 👋 Mahasiswa jurusan Sistem Informasi yang memiliki minat dan kemampuan di bidang perencanaan hingga pengembangan website</span>
                    <div className="flex gap-4">
                        {contacts.map((contact, index) => (
                            <ContactCard key={index} {...contact} />
                        ))}
                    </div>
                </LazyReveal>
            </div>
            <div className="max-w-[500px] min-w-[350px]">
                <img src="/src/assets/pp-half.png" className="object-cover" />
            </div>
        </LazyReveal>
    );
}