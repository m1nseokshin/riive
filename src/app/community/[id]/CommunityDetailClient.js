'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  Play, 
  Heart, 
  Share2, 
  Sparkles, 
  Clock, 
  Eye, 
  Radio, 
  ShieldCheck,
  Star
} from 'lucide-react';
import { getAssetPath } from '../../../utils/assetHelper';
import { kpopDatabase } from '../../../data/kpopData';

export default function CommunityDetailClient({ params }) {
  const router = useRouter();
  const artistId = params?.id || 'riize';

  // Find artist in database
  const artist = kpopDatabase.find(a => a.id === artistId) || kpopDatabase[0];
  const mainConcert = artist.concerts[0] || {
    title: `${artist.name} VR CONCERT TOUR`,
    img: artist.avatar,
    tag: 'VR EXCLUSIVE'
  };

  const [activeTab, setActiveTab] = useState('홈');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const tabs = ['홈', '피드', '라이브', '팬 게시판', '굿즈 샵'];

  const notices = [
    `[공지] ${artist.name} 2026 WORLD TOUR VR LIVE 오픈 안내`,
    `[공지] ${artist.name} 공식 팬클럽 회원 전용 비하인드 선공개`,
    `[공지] BEBOP VR 독점 4K 60FPS 입체 음향 가이드`
  ];

  return (
    <div className="page-fade-in" style={{ background: '#f5f5f7', minHeight: '100%', paddingBottom: '80px', color: '#111111' }}>
      
      {/* 1. 상단 백버튼 & 공유 헤더 */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(245, 245, 247, 0.95)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        padding: '16px 20px 12px'
      }}>
        <button 
          onClick={() => router.back()}
          style={{
            background: '#ffffff',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}
        >
          <ChevronLeft size={22} color="#111111" />
        </button>

        <span style={{ fontSize: '16px', fontWeight: '800', color: '#111111' }}>
          {artist.name} 커뮤니티
        </span>

        <div style={{ width: '38px', height: '38px' }} />
      </div>

      {/* 2. 대형 히어로 포스터 이미지 (핵심 요구사항) */}
      <div style={{ padding: '0 20px', marginTop: '8px', marginBottom: '20px' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '340px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
          background: '#000000'
        }}>
          <img 
            src={mainConcert.img} 
            alt={mainConcert.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />

          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'rgba(214, 33, 156, 0.9)',
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: '800',
            padding: '4px 12px',
            borderRadius: '12px',
            backdropFilter: 'blur(6px)'
          }}>
            {mainConcert.tag || 'VR 4K EXCLUSIVE'}
          </div>

          {isPlaying && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.85)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              zIndex: 20
            }}>
              <Radio size={48} color="#d6219c" className="page-fade-in" />
              <p style={{ marginTop: '14px', fontSize: '15px', fontWeight: '700' }}>
                {artist.name} VR 스트리밍 연결 중...
              </p>
              <button 
                onClick={() => setIsPlaying(false)}
                style={{
                  marginTop: '16px',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: '#ffffff',
                  padding: '6px 16px',
                  borderRadius: '16px',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                닫기
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. 재생하기 & 즐겨찾기 2개 ROW 버튼 정렬 (핵심 요구사항) */}
      <div style={{ padding: '0 20px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={() => setIsPlaying(true)}
            style={{
              flex: 2,
              height: '54px',
              background: '#000000',
              color: '#ffffff',
              border: 'none',
              borderRadius: '16px',
              fontSize: '16px',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 6px 18px rgba(0,0,0,0.2)'
            }}
          >
            <Play size={20} fill="#ffffff" />
            재생하기
          </button>

          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            style={{
              flex: 1,
              height: '54px',
              background: isFavorite ? '#fdf0f7' : '#ffffff',
              color: isFavorite ? '#d6219c' : '#111111',
              border: isFavorite ? '1.5px solid #d6219c' : '1.5px solid #e0e0e0',
              borderRadius: '16px',
              fontSize: '15px',
              fontWeight: '800',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease'
            }}
          >
            <Heart size={20} fill={isFavorite ? '#d6219c' : 'none'} color={isFavorite ? '#d6219c' : '#111111'} />
            {isFavorite ? '보관됨' : '즐겨찾기'}
          </button>
        </div>
      </div>

      {/* 4. 하단 작게 설명 및 스펙 (핵심 요구사항) */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        
        {/* 타이틀 및 소속사 레벨 */}
        <div style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '18px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <img 
              src={artist.avatar} 
              alt={artist.name} 
              style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <span style={{ fontSize: '15px', fontWeight: '800', color: '#111111' }}>{artist.name}</span>
              <span style={{ fontSize: '12px', color: '#888888', marginLeft: '6px' }}>{artist.agency}</span>
            </div>
          </div>
          <p style={{ fontSize: '13px', color: '#555555', lineHeight: '1.5', margin: 0 }}>
            {mainConcert.title} - BEBOP 전용 360° VR 무대 실황 및 팬 전용 비하인드 독점 라이브 스트리밍
          </p>
        </div>

        {/* 서브 탭 메뉴 */}
        <div style={{ 
          display: 'flex', 
          gap: '16px',
          overflowX: 'auto',
          borderBottom: '1px solid #e0e0e0',
          paddingBottom: '8px'
        }}>
          {tabs.map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                fontSize: '14px',
                fontWeight: activeTab === tab ? '800' : '500',
                color: activeTab === tab ? '#d6219c' : '#888888',
                borderBottom: activeTab === tab ? '2px solid #d6219c' : 'none',
                paddingBottom: '6px',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* 공지사항 목록 */}
        <div style={{ marginBottom: '8px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '10px', color: '#111111' }}>
            공지사항
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {notices.map((notice, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#333333',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                {notice}
              </div>
            ))}
          </div>
        </div>

        {/* 콘서트 관련 전체 목록 */}
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: '800', marginBottom: '10px', color: '#111111' }}>
            {artist.name} VR 콘텐츠
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {artist.concerts.map((c) => (
              <Link 
                key={c.id}
                href={`/concert/${c.id}`}
                style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center',
                  background: '#ffffff',
                  padding: '10px',
                  borderRadius: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <img 
                  src={c.img} 
                  alt={c.title} 
                  style={{ width: '84px', height: '56px', borderRadius: '10px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#111' }}>
                    {c.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#d6219c', fontWeight: '700', marginTop: '3px' }}>
                    {c.tag || 'EXCLUSIVE'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
