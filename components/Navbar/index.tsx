// src/components/Navbar.js
import Link from 'next/link';
import './index.scss';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <Link href="/" className="page-title">
                    <h1>Busplay</h1>
                </Link>
                
                {/* Centralized Navigation Links */}
                <ul className="nav-links">
                    <li>
                        <Link href="/movies">Filmes</Link>
                    </li>
                    <li>
                        <Link href="/series">Séries</Link>
                    </li>
                    <li>
                        <Link href="/music">Músicas</Link>
                    </li>
                    <li>
                        <Link href="/podcast">Podcast</Link>
                    </li>
                </ul>

                {/* Avatar */}
                <div className="avatar">
                    <img src="/path-to-your-avatar.jpg" alt="Avatar" />
                </div>
            </nav>
        </div>
    );
}
