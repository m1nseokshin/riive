'use client';

import { useState } from 'react';
import Link from 'next/link';
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

  return (
    <div style={{ color: '#111111', background: '#f5f5f7', minHeight: '100%' }}>
      {/* 1. 상단 다크 콘서트 비주얼 헤더 */}
      <div 
        style={{
          position: 'relative',
          height: '420px',
          background: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.85) 100%), url("${getAssetPath('/img_fig/16082932_1938228_1453.jpg')}") center/cover`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '0 24px 32px',
          textAlign: 'center'
        }}
      >
        {/* RIIZE 피그마 원본 로고 이미지 (image 2.png) */}
        <div style={{ marginBottom: '12px' }}>
          <img 
            src={getAssetPath('/img_fig/image 2.png')} 
            alt="RIIZE" 
            style={{ width: '110px', height: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* 콘서트 제목 */}
        <h2 style={{ 
          fontSize: '15px', 
          fontWeight: '700', 
          color: '#ffffff', 
          lineHeight: '1.3',
          marginBottom: '18px',
          opacity: 0.95
        }}>
          2025 RIIZE CONCERT TOUR<br />RIIZING LOUD in SEOUL
        </h2>

        {/* 핑크 시청하기 버튼 */}
        <Link 
          href="/community/riize"
          style={{
            background: '#d83b8a',
            color: '#ffffff',
            border: 'none',
            padding: '12px 36px',
            borderRadius: '24px',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(216,59,138,0.4)',
            marginBottom: '16px'
          }}
        >
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
            VR
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

      {/* 하단 라이트 섹션 내용 */}
      <div style={{ padding: '24px 20px 20px' }}>
        {/* 2. For You / Trends 인터랙티브 스위칭 탭 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', fontSize: '16px', fontWeight: '800' }}>
          <span 
            onClick={() => setActiveTab('forYou')}
            style={{ 
              color: activeTab === 'forYou' ? '#d83b8a' : '#999999', 
              borderBottom: activeTab === 'forYou' ? '2px solid #d83b8a' : 'none', 
              paddingBottom: '4px', 
              cursor: 'pointer' 
            }}
          >
            For You
          </span>
          <span 
            onClick={() => setActiveTab('trends')}
            style={{ 
              color: activeTab === 'trends' ? '#d83b8a' : '#999999', 
              borderBottom: activeTab === 'trends' ? '2px solid #d83b8a' : 'none', 
              paddingBottom: '4px', 
              cursor: 'pointer' 
            }}
          >
            Trends
          </span>
        </div>

        {/* 탭 내용 분기 */}
        {activeTab === 'forYou' ? (
          <>
            {/* 3. 이어보기 */}
            <div style={{ marginBottom: '28px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '14px', color: '#111111' }}>
                이어보기
              </h3>

              <Link 
                href="/library"
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                {/* 블랙 카드 썸네일 (Rectangle 34625922.png) & 핑크 프로그래스 바 */}
                <div style={{ 
                  width: '160px', 
                  height: '90px', 
                  borderRadius: '12px', 
                  background: `#0a0c10 url("${getAssetPath('/img_fig/Rectangle 34625922.png')}") center/cover`,
                  position: 'relative',
                  flexShrink: 0,
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    right: '10px',
                    height: '4px',
                    background: 'rgba(255,255,255,0.3)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ width: '70%', height: '100%', background: '#d83b8a' }}></div>
                  </div>
                </div>

                {/* 타이틀 및 아티스트 로고 라벨 (Rectangle 34625925.png) */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: '#111111', lineHeight: '1.3', marginBottom: '6px' }}>
                    2024 RIIZE FAN-CON<br />RIIZING DAY in SEOUL
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <img 
                      src={getAssetPath('/img_fig/Rectangle 34625925.png')} 
                      alt="RIIZE Logo" 
                      style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#666666' }}>RIIZE</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* 4. RIIZE의 다른 컨텐츠 (Rectangle 34625923.png) */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '14px', color: '#111111' }}>
                RIIZE의 다른 컨텐츠
              </h3>

              <div style={{ 
                borderRadius: '16px', 
                overflow: 'hidden', 
                height: '190px', 
                background: `url("${getAssetPath('/img_fig/Rectangle 34625923.png')}") center/cover`,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
              }}>
              </div>
            </div>
          </>
        ) : (
          /* Trends 탭 클릭 시 표시되는 트렌딩 K-POP 콘서트 리스트 */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#111111' }}>
              실시간 인기 K-POP VR 콘서트
            </h3>

            {trendItems.map((item) => (
              <div 
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center',
                  background: '#ffffff',
                  padding: '12px',
                  borderRadius: '16px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
                }}
              >
                <div style={{
                  width: '130px',
                  height: '80px',
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
                    background: '#d83b8a',
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
