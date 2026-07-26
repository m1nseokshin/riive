'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, Compass, Users, Library, Settings } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  const getActiveTab = () => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/explore')) return 'explore';
    if (pathname.startsWith('/community')) return 'community';
    if (pathname.startsWith('/library')) return 'library';
    if (pathname.startsWith('/settings')) return 'settings';
    return 'home';
  };

  const activeTab = getActiveTab();

  const handleExploreClick = (e) => {
    if (pathname === '/explore') {
      e.preventDefault();
      // Dispatch a custom event to open search overlay
      window.dispatchEvent(new Event('open-search-overlay'));
    }
  };

  return (
    <nav className="bottom-nav">
      <Link href="/" className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
        <div className="icon-container">
          <Home size={22} />
        </div>
        <span>홈</span>
      </Link>

      <Link 
        href="/explore" 
        onClick={handleExploreClick}
        className={`nav-item ${activeTab === 'explore' ? 'active' : ''}`}
      >
        <div className="icon-container">
          <Compass size={22} />
        </div>
        <span>탐색</span>
      </Link>

      <Link href="/community" className={`nav-item ${activeTab === 'community' ? 'active' : ''}`}>
        <div className="icon-container">
          <Users size={22} />
        </div>
        <span>커뮤니티</span>
      </Link>

      <Link href="/library" className={`nav-item ${activeTab === 'library' ? 'active' : ''}`}>
        <div className="icon-container">
          <Library size={22} />
        </div>
        <span>라이브러리</span>
      </Link>

      <Link href="/settings" className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}>
        <div className="icon-container">
          <Settings size={22} />
        </div>
        <span>설정</span>
      </Link>
    </nav>
  );
}
