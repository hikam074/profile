import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full p-4 shadow-lg fixed z-[1000] bg-white">
            <ul className="w-full flex justify-center gap-4">
                <li><Link className="navbar-li" to="/">Beranda</Link></li>
                <li><Link className="navbar-li" to="/portfolio">Portfolio</Link></li>
                <li><Link className="navbar-li" to="/contact">Kontak Saya</Link></li>
            </ul>
        </nav>
    );
}
