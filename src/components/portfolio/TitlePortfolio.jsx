import LazyReveal from "../utils/LazyReveal";

export default function TitlePortfolio() {
    return (
        <LazyReveal triggerOnce={true}>
            <h1 className="teks-judul">PORTOFOLIO</h1>
            <p className="teks-subjudul">Beberapa karya & projek saya</p>
        </LazyReveal>
    );
}