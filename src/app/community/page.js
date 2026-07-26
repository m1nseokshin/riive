'use client';

import Link from 'next/link';
import { getAssetPath } from '../../utils/assetHelper';

export default function CommunityPage() {
  const artists = [
    { id: 'riize', name: 'RIIZE', img: getAssetPath('/img_fig/Rectangle 1954137010.png') },
    { id: 'cortis', name: 'CORTIS', img: getAssetPath('/img_fig/Rectangle 1954137011.png') },
    { id: 'ive', name: 'IVE', img: getAssetPath('/img_fig/Rectangle 1954137012.png') },
  ];

  return (
    <div style={{ padding: '0 20px 24px', background: '#f5f5f7', minHeight: '100%', color: '#111111' }}>
      <div className="screen-header">
        <h1 className="screen-title">커뮤니티</h1>
      </div>

      {/* 1. 사각형 아티스트 아이콘 & 플러스 추가 버튼 */}
      <div style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
        {artists.map((artist) => (
          <Link 
            key={artist.id}
            href={`/community/${artist.id}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '16px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <img src={artist.img} alt={artist.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#555555' }}>
              {artist.name}
            </span>
          </Link>
        ))}

        {/* 플러스 원형 추가하기 */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #eeeeee',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            color: '#d83b8a',
            fontWeight: '300'
          }}>
            +
          </div>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#777777' }}>추가하기</span>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e5e5e5', margin: '20px 0 24px' }}></div>

      {/* 2. 아티스트의 새로운 소식 카드 (Frame 56.png) */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ fontSize: '12px', color: '#d83b8a', fontWeight: '700', marginBottom: '4px' }}>
          당신을 위한 추천
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>
          아티스트의 새로운 소식
        </h2>

        <div 
          style={{
            height: '240px',
            borderRadius: '20px',
            background: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%), url("${getAssetPath('/img_fig/Frame 56.png')}") center/cover`,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
          }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: '800', lineHeight: '1.35', color: '#ffffff', marginBottom: '18px' }}>
            2026 CORTIS TOUR<br />PUT YOUR PHONE DOWN<br />VR 콘서트 출시
          </h3>

          <button style={{
            background: '#d83b8a',
            color: '#ffffff',
            border: 'none',
            padding: '10px 32px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer'
          }}>
            시청하기
          </button>
        </div>
      </div>

      {/* 3. 하단 세컨드 굿즈 샵 카드 (Frame 15.png) */}
      <div>
        <div 
          style={{
            height: '180px',
            borderRadius: '20px',
            background: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%), url("${getAssetPath('/img_fig/Frame 15.png')}") center/cover`,
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#ffffff', lineHeight: '1.35' }}>
            IVE 미니브&KT콜라보레이션<br />미니브 미니 포터블 보조배터리 판매
          </h3>
        </div>
      </div>
    </div>
  );
}
