'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function CommunityDetailPage() {
  const [activeTab, setActiveTab] = useState('홈');

  const tabs = ['홈', '피드', '라이브', '팬 게시판', '굿즈 샵'];

  const notices = [
    "[공지] RIIZE 3RD ANNIVERSARY FANMEE ...",
    "[공지] RIIZE ‘Do your dance’ Mission EVE ...",
    "[공지] “CH. RIIZE : ON AIR” 예매 입장 주의사..."
  ];

  const vrContents = [
    { id: 1, img: '/img_fig/Frame 56.png', hasStar: true },
    { id: 2, img: '/img_fig/Rectangle 34625934.png', hasStar: true },
    { id: 3, img: '/img_fig/Rectangle 34625935.png', hasStar: false }
  ];

  return (
    <div className="page-fade-in" style={{ background: '#f5f5f7', minHeight: '100%', paddingBottom: '90px', color: '#111111' }}>
      {/* 1. 상단 아티스트 대형 히어로 비주얼 (피그마 285:1526 규격 1:1) */}
      <div style={{
        position: 'relative',
        height: '340px',
        width: '100%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(245,245,247,0.1) 60%, rgba(245,245,247,1) 100%), url("/img_fig/16082932_1938228_1453.jpg") center 15%/cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px 20px 16px'
      }}>
        {/* Top Header Controls: Back Button & Star Icon (피그마 285:1519) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', zIndex: 10 }}>
          <Link 
            href="/community" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: '#ffffff', 
              textDecoration: 'none' 
            }}
          >
            <ChevronLeft size={28} strokeWidth={2.5} color="#ffffff" />
          </Link>

          {/* 핑크 스타 뱃지 (Gradient+Border.png or SVG Badge) */}
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            cursor: 'pointer'
          }}>
            <span style={{ color: '#d83b8a', fontSize: '18px', lineHeight: 1 }}>★</span>
          </div>
        </div>

        {/* Center RIIZE Logo (image 2.png) */}
        <div style={{ textAlign: 'center', marginBottom: '24px', zIndex: 10 }}>
          <img 
            src="/img_fig/image 2.png" 
            alt="RIIZE" 
            style={{ 
              width: '120px', 
              height: 'auto', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'
            }}
          />
        </div>
      </div>

      {/* 2. 서브 탭 바 (홈, 피드, 라이브, 팬 게시판, 굿즈 샵) (피그마 285:65) */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        gap: '22px',
        padding: '0 20px 14px', 
        overflowX: 'auto',
        marginBottom: '24px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              fontSize: '16px',
              fontWeight: activeTab === tab ? '800' : '500',
              color: activeTab === tab ? '#d83b8a' : '#969696',
              borderBottom: activeTab === tab ? '2.5px solid #d83b8a' : '2.5px solid transparent',
              paddingBottom: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* 3. 공지사항 섹션 (피그마 285:1528) */}
      <div style={{ padding: '0 20px', marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '20px', 
          fontWeight: '800', 
          marginBottom: '14px', 
          color: '#000000',
          letterSpacing: '-0.3px'
        }}>
          공지사항
        </h2>

        {/* White Notice Card Container (피그마 285:73) */}
        <div style={{ 
          background: '#ffffff', 
          borderRadius: '16px', 
          padding: '16px 20px 12px', 
          boxShadow: '3px 4px 10px rgba(0, 0, 0, 0.05)',
          border: '1px solid #f0f0f0'
        }}>
          {notices.map((notice, idx) => (
            <div 
              key={idx} 
              style={{ 
                fontSize: '14px', 
                fontWeight: '600',
                color: '#111111',
                padding: '12px 0',
                borderBottom: idx !== notices.length - 1 ? '1px solid #f0f0f0' : 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {notice}
            </div>
          ))}
          
          <div style={{ 
            textAlign: 'right', 
            marginTop: '10px', 
            fontSize: '12px', 
            fontWeight: '600',
            color: '#a1a1a1', 
            cursor: 'pointer' 
          }}>
            더 보기
          </div>
        </div>
      </div>

      {/* 4. 추천 VR 콘텐츠 가로 스크롤 카드들 (피그마 285:1535) */}
      <div style={{ padding: '0 20px' }}>
        <h2 style={{ 
          fontSize: '20px', 
          fontWeight: '800', 
          marginBottom: '14px', 
          color: '#000000',
          letterSpacing: '-0.3px'
        }}>
          추천 VR 콘텐츠
        </h2>

        <div style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingBottom: '10px' }}>
          {vrContents.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                minWidth: '130px', 
                width: '130px', 
                height: '180px', 
                borderRadius: '16px', 
                background: `url("${item.img}") center/cover`,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
              }}
            >
              {item.hasStar && (
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d83b8a',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}>
                  ★
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
