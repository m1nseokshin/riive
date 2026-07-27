import './globals.css';
import Navigation from '../components/Navigation';
import StatusBar from '../components/StatusBar';
import OnboardingOverlay from '../components/OnboardingOverlay';

export const metadata = {
  title: 'BEBOP - VR 공연 및 아티스트 커뮤니티',
  description: 'Next.js로 구현된 피그마 BEBOP 전주기 프로젝트 6개 화면',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="app-wrapper">
          <OnboardingOverlay />
          <StatusBar />
          <div className="content-area">
            {children}
          </div>
          <Navigation />
        </div>
      </body>
    </html>
  );
}
