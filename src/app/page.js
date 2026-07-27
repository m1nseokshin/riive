'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Play, 
  Sparkles, 
  Flame, 
  Calendar, 
  ChevronRight, 
  Eye, 
  Heart, 
  Star,
  Compass,
  Radio
} from 'lucide-react';
import { getAssetPath } from '../utils/assetHelper';

export default function Home() {
  const [activeTab, setActiveTab] = useState('forYou');

  const trendItems = [
    {
      id: 1,
      title: 'LE SSERAFIM TOUR : PUREFLOW IN SEOUL',
      artist: 'LE SSERAFIM',
      badge: 'HOT TREND',
      img: getAssetPath('/img_fig/Rectangle 34625926.png'),
      logo: getAssetPath('/img_fig/ab67706c0000d72c3343f0ba7cc6027a34c08682.webp')
    },
    {
      id: 2,
      title: 'NewJeans Fan Meeting Bunnies Camp 2024 Tokyo Dome',
      artist: 'NewJeans',
      badge: 'TOP 10',
      img: getAssetPath('/img_fig/Group 2147237884.png'),
      logo: getAssetPath('/img_fig/N7F1bGQkUJ3ijj7Pjsq3rS56RZ9goziRyxiv0MLoMojKygM3N9gACNpOHdtiIEmwFL5OmeeQz1LYpDzis6ZmXGfq-ti_e3GV5vi7Aq1ibUw4lLa-pZAsXl-z3xD_ICn0PWOZSmk1yD0CryPnVPCYQg.webp')
    },
    {
      id: 3,
      title: '2025 실리카겔 단독공연 Syn.THE.Size X',
      artist: 'Silica Gel',
      badge: 'LIVE',
      img: getAssetPath('/img_fig/Rectangle 34625922-1.png'),
      logo: getAssetPath('/img_fig/Rectangle 346259222.png')
    }
  ];

  const upcomingConcerts = [
    {
      id: 'up-1',
      artist: 'NewJeans',
      title: 'GET UP : IN THE VR WORLD',
      date: '2026.08.15 OPEN',
      img: getAssetPath('/img_fig/Rectangle 34625925.png'),
      dday: 'D-19'
    },
    {
      id: 'up-2',
      artist: 'aespa',
      title: 'SYNK : PARALLEL LINE VR',
      date: '2026.09.01 OPEN',
      img: getAssetPath('/img_fig/Rectangle 1954137010.png'),
      dday: 'D-36'
    },
    {
      id: 'up-3',
      artist: 'BLACKPINK',
      title: 'BORN PINK VR EXPERIENCE',
      date: '2026.10.12 OPEN',
      img: getAssetPath('/img_fig/Rectangle 1954137011.png'),
      dday: 'D-77'
    }
  ];

  const popularShorts = [
    {
      id: 'sh-1',
      title: 'RIIZE 성찬 & 원빈의 무대 뒤 1분 비하인드 톡!',
      views: '12.4만회',
      img: getAssetPath('/img_fig/Frame 15.png')
    },
    {
      id: 'sh-2',
      title: '르세라핌 김채원 솔로 댄스 챌린지 4K 60fps',
      views: '28.9만회',
      img: getAssetPath('/img_fig/Frame 56.png')
    },
    {
      id: 'sh-3',
      title: '뉴진스 민지 시점 VR 객석 대기실 직캠!',
      views: '45.1만회',
      img: getAssetPath('/img_fig/Frame 9.png')
    }
  ];

  return (
    <div style={{ color: '#111111', background: '#f5f5f7', minHeight: '100%', paddingBottom: '40px' }}>
      {/* 1. 상단 다크 콘서트 비주얼 히어로 헤더 */}
      <div 
        style={{
          position: 'relative',
          height: '460px',
          background: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%), url("${getAssetPath('/img_fig/16082932_1938228_1453.jpg')}") center 25%/cover`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '60px 24px 36px',
          textAlign: 'center'
        }}
      >
        {/* RIIZE 피그마 원본 로고 이미지 */}
        <div style={{ marginBottom: '14px', marginTop: 'auto' }}>
          <img 
            src={getAssetPath('/img_fig/image 2.png')} 
            alt="RIIZE" 
            style={{ width: '125px', height: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* 콘서트 제목 */}
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: '800', 
          color: '#ffffff', 
          lineHeight: '1.35',
          marginBottom: '18px',
          letterSpacing: '-0.3px'
        }}>
          2025 RIIZE CONCERT TOUR<br />RIIZING LOUD in SEOUL
        </h2>

        {/* 핑크 시청하기 버튼 */}
        <Link 
          href="/community/riize"
          style={{
            background: '#d6219c',
            color: '#ffffff',
            border: 'none',
            padding: '12px 38px',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: '800',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 6px 18px rgba(214,33,156,0.45)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Play size={16} fill="#ffffff" />
          시청하기
        </Link>

        {/* VR / K-POP 타원 칩 태그 */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: '700',
            padding: '4px 14px',
            borderRadius: '16px'
          }}>
            VR 360°
          </span>
          <span style={{
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: '700',
            padding: '4px 14px',
            borderRadius: '16px'
          }}>
            K-POP
          </span>
        </div>
      </div>

      {/* 하단 메인 바디 영역 */}
      <div style={{ padding: '24px 20px 0' }}>
        
        {/* 2. For You / Trends 스위칭 탭 */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '20px', fontSize: '17px', fontWeight: '800', borderBottom: '1px solid #e5e5ea', paddingBottom: '8px' }}>
          <span 
            onClick={() => setActiveTab('forYou')}
            style={{ 
              color: activeTab === 'forYou' ? '#d6219c' : '#8e8e93', 
              borderBottom: activeTab === 'forYou' ? '2.5px solid #d6219c' : '2.5px solid transparent', 
              paddingBottom: '8px', 
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            For You
          </span>
          <span 
            onClick={() => setActiveTab('trends')}
            style={{ 
              color: activeTab === 'trends' ? '#d6219c' : '#8e8e93', 
              borderBottom: activeTab === 'trends' ? '2.5px solid #d6219c' : '2.5px solid transparent', 
              paddingBottom: '8px', 
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Trends 🔥
          </span>
        </div>

        {/* 탭 내용 분기 */}
        {activeTab === 'forYou' ? (
          <>
            {/* 3. 이어보기 섹션 */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  이어보기
                </h3>
                <span style={{ fontSize: '12px', color: '#8e8e93', fontWeight: '600' }}>70% 시청 완료</span>
              </div>

              <Link 
                href="/library"
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  background: '#ffffff',
                  padding: '12px',
                  borderRadius: '18px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ 
                  width: '140px', 
                  height: '84px', 
                  borderRadius: '12px', 
                  background: `#0a0c10 url("${getAssetPath('/img_fig/Rectangle 34625922.png')}") center/cover`,
                  position: 'relative',
                  flexShrink: 0,
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    right: '8px',
                    height: '4px',
                    background: 'rgba(255,255,255,0.3)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ width: '70%', height: '100%', background: '#d6219c' }}></div>
                  </div>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: '#111111', lineHeight: '1.3', marginBottom: '6px' }}>
                    2024 RIIZE FAN-CON<br />RIIZING DAY in SEOUL
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img 
                      src={getAssetPath('/img_fig/Rectangle 34625925.png')} 
                      alt="RIIZE Logo" 
                      style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#666666' }}>RIIZE</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* 4. RIIZE 커뮤니티 특별 비하인드 피처 */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111' }}>
                  RIIZE 비하인드 무비
                </h3>
                <Link href="/community/riize" style={{ color: '#d6219c', fontSize: '13px', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  전체보기 <ChevronRight size={16} />
                </Link>
              </div>

              <div style={{ 
                borderRadius: '20px', 
                overflow: 'hidden', 
                height: '190px', 
                background: `url("${getAssetPath('/img_fig/Rectangle 34625923.png')}") center/cover`,
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '16px'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)'
                }} />

                <div style={{ position: 'relative', zIndex: 10, color: '#ffffff' }}>
                  <span style={{ background: '#d6219c', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: '800', marginBottom: '6px', display: 'inline-block' }}>
                    EXCLUSIVE
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: '800', lineHeight: '1.3' }}>
                    [비하인드] RIIZING DAY 백스테이지 밀착 인터뷰
                  </div>
                </div>
              </div>
            </div>

            {/* 5. 실시간 인기 숏폼/하이라이트 (신규 세로 스크롤 섹션) */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '14px', color: '#111111', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Flame size={18} color="#d6219c" fill="#d6219c" />
                VR 1분 모먼트 숏폼
              </h3>

              <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                {popularShorts.map((short) => (
                  <div 
                    key={short.id}
                    style={{
                      width: '130px',
                      flexShrink: 0,
                      background: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <div style={{
                      height: '170px',
                      background: `url("${short.img}") center/cover`,
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: '8px'
                    }}>
                      <span style={{
                        background: 'rgba(0,0,0,0.6)',
                        color: '#ffffff',
                        fontSize: '10px',
                        fontWeight: '700',
                        padding: '2px 6px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '3px'
                      }}>
                        <Eye size={10} /> {short.views}
                      </span>
                    </div>
                    <div style={{ padding: '10px', fontSize: '12px', fontWeight: '700', color: '#111111', lineHeight: '1.3' }}>
                      {short.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. 오픈 예정 라인업 가로 카드 (신규 섹션) */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={18} color="#d6219c" />
                  오픈 예정 VR 라인업
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {upcomingConcerts.map((up) => (
                  <div 
                    key={up.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      background: '#ffffff',
                      padding: '12px 14px',
                      borderRadius: '16px',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                    }}
                  >
                    <div style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '14px',
                      background: `url("${up.img}") center/cover`,
                      flexShrink: 0
                    }} />

                    <div style={{ flex: 1 }}>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: '#d6219c', marginBottom: '2px', display: 'block' }}>
                        {up.artist}
                      </span>
                      <div style={{ fontSize: '14px', fontWeight: '800', color: '#111111', marginBottom: '4px' }}>
                        {up.title}
                      </div>
                      <div style={{ fontSize: '12px', color: '#8e8e93', fontWeight: '600' }}>
                        {up.date}
                      </div>
                    </div>

                    <span style={{
                      background: '#f0f0f5',
                      color: '#111111',
                      fontSize: '12px',
                      fontWeight: '800',
                      padding: '6px 12px',
                      borderRadius: '12px'
                    }}>
                      {up.dday}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Trends 탭 클릭 시 표시되는 실시간 인기 리스트 */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111' }}>
              실시간 인기 K-POP VR 차트 랭킹
            </h3>

            {trendItems.map((item, idx) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center',
                  background: '#ffffff',
                  padding: '14px',
                  borderRadius: '18px',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#d6219c', width: '20px', textAlign: 'center' }}>
                  {idx + 1}
                </div>

                <div style={{
                  width: '120px',
                  height: '76px',
                  borderRadius: '12px',
                  background: `url("${item.img}") center/cover`,
                  position: 'relative',
                  flexShrink: 0,
                  overflow: 'hidden'
                }}>
                  <span style={{
                    position: 'absolute',
                    top: '6px',
                    left: '6px',
                    background: '#d6219c',
                    color: '#ffffff',
                    fontSize: '9px',
                    fontWeight: '800',
                    padding: '2px 6px',
                    borderRadius: '8px'
                  }}>
                    {item.badge}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#111111', lineHeight: '1.35', marginBottom: '6px' }}>
                    {item.title}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img 
                      src={item.logo} 
                      alt={item.artist} 
                      style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#666666' }}>{item.artist}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
