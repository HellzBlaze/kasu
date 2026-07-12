"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="tab-bar">
      <Link href="/" className={`tab-btn ${pathname === '/' ? 'active' : ''}`}>
        <span className="tab-icon">🏠</span>
      </Link>
      <Link href="/plan" className={`tab-btn ${pathname === '/plan' ? 'active' : ''}`}>
        <span className="tab-icon">🎯</span>
      </Link>
      
      <div style={{ position: "relative" }}>
        <Link href="/add" className="tab-add-btn" style={{ textDecoration: 'none' }}>＋</Link>
      </div>

      <Link href="/more" className={`tab-btn ${pathname === '/more' ? 'active' : ''}`}>
        <span className="tab-icon">⚙️</span>
      </Link>
    </nav>
  );
}
