'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetPath } from '../utils/assetHelper';

export default function OnboardingOverlay() {
  const router = useRouter();
  const [showOverlay, setShowOverlay] = useState(true);
  const [step, setStep] = useState(0); // 0: Splash, 1: Slide 1, 2: Slide 2, 3: Slide 3, 4: Slide 4

  // Splash Screen timer (0.8s) -> auto transition to Slide 1
  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setStep(1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Check if onboarding already seen in session
  useEffect(() => {
    const hasSeen = sessionStorage.getItem('bebop_onboarding_seen');
    if (hasSeen) {
      setShowOverlay(false);
    }
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem('bebop_onboarding_seen', 'true');
    setShowOverlay(false);
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  if (!showOverlay) return null;

  return (
    <div 
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
        transition: 'opacity 0.4s ease, transform 0.4s ease'
      }}
    >
      {/* -------------------- STEP 0: SPLASH SCREEN (노드 285:3816) -------------------- */}
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
          {/* Logo & Headline */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src={getAssetPath('/img_fig/Rectangle 34625925.png')} 
                alt="Logo Symbol" 
                style={{ width: '48px', height: '48px', borderRadius: '12px', transform: 'rotate(15deg)' }}
              />
              <img 
                src={getAssetPath('/img_fig/image 2.png')} 
                alt="BEBOP Logo" 
                style={{ width: '130px', height: 'auto', filter: 'invert(1)' }}
              />
            </div>
            <p style={{ fontSize: '16px', fontWeight: '600', color: '#616161', letterSpacing: '-0.3px' }}>
              공연을 이어, 순간을 잇다.
            </p>
          </div>
        </div>
      )}

      {/* -------------------- ONBOARDING SLIDES (STEP 1 ~ 4) -------------------- */}
      {step > 0 && (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
          
          {/* Top Bar (SKIP Button) */}
          <div style={{
            display: 'flex',
            justify: 'space-between',
            alignItems: 'center',
            padding: '40px 24px 0',
            zIndex: 20
          }}>
            {/* Prev Button */}
            {step > 1 ? (
              <button 
                onClick={handlePrev}
                style={{
                  background: 'rgba(0,0,0,0.05)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#333'
                }}
              >
                <ChevronLeft size={20} />
              </button>
            ) : <div />}

            <button 
              onClick={handleFinish}
              style={{
                background: 'none',
                border: 'none',
                color: '#bebebe',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              SKIP
            </button>
          </div>

          {/* Slide Content Area with Smooth Animation */}
          <div className="page-fade-in" style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
            
            {/* SLIDE 1 (노드 285:3829) */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#111111', lineHeight: '1.3', marginBottom: '12px' }}>
                    좋아하는 아티스트를<br />
                    <span style={{ color: '#d6219c' }}>더 가까이</span> 만나보세요.
                  </h1>
                  <p style={{ fontSize: '15px', color: '#505050', lineHeight: '1.5' }}>
                    공연은 물론, 비하인드와 다양한 콘텐츠까지<br />
                    한곳에서 즐길 수 있어요.
                  </p>
                </div>

                {/* Hero Illustration Cards */}
                <div style={{ position: 'relative', height: '360px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={getAssetPath('/img_fig/16082932_1938228_1453.jpg')}
                    alt="Artist Concert" 
                    style={{
                      width: '260px',
                      height: '300px',
                      borderRadius: '24px',
                      objectFit: 'cover',
                      boxShadow: '0 20px 40px rgba(214, 33, 156, 0.25)',
                      transform: 'rotate(-4deg)'
                    }}
                  />
                  <img 
                    src={getAssetPath('/img_fig/Rectangle 34625923.png')}
                    alt="Stage Card" 
                    style={{
                      position: 'absolute',
                      width: '140px',
                      height: '180px',
                      borderRadius: '18px',
                      objectFit: 'cover',
                      bottom: '20px',
                      right: '10px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                      transform: 'rotate(8deg)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* SLIDE 2 (노드 285:3820) */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#111111', lineHeight: '1.3', marginBottom: '12px' }}>
                    공연 속으로<br />
                    <span style={{ color: '#d6219c' }}>직접</span> 들어가 보세요.
                  </h1>
                  <p style={{ fontSize: '15px', color: '#505050', lineHeight: '1.5' }}>
                    VR로 더욱 생생하게,<br />
                    공연장의 분위기를 그대로 느껴보세요.
                  </p>
                </div>

                {/* VR Graphics */}
                <div style={{ position: 'relative', height: '360px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={getAssetPath('/img_fig/Frame 56.png')}
                    alt="VR Concert" 
                    style={{
                      width: '280px',
                      height: '320px',
                      borderRadius: '24px',
                      objectFit: 'cover',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      transform: 'scale(1.05)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* SLIDE 3 (노드 285:3838) */}
            {step === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#111111', lineHeight: '1.3', marginBottom: '12px' }}>
                    <span style={{ color: '#d6219c' }}>함께</span> 즐기면<br />
                    더 특별해져요.
                  </h1>
                  <p style={{ fontSize: '15px', color: '#505050', lineHeight: '1.5' }}>
                    팬들과 소통하고,<br />
                    새로운 소식과 이벤트도 놓치지 마세요.
                  </p>
                </div>

                {/* Community Fan Cards */}
                <div style={{ position: 'relative', height: '360px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={getAssetPath('/img_fig/Frame 9.png')}
                    alt="Fan Community" 
                    style={{
                      width: '270px',
                      height: '290px',
                      borderRadius: '24px',
                      objectFit: 'cover',
                      boxShadow: '0 20px 40px rgba(214, 33, 156, 0.2)'
                    }}
                  />
                </div>
              </div>
            )}

            {/* SLIDE 4 (노드 285:3849) */}
            {step === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <div>
                  <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#111111', lineHeight: '1.3', marginBottom: '12px' }}>
                    공연의 모든 <span style={{ color: '#d6219c' }}>순간</span>을<br />
                    이어보세요.
                  </h1>
                  <p style={{ fontSize: '15px', color: '#505050', lineHeight: '1.5' }}>
                    언제 어디서나,<br />
                    BEBOP과 함께 새로운 공연을 시작해 보세요.
                  </p>
                </div>

                {/* Final CTA Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <button 
                    onClick={handleFinish}
                    style={{
                      width: '100%',
                      height: '52px',
                      background: '#ffffff',
                      border: '1px solid #111111',
                      borderRadius: '14px',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#111111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}
                  >
                     Sign in with Apple
                  </button>

                  <button 
                    onClick={handleFinish}
                    style={{
                      width: '100%',
                      height: '52px',
                      background: '#111111',
                      border: 'none',
                      borderRadius: '14px',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#ffffff',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
                    }}
                  >
                    시작하기
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Bar: Indicators & Left/Right Navigation Buttons */}
          {step < 4 && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 24px 36px',
              zIndex: 20
            }}>
              {/* Pagination Dots */}
              <div style={{ display: 'flex', gap: '6px' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    style={{
                      width: step === i ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: step === i ? '#d6219c' : '#e0e0e0',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              {/* Navigation Arrow Controls */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {step > 1 && (
                  <button 
                    onClick={handlePrev}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      border: '1px solid #e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#111111',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                    }}
                  >
                    <ChevronLeft size={22} />
                  </button>
                )}

                <button 
                  onClick={handleNext}
                  style={{
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
                    boxShadow: '0 4px 12px rgba(214,33,156,0.3)'
                  }}
                >
                  <ChevronRight size={22} />
                </button>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
