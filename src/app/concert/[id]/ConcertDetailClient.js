'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Play, 
  Heart, 
  Share2, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Radio, 
  Clock,
  Eye
} from 'lucide-react';
import { getAssetPath } from '../../../utils/assetHelper';
import { kpopDatabase } from '../../../data/kpopData';

export default function ConcertDetailClient({ params }) {
  const router = useRouter();
  const concertId = params?.id || 'c1';

  let targetConcert = null;
  let targetArtist = null;

  for (const idol of kpopDatabase) {
    const found = idol.concerts.find(c => c.id === concertId);
    if (found) {
      targetConcert = found;
      targetArtist = idol;
      break;
    }
  }

  if (!targetConcert) {
    targetArtist = kpopDatabase[0];
    targetConcert = targetArtist.concerts[0];
  }

  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="page-fade-in" style={{ background: '#f5f5f7', minHeight: '100%', color: '#111111', paddingBottom: '60px' }}>
      
      {/* 1. 상단 백버튼 & 공유 헤더 */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(245, 245, 247, 0.9)',
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
          <ArrowLeft size={20} color="#111111" />
        </button>

        <span style={{ fontSize: '15px', fontWeight: '800', color: '#111111' }}>
          상세 정보
        </span>

        <div style={{ width: '38px', height: '38px' }} />
      </div>

      {/* 2. 중앙 센터 1:1 이미지 에셋 히어로 프레임 (핵심 요구사항) */}
      <div style={{ padding: '0 20px', marginTop: '8px', marginBottom: '24px' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '320px',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
          background: '#000000'
        }}>
          <img 
            src={targetConcert.img} 
            alt={targetConcert.title}
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
            {targetConcert.tag || 'VR 4K EXCLUSIVE'}
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
                VR 스트리밍을 연결하는 중...
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

      {/* 3. 제목 & 아티스트 정보 */}
      <div style={{ padding: '0 20px', marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <img 
            src={targetArtist.avatar} 
            alt={targetArtist.name} 
            style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: '14px', fontWeight: '800', color: '#d6219c' }}>
            {targetArtist.name} ({targetArtist.engName})
          </span>
        </div>

        <h1 style={{ fontSize: '22px', fontWeight: '900', color: '#111111', lineHeight: '1.35', marginBottom: '10px' }}>
          {targetConcert.title}
        </h1>

        <p style={{ fontSize: '13px', color: '#666666', lineHeight: '1.5' }}>
          BEBOP 전용 360도 공간 음향 VR 초고화질 콘서트 실황
        </p>
      </div>

      {/* 4. 재생하기 & 즐겨찾기 2개 ROW 버튼 배치 (핵심 요구사항) */}
      <div style={{ padding: '0 20px', marginBottom: '32px' }}>
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

      {/* 5. 상세 설명 주르륵 배치 (핵심 요구사항) */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          background: '#ffffff',
          padding: '16px',
          borderRadius: '20px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fdf0f7', display: 'flex', alignItems: 'center', justify: 'center' }}>
              <Clock size={18} color="#d6219c" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#888', fontWeight: '600' }}>러닝타임</div>
              <div style={{ fontSize: '13px', color: '#111', fontWeight: '800' }}>124분 (전곡)</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fdf0f7', display: 'flex', alignItems: 'center', justify: 'center' }}>
              <Eye size={18} color="#d6219c" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#888', fontWeight: '600' }}>화질 스펙</div>
              <div style={{ fontSize: '13px', color: '#111', fontWeight: '800' }}>8K 60FPS 360°</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fdf0f7', display: 'flex', alignItems: 'center', justify: 'center' }}>
              <ShieldCheck size={18} color="#d6219c" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#888', fontWeight: '600' }}>음향 테크</div>
              <div style={{ fontSize: '13px', color: '#111', fontWeight: '800' }}>Dolby Atmos</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fdf0f7', display: 'flex', alignItems: 'center', justify: 'center' }}>
              <Sparkles size={18} color="#d6219c" />
            </div>
            <div>
              <div style={{ fontSize: '11px', color: '#888', fontWeight: '600' }}>기기 지원</div>
              <div style={{ fontSize: '13px', color: '#111', fontWeight: '800' }}>모바일 / VR 헤드셋</div>
            </div>
          </div>
        </div>

        <div style={{
          background: '#ffffff',
          padding: '20px',
          borderRadius: '20px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
        }}>
          <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '10px', color: '#111111' }}>
            콘텐츠 상세 소개
          </h3>
          <p style={{ fontSize: '14px', color: '#444444', lineHeight: '1.6', marginBottom: '14px' }}>
            {targetArtist.name}의 현장감을 최고 화질로 담아낸 가상 현실 콘서트 라이브 실황입니다.
            실제 무대 맨 앞줄 VIP 객석 시점에서 아티스트의 표정과 눈빛, 폭발적인 퍼포먼스를 손에 잡힐 듯 생생하게 체험할 수 있습니다.
          </p>
          <p style={{ fontSize: '14px', color: '#444444', lineHeight: '1.6' }}>
            공연장 특유의 공간 울림과 관객들의 환호 소리를 입체적으로 재현한 3D 입체 음향 엔진이 적용되어 있어, 헤드폰만 착용해도 콘서트 한가운데 들어와 있는 듯한 몰입감을 전합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
