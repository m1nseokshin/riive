'use client';

import { getAssetPath } from '../../utils/assetHelper';

export default function LibraryPage() {
  const historyItems = [
    {
      id: 1,
      title: '2024 RIIZE FAN-CON RIIZING DAY in SEOUL',
      progress: '70%',
      img: getAssetPath('/img_fig/Rectangle 34625922.png')
    },
    {
      id: 2,
      title: '2026 LE SSERAFIM TOUR : PUREFLOW',
      progress: '30%',
      img: getAssetPath('/img_fig/Rectangle 34625926.png')
    }
  ];

  const favoriteItems = [
    {
      id: 1,
      title: '2025 실리카겔 단독공연 Syn.THE.Size X',
      img: getAssetPath('/img_fig/Rectangle 34625922-1.png')
    },
    {
      id: 2,
      title: 'NewJeans Fan Meeting Bunnies Camp 2024 Tokyo Dome',
      img: getAssetPath('/img_fig/Group 2147237884.png')
    },
    {
      id: 3,
      title: 'MY CLASSMaeTE aespa JAPAN FANMEETING 2026',
      img: getAssetPath('/img_fig/N7F1bGQkUJ3ijj7Pjsq3rS56RZ9goziRyxiv0MLoMojKygM3N9gACNpOHdtiIEmwFL5OmeeQz1LYpDzis6ZmXGfq-ti_e3GV5vi7Aq1ibUw4lLa-pZAsXl-z3xD_ICn0PWOZSmk1yD0CryPnVPCYQg.webp')
    },
    {
      id: 4,
      title: '2026 LE SSERAFIM TOUR : PUREFLOW',
      img: getAssetPath('/img_fig/ab67706c0000d72c3343f0ba7cc6027a34c08682.webp')
    }
  ];

  return (
    <div style={{ padding: '0 20px 24px', background: '#f5f5f7', minHeight: '100%', color: '#111111' }}>
      <div className="screen-header">
        <h1 className="screen-title">라이브러리</h1>
      </div>

      {/* 1. 시청 기록 */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#111111' }}>시청 기록</h2>
          <span style={{ fontSize: '16px', color: '#666666' }}>›</span>
        </div>

        <div style={{ display: 'flex', gap: '14px', overflowX: 'auto' }}>
          {historyItems.map((item) => (
            <div key={item.id} style={{ minWidth: '170px', width: '170px' }}>
              <div style={{ 
                height: '100px', 
                borderRadius: '14px', 
                background: `#000 url("${item.img}") center/cover`, 
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '8px'
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
                  <div style={{ width: item.progress, height: '100%', background: '#d83b8a' }}></div>
                </div>
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#333333', lineHeight: '1.3' }}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 즐겨찾기 콘텐츠 그리드 */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#111111' }}>즐겨찾기 콘텐츠</h2>
          <span style={{ fontSize: '16px', color: '#666666' }}>›</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {favoriteItems.map((item) => (
            <div key={item.id}>
              <div style={{ 
                height: '190px', 
                borderRadius: '16px', 
                background: `url("${item.img}") center/cover`, 
                position: 'relative',
                marginBottom: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d83b8a',
                  fontSize: '13px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}>
                  ★
                </div>
              </div>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#333333', lineHeight: '1.35' }}>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
