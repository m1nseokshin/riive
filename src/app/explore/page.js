'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { kpopDatabase, defaultRecentSearches } from '../../data/kpopData';
import { getAssetPath } from '../../utils/assetHelper';

export default function ExplorePage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('전체');
  const [isSearchOverlay, setIsSearchOverlay] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(defaultRecentSearches);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  const categories = ['전체', 'K-POP', '밴드', '해외'];

  // Listen for bottom nav re-click event
  useEffect(() => {
    const handleOpenOverlay = () => {
      setIsSearchOverlay(true);
      setTimeout(() => inputRef.current?.focus(), 150);
    };
    window.addEventListener('open-search-overlay', handleOpenOverlay);
    return () => window.removeEventListener('open-search-overlay', handleOpenOverlay);
  }, []);

  // Handle Search Input Changes & Auto-complete suggestions
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = kpopDatabase.filter((idol) => 
      idol.name.toLowerCase().includes(query.toLowerCase()) ||
      idol.engName.toLowerCase().includes(query.toLowerCase()) ||
      idol.agency.toLowerCase().includes(query.toLowerCase()) ||
      idol.concerts.some(c => c.title.toLowerCase().includes(query.toLowerCase()))
    );

    setSuggestions(filtered);
  };

  // Perform search / Click item
  const handleSelectSearch = (term, idolId = null) => {
    if (!recentSearches.includes(term)) {
      setRecentSearches([term, ...recentSearches.slice(0, 4)]);
    }
    setSearchQuery(term);
    setIsSearchOverlay(false);
    
    if (idolId) {
      router.push(`/community/${idolId}`);
    }
  };

  const removeRecentSearch = (e, index) => {
    e.stopPropagation();
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  return (
    <div className="page-fade-in" style={{ background: '#f5f5f7', minHeight: '100%', color: '#111111', position: 'relative' }}>
      {/* 1. 고정 헤더 & 최상단 핑크 테두리 검색 인풋 */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100, 
        background: 'rgba(245, 245, 247, 0.95)', 
        backdropFilter: 'blur(12px)',
        padding: '16px 20px 12px',
        boxShadow: isSearchOverlay ? '0 4px 20px rgba(0,0,0,0.06)' : 'none'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h1 className="screen-title" style={{ fontSize: '22px', fontWeight: '800' }}>탐색</h1>
          {isSearchOverlay && (
            <button 
              onClick={() => setIsSearchOverlay(false)}
              style={{ background: 'none', border: 'none', color: '#d83b8a', fontWeight: '700', cursor: 'pointer', fontSize: '13px' }}
            >
              닫기
            </button>
          )}
        </div>

        <div 
          onClick={() => {
            setIsSearchOverlay(true);
            setTimeout(() => inputRef.current?.focus(), 150);
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 18px',
            background: '#ffffff',
            border: '1.5px solid #f06ab0',
            borderRadius: '26px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(216, 59, 138, 0.1)'
          }}
        >
          <span style={{ color: '#d83b8a', fontSize: '16px' }}>🔍</span>
          <input 
            ref={inputRef}
            type="text" 
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsSearchOverlay(true)}
            placeholder="아티스트, VR 콘서트, 비하인드 영상 검색..."
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              color: '#333333',
              fontSize: '13px',
              width: '100%'
            }}
          />
        </div>
      </div>

      {/* 2. SEARCH SLIDE-UP DRAWER OVERLAY (검색 바 아래에서 스윽 슬라이드 업) */}
      {isSearchOverlay && (
        <div 
          className="search-slide-up"
          style={{
            position: 'absolute',
            top: '128px',
            left: 0,
            right: 0,
            bottom: 0,
            background: '#ffffff',
            zIndex: 95,
            padding: '24px 20px 90px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            boxShadow: '0 -10px 30px rgba(0,0,0,0.08)',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            overflowY: 'auto'
          }}
        >
          {/* Drawer Title Header */}
          <div style={{ fontSize: '14px', fontWeight: '800', color: '#111111' }}>
            {searchQuery ? '자동완성 검색결과' : '최근 검색어'}
          </div>

          {/* 자동완성 목록 (검색어 입력 시) */}
          {searchQuery.trim() !== '' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {suggestions.length > 0 ? (
                suggestions.map((idol) => (
                  <div 
                    key={idol.id}
                    onClick={() => handleSelectSearch(idol.name, idol.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '12px 14px',
                      borderRadius: '16px',
                      background: '#f9f9fb',
                      cursor: 'pointer',
                      border: '1px solid #f0f0f0'
                    }}
                  >
                    <img 
                      src={idol.avatar} 
                      alt={idol.name} 
                      style={{ width: '46px', height: '46px', borderRadius: '14px', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: '#111' }}>
                        {idol.name} <span style={{ fontSize: '12px', color: '#888', fontWeight: '500' }}>({idol.engName})</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#d83b8a', marginTop: '2px', fontWeight: '600' }}>
                        {idol.concerts[0]?.title}
                      </div>
                    </div>
                    <span style={{ color: '#bbb', fontSize: '16px' }}>›</span>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 0', color: '#888', fontSize: '13px' }}>
                  일치하는 K-POP 아티스트 검색 결과가 없습니다.
                </div>
              )}
            </div>
          ) : (
            /* 최근 검색 기록 칩 (검색어 없을 시) */
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                {recentSearches.map((term, index) => (
                  <div 
                    key={index}
                    onClick={() => handleSelectSearch(term)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      background: '#f0f0f4',
                      borderRadius: '20px',
                      fontSize: '13px',
                      color: '#444444',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{term}</span>
                    <span 
                      onClick={(e) => removeRecentSearch(e, index)}
                      style={{ fontSize: '14px', color: '#aaaaaa', cursor: 'pointer', marginLeft: '2px' }}
                    >
                      ×
                    </span>
                  </div>
                ))}
              </div>

              {/* 인기 아티스트 퀵 태그 */}
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#111', marginBottom: '14px' }}>
                실시간 인기 K-POP 아티스트
              </div>
              <div style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingBottom: '4px' }}>
                {kpopDatabase.slice(0, 5).map((artist) => (
                  <div 
                    key={artist.id}
                    onClick={() => handleSelectSearch(artist.name, artist.id)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      minWidth: '64px',
                      cursor: 'pointer'
                    }}
                  >
                    <img 
                      src={artist.avatar} 
                      alt={artist.name} 
                      style={{ width: '58px', height: '58px', borderRadius: '16px', objectFit: 'cover' }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#555' }}>{artist.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 3. 본문 콘텐츠 영역 */}
      <div style={{ padding: '0 20px 24px' }}>
        {/* 카테고리 칩 태그들 */}
        <div style={{ display: 'flex', gap: '8px', margin: '8px 0 24px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                border: 'none',
                background: activeCategory === cat ? '#0f1026' : '#e8e8ec',
                color: activeCategory === cat ? '#ffffff' : '#666666',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 무대 비하인드 / 자체 콘텐츠 2열 핫핑크 & 다크 타일 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
          <div style={{
            height: '110px',
            borderRadius: '16px',
            background: '#d83b8a',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '800',
            lineHeight: '1.3',
            boxShadow: '0 4px 14px rgba(216,59,138,0.2)'
          }}>
            무대<br />비하인드
          </div>

          <div style={{
            height: '110px',
            borderRadius: '16px',
            background: '#130d2e',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: '800',
            lineHeight: '1.3'
          }}>
            자체<br />콘텐츠
          </div>
        </div>

        {/* BLACKPINK 추천 대형 카드 (Frame 9.png) */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ fontSize: '12px', color: '#d83b8a', fontWeight: '700', marginBottom: '4px' }}>
            당신을 위한 추천
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.35' }}>
            BLACKPINK DEADLINE :<br />WORLD TOUR IN GOYANG
          </h2>

          <Link 
            href="/concert/c6"
            style={{
              display: 'block',
              height: '200px',
              borderRadius: '20px',
              background: `url("${getAssetPath('/img_fig/Frame 9.png')}") center/cover`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              bottom: '14px',
              left: '14px',
              background: 'rgba(0,0,0,0.7)',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: '800',
              padding: '6px 12px',
              borderRadius: '12px',
              backdropFilter: 'blur(6px)'
            }}>
              상세보기 ➔
            </div>
          </Link>
        </div>

        {/* 새로운 컨텐츠 - VR 콘텐츠 가로 스크롤 카드들 */}
        <div>
          <div style={{ fontSize: '12px', color: '#d83b8a', fontWeight: '700', marginBottom: '2px' }}>새로운 컨텐츠</div>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '14px' }}>VR 콘텐츠</h3>

          <div style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingBottom: '10px' }}>
            {[
              { id: 'c7', img: getAssetPath('/img_fig/Rectangle 34625933.png'), title: '에스파 FANMEETING' },
              { id: 'c9', img: getAssetPath('/img_fig/Rectangle 34625934.png'), title: '아이브 DIVE CONCERT' },
              { id: 'c1', img: getAssetPath('/img_fig/Rectangle 34625935.png'), title: 'RIIZE TOUR VR' }
            ].map(item => (
              <Link 
                key={item.id} 
                href={`/concert/${item.id}`}
                style={{ 
                  minWidth: '140px', 
                  width: '140px', 
                  height: '190px', 
                  borderRadius: '16px', 
                  background: `url("${item.img}") center/cover`,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '10px',
                  textDecoration: 'none'
                }}
              >
                <span style={{
                  background: 'rgba(0,0,0,0.75)',
                  color: '#ffffff',
                  fontSize: '10px',
                  fontWeight: '800',
                  padding: '3px 8px',
                  borderRadius: '8px',
                  backdropFilter: 'blur(4px)'
                }}>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
