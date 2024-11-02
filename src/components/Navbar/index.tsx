// src/components/Navbar.js
import Link from 'next/link';
import './index.scss';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <Link href="/" className="page-title">
                    <h1>NeoMatrix Play</h1>
                </Link>
            </nav>
        </div>
    );
}
