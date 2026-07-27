'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetPath } from '../utils/assetHelper';

export default function OnboardingOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [step, setStep] = useState(0); // 0: Splash, 1: Onboarding 1, 2: Onboarding 2, 3: Onboarding 3, 4: Onboarding 4
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' | 'prev'

  // Touch Swipe Gesture Tracking
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Splash Timer (Strict 2.0 Seconds)
  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setSlideDirection('next');
        setStep(1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('bebop_onboarding_seen');
    if (hasSeen) {
      setShowOverlay(false);
    }
  }, []);

  const handleFinish = () => {
    setIsExiting(true);
    sessionStorage.setItem('bebop_onboarding_seen', 'true');
    setTimeout(() => {
      setShowOverlay(false);
    }, 400);
  };

  const handleNext = () => {
    if (step < 4) {
      setSlideDirection('next');
      setStep(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setSlideDirection('prev');
      setStep(prev => prev - 1);
    }
  };

  // Handle Mobile Touch Swiping (좌우 스와이프 제스처)
  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && step > 0) {
      handleNext();
    } else if (isRightSwipe && step > 1) {
      handlePrev();
    }
  };

  if (!showOverlay) return null;

  return (
    <div 
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={isExiting ? 'onboarding-slide-down' : ''}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: '#f4f4f4',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none'
      }}
    >
      {/* -------------------- STEP 0: SPLASH (노드 285:3816) -------------------- */}
      {step === 0 && (
        <div 
          className="page-fade-in"
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 20px',
            background: '#f4f4f4'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {/* 완성본 원본 통합 스플래시 로고 에셋 (Group 2147237872.png) */}
            <img 
              src={getAssetPath('/img_fig/Group 2147237872.png')} 
              alt="RIVVE Splash Logo" 
              style={{ width: '210px', height: 'auto', objectFit: 'contain' }}
            />
            
            <p style={{ fontSize: '16px', fontWeight: '600', color: '#616161', letterSpacing: '-0.3px', marginTop: '2px' }}>
              공연을 이어, 순간을 잇다.
            </p>
          </div>
        </div>
      )}

      {/* -------------------- STEP 1 ~ 4: ONBOARDING SLIDES -------------------- */}
      {step > 0 && (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          
          {/* Top Bar (SKIP Button) */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '16px 20px 0',
            zIndex: 30
          }}>
            <button 
              onClick={handleFinish}
              style={{
                background: 'none',
                border: 'none',
                color: '#bebebe',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                letterSpacing: '0.5px'
              }}
            >
              SKIP
            </button>
          </div>

          {/* 50vh 좌우 중앙 정렬 화살표 이동 버튼 (Step 1~3에서 노출) */}
          {step < 4 && (
            <>
              {step > 1 && (
                <button 
                  onClick={handlePrev}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid #e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#111111',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                    zIndex: 40
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              <button 
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#d6219c',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#ffffff',
                  boxShadow: '0 6px 16px rgba(214,33,156,0.4)',
                  zIndex: 40
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Slide Content Frame with Directional Smooth Animation */}
          <div key={step} className={slideDirection === 'next' ? 'slide-next' : 'slide-prev'} style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
            
            {/* ---------------- SLIDE 1: 공연 속으로 직접 들어가 보세요 ---------------- */}
            {step === 1 && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                <div style={{ padding: '10px 24px 0', zIndex: 10 }}>
                  <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#000000', lineHeight: '1.3', marginBottom: '12px' }}>
                    공연 속으로<br />
                    <span style={{ color: '#d6219c' }}>직접</span> 들어가 보세요.
                  </h1>
                  <p style={{ fontSize: '15px', color: '#505050', lineHeight: '1.5', fontWeight: '500' }}>
                    VR로 더욱 생생하게,<br />
                    공연장의 분위기를 그대로 느껴보세요.
                  </p>
                </div>

                {/* 컷아웃 인물 & 메탈릭 오브제 배치 */}
                <div style={{ position: 'relative', flex: 1, width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* 사람 뒤 강렬한 레드/핑크 글로우 조명 효과 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '320px',
                    height: '320px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(235, 10, 110, 0.45) 0%, rgba(214, 33, 156, 0.25) 50%, rgba(244, 244, 244, 0) 75%)',
                    filter: 'blur(12px)',
                    zIndex: 1
                  }} />

                  <img 
                    src={getAssetPath(`/img_fig/${encodeURIComponent('Woman_walking_forward_extended_hand_202607270327 1.png')}`)}
                    alt="Onboarding Slide 1 VR" 
                    style={{
                      width: '100%',
                      height: '92%',
                      objectFit: 'contain',
                      objectPosition: 'center bottom',
                      position: 'absolute',
                      bottom: 0,
                      zIndex: 2
                    }}
                  />
                </div>
              </div>
            )}

            {/* ---------------- SLIDE 2: 좋아하는 아티스트를 더 가까이 만나보세요 ---------------- */}
            {step === 2 && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                <div style={{ padding: '10px 24px 0', zIndex: 10 }}>
                  <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#000000', lineHeight: '1.3', marginBottom: '12px' }}>
                    좋아하는 아티스트를<br />
                    <span style={{ color: '#d6219c' }}>더 가까이</span> 만나보세요.
                  </h1>
                  <p style={{ fontSize: '15px', color: '#505050', lineHeight: '1.5', fontWeight: '500' }}>
                    공연은 물론, 비하인드와 다양한 콘텐츠까지<br />
                    한곳에서 즐길 수 있어요.
                  </p>
                </div>

                <div style={{ position: 'relative', flex: 1, width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '320px',
                    height: '320px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(235, 10, 110, 0.45) 0%, rgba(214, 33, 156, 0.25) 50%, rgba(244, 244, 244, 0) 75%)',
                    filter: 'blur(12px)',
                    zIndex: 1
                  }} />

                  <img 
                    src={getAssetPath(`/img_fig/${encodeURIComponent('Woman_reaching_toward_figures_2K_202607270455 1.png')}`)}
                    alt="Onboarding Slide 2 Artist" 
                    style={{
                      width: '100%',
                      height: '92%',
                      objectFit: 'contain',
                      objectPosition: 'center bottom',
                      position: 'absolute',
                      bottom: 0,
                      zIndex: 2
                    }}
                  />
                </div>
              </div>
            )}

            {/* ---------------- SLIDE 3: 함께 즐기면 더 특별해져요 ---------------- */}
            {step === 3 && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                <div style={{ padding: '10px 24px 0', zIndex: 10 }}>
                  <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#000000', lineHeight: '1.3', marginBottom: '12px' }}>
                    <span style={{ color: '#d6219c' }}>함께</span> 즐기면<br />
                    더 특별해져요.
                  </h1>
                  <p style={{ fontSize: '15px', color: '#505050', lineHeight: '1.5', fontWeight: '500' }}>
                    팬들과 소통하고,<br />
                    새로운 소식과 이벤트도 놓치지 마세요.
                  </p>
                </div>

                <div style={{ position: 'relative', flex: 1, width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    width: '320px',
                    height: '320px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(235, 10, 110, 0.45) 0%, rgba(214, 33, 156, 0.25) 50%, rgba(244, 244, 244, 0) 75%)',
                    filter: 'blur(12px)',
                    zIndex: 1
                  }} />

                  <img 
                    src={getAssetPath('/img_fig/image 1208091747.png')}
                    alt="Onboarding Slide 3 Fan" 
                    style={{
                      width: '100%',
                      height: '92%',
                      objectFit: 'contain',
                      objectPosition: 'center bottom',
                      position: 'absolute',
                      bottom: 0,
                      zIndex: 2
                    }}
                  />
                </div>
              </div>
            )}

            {/* ---------------- SLIDE 4: 공연의 모든 순간을 이어보세요 ---------------- */}
            {step === 4 && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 24px 24px', position: 'relative' }}>
                <div style={{ zIndex: 10 }}>
                  <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#000000', lineHeight: '1.3', marginBottom: '12px' }}>
                    공연의 모든 <span style={{ color: '#d6219c' }}>순간</span>을<br />
                    이어보세요.
                  </h1>
                  <p style={{ fontSize: '15px', color: '#505050', lineHeight: '1.5', fontWeight: '500' }}>
                    언제 어디서나,<br />
                    RIVVE와 함께 새로운 공연을 시작해 보세요.
                  </p>
                </div>

                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '340px',
                    height: '350px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(235, 10, 110, 0.45) 0%, rgba(214, 33, 156, 0.25) 50%, rgba(244, 244, 244, 0) 75%)',
                    filter: 'blur(12px)',
                    zIndex: 1
                  }} />

                  <img 
                    src={getAssetPath('/img_fig/image 1208091748.png')}
                    alt="Onboarding Slide 4 RIVVE" 
                    style={{
                      width: '100%',
                      height: '90%',
                      objectFit: 'contain',
                      objectPosition: 'center bottom',
                      position: 'absolute',
                      bottom: 0,
                      zIndex: 2
                    }}
                  />
                </div>

                {/* 하단 시작하기 & Apple 로그인 CTA 버튼 복원 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '10px', zIndex: 20 }}>
                  <button 
                    onClick={handleFinish}
                    style={{
                      width: '100%',
                      height: '54px',
                      background: '#ffffff',
                      border: '1.5px solid #000000',
                      borderRadius: '14px',
                      fontSize: '17px',
                      fontWeight: '700',
                      color: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
                    }}
                  >
                     Sign in with Apple
                  </button>

                  <button 
                    onClick={handleFinish}
                    style={{
                      width: '100%',
                      height: '54px',
                      background: '#000000',
                      border: 'none',
                      borderRadius: '14px',
                      fontSize: '17px',
                      fontWeight: '700',
                      color: '#ffffff',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
                    }}
                  >
                    시작하기
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* ---------------- BOTTOM PAGINATION CENTERED DOTS (스와이프 동그라미 중앙 정렬) ---------------- */}
          {step < 4 && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 0 24px',
              zIndex: 30
            }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    style={{
                      width: '9px',
                      height: '9px',
                      borderRadius: '50%',
                      background: step === i ? '#d6219c' : '#ffffff',
                      border: step === i ? 'none' : '1px solid #cccccc',
                      transition: 'all 0.25s ease'
                    }}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
