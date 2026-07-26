'use client';

import { 
  Glasses, 
  Headphones, 
  Globe, 
  Volume2, 
  Gamepad2, 
  RotateCw, 
  ChevronRight, 
  User
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div style={{ padding: '0 20px 24px', background: '#f4f4f4', minHeight: '100%', color: '#111111' }}>
      <div className="screen-header">
        <h1 className="screen-title">설정</h1>
      </div>

      {/* 1. 사용자 프로필 카드 (노드 285:1270) */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '32px',
          padding: '10px 0'
        }}
      >
        {/* 프로필 이미지 원형 & 링 (노드 285:1272) */}
        <div style={{
          width: '108px',
          height: '108px',
          borderRadius: '50%',
          padding: '4px',
          background: '#000000',
          border: '4px solid #fbfafc',
          boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop" 
            alt="김서연 프로필" 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '23px', fontWeight: '800', color: '#0c0a2a' }}>김서연</div>
        </div>

        {/* 프로필 편집 핑크 버튼 (노드 285:1276) */}
        <button 
          style={{
            background: '#d6219c',
            border: 'none',
            color: '#ffffff',
            padding: '8px 24px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(214,33,156,0.3)'
          }}
        >
          프로필 편집
        </button>
      </div>

      {/* 2. 일반 설정 그룹 (노드 285:1292) */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '13px', color: '#d6219c', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', paddingLeft: '8px' }}>
          일반 설정
        </h2>
        
        <div style={{
          background: '#ffffff',
          borderRadius: '22px',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '6px 6px 12px rgba(0,0,0,0.06)',
          overflow: 'hidden'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '16px 20px', 
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Globe size={20} color="rgba(0,0,0,0.7)" />
              <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(0,0,0,0.85)' }}>언어 설정</span>
            </div>
            <ChevronRight size={16} color="rgba(0,0,0,0.4)" />
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '16px 20px',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Volume2 size={20} color="rgba(0,0,0,0.7)" />
              <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(0,0,0,0.85)' }}>오디오 설정</span>
            </div>
            <ChevronRight size={16} color="rgba(0,0,0,0.4)" />
          </div>
        </div>
      </div>

      {/* 3. VR 설정 그룹 (노드 285:1159) */}
      <div>
        <h2 style={{ fontSize: '13px', color: '#d6219c', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px', paddingLeft: '8px' }}>
          VR 설정
        </h2>

        <div style={{
          background: '#ffffff',
          borderRadius: '22px',
          border: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '6px 6px 12px rgba(0,0,0,0.06)',
          overflow: 'hidden'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '16px 20px', 
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Glasses size={20} color="rgba(0,0,0,0.7)" />
              <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(0,0,0,0.85)' }}>장치 관리</span>
            </div>
            <ChevronRight size={16} color="rgba(0,0,0,0.4)" />
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '16px 20px', 
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Headphones size={20} color="rgba(0,0,0,0.7)" />
              <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(0,0,0,0.85)' }}>VR 기기 연결</span>
            </div>
            <ChevronRight size={16} color="rgba(0,0,0,0.4)" />
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '16px 20px', 
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Gamepad2 size={20} color="rgba(0,0,0,0.7)" />
              <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(0,0,0,0.85)' }}>컨트롤러 설정</span>
            </div>
            <ChevronRight size={16} color="rgba(0,0,0,0.4)" />
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '16px 20px',
            cursor: 'pointer'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <RotateCw size={20} color="rgba(0,0,0,0.7)" />
              <span style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(0,0,0,0.85)' }}>자이로스코프</span>
            </div>
            <ChevronRight size={16} color="rgba(0,0,0,0.4)" />
          </div>
        </div>
      </div>
    </div>
  );
}
