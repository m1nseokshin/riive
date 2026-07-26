'use client';

const basePath = process.env.NODE_ENV === 'production' ? '/riive' : '';

export const getAssetPath = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
