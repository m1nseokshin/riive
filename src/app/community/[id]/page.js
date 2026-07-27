import CommunityDetailClient from './CommunityDetailClient';

export function generateStaticParams() {
  return [
    { id: 'riize' },
    { id: 'lesserafim' },
    { id: 'newjeans' },
    { id: 'blackpink' },
    { id: 'aespa' },
    { id: 'silicagel' },
    { id: 'ive' },
    { id: 'cortis' }
  ];
}

export default function CommunityDetailPage({ params }) {
  return <CommunityDetailClient params={params} />;
}
