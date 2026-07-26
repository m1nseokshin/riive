import { getAssetPath } from '../utils/assetHelper';

// K-POP 아이돌 및 콘서트 데이터베이스
export const kpopDatabase = [
  {
    id: 'riize',
    name: 'RIIZE',
    engName: 'RIIZE',
    agency: 'SM Entertainment',
    category: 'K-POP',
    avatar: getAssetPath('/img_fig/Rectangle 1954137010.png'),
    concerts: [
      { id: 'c1', title: '2025 RIIZE CONCERT TOUR RIIZING LOUD in SEOUL', img: getAssetPath('/img_fig/16082932_1938228_1453.jpg'), tag: 'VR 4K' },
      { id: 'c2', title: '2024 RIIZE FAN-CON RIIZING DAY in SEOUL', img: getAssetPath('/img_fig/Rectangle 34625922.png'), tag: 'FAN-CON' },
      { id: 'c3', title: 'CH. RIIZE : ON AIR Stage', img: getAssetPath('/img_fig/Rectangle 34625923.png'), tag: 'BEHIND' }
    ]
  },
  {
    id: 'lesserafim',
    name: '르세라핌',
    engName: 'LE SSERAFIM',
    agency: 'SOURCE MUSIC',
    category: 'K-POP',
    avatar: getAssetPath('/img_fig/ab67706c0000d72c3343f0ba7cc6027a34c08682.webp'),
    concerts: [
      { id: 'c4', title: '2026 LE SSERAFIM TOUR : PUREFLOW IN SEOUL', img: getAssetPath('/img_fig/Rectangle 34625926.png'), tag: 'WORLD TOUR' }
    ]
  },
  {
    id: 'newjeans',
    name: '뉴진스',
    engName: 'NewJeans',
    agency: 'ADOR',
    category: 'K-POP',
    avatar: getAssetPath('/img_fig/N7F1bGQkUJ3ijj7Pjsq3rS56RZ9goziRyxiv0MLoMojKygM3N9gACNpOHdtiIEmwFL5OmeeQz1LYpDzis6ZmXGfq-ti_e3GV5vi7Aq1ibUw4lLa-pZAsXl-z3xD_ICn0PWOZSmk1yD0CryPnVPCYQg.webp'),
    concerts: [
      { id: 'c5', title: 'NewJeans Fan Meeting Bunnies Camp 2024 Tokyo Dome', img: getAssetPath('/img_fig/Group 2147237884.png'), tag: 'TOKYO DOME' }
    ]
  },
  {
    id: 'blackpink',
    name: '블랙핑크',
    engName: 'BLACKPINK',
    agency: 'YG Entertainment',
    category: 'K-POP',
    avatar: getAssetPath('/img_fig/Frame 9.png'),
    concerts: [
      { id: 'c6', title: 'BLACKPINK DEADLINE : WORLD TOUR IN GOYANG', img: getAssetPath('/img_fig/Frame 9.png'), tag: 'DEADLINE' }
    ]
  },
  {
    id: 'aespa',
    name: '에스파',
    engName: 'aespa',
    agency: 'SM Entertainment',
    category: 'K-POP',
    avatar: getAssetPath('/img_fig/Rectangle 34625933.png'),
    concerts: [
      { id: 'c7', title: 'MY CLASSMaeTE aespa JAPAN FANMEETING 2026', img: getAssetPath('/img_fig/Rectangle 34625933.png'), tag: 'JAPAN TOUR' }
    ]
  },
  {
    id: 'silicagel',
    name: '실리카겔',
    engName: 'Silica Gel',
    agency: 'MAGIC STRAWBERRY SOUND',
    category: '밴드',
    avatar: getAssetPath('/img_fig/Rectangle 34625922-1.png'),
    concerts: [
      { id: 'c8', title: '2025 실리카겔 단독공연 Syn.THE.Size X', img: getAssetPath('/img_fig/Rectangle 34625922-1.png'), tag: 'SOLO CONCERT' }
    ]
  },
  {
    id: 'ive',
    name: '아이브',
    engName: 'IVE',
    agency: 'STARSHIP',
    category: 'K-POP',
    avatar: getAssetPath('/img_fig/Rectangle 1954137012.png'),
    concerts: [
      { id: 'c9', title: '2026 IVE 4TH FAN CONCERT DIVE INTO IVE', img: getAssetPath('/img_fig/Rectangle 34625934.png'), tag: 'FAN CONCERT' }
    ]
  },
  {
    id: 'cortis',
    name: '콜티스',
    engName: 'CORTIS',
    agency: 'BEBOP MUSIC',
    category: 'K-POP',
    avatar: getAssetPath('/img_fig/Rectangle 1954137011.png'),
    concerts: [
      { id: 'c10', title: '2026 CORTIS TOUR PUT YOUR PHONE DOWN VR', img: getAssetPath('/img_fig/Frame 56.png'), tag: 'VR EXCLUSIVE' }
    ]
  }
];

// 초기 최근 검색어 목록
export const defaultRecentSearches = [
  '라이즈',
  '2025 RIIZE CONCERT',
  '르세라핌',
  '블랙핑크',
  'VR 콘서트'
];
