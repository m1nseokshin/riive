import ConcertDetailClient from './ConcertDetailClient';

export function generateStaticParams() {
  return [
    { id: 'c1' },
    { id: 'c2' },
    { id: 'c3' },
    { id: 'c4' },
    { id: 'c5' },
    { id: 'c6' },
    { id: 'c7' },
    { id: 'c8' },
    { id: 'c9' },
    { id: 'c10' }
  ];
}

export default function ConcertDetailPage({ params }) {
  return <ConcertDetailClient params={params} />;
}
