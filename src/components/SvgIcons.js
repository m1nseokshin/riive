import React from 'react';

// SVG Icon utilities for status bar & navigation
export const CellularIcon = () => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="currentColor">
    <rect x="0" y="8" width="3" height="4" rx="0.5" />
    <rect x="5" y="6" width="3" height="6" rx="0.5" />
    <rect x="10" y="3" width="3" height="9" rx="0.5" />
    <rect x="15" y="0" width="3" height="12" rx="0.5" />
  </svg>
);

export const WifiIcon = () => (
  <svg width="17" height="13" viewBox="0 0 17 13" fill="currentColor">
    <path d="M8.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM4.9 8.2a5 5 0 017.2 0 .8.8 0 101.1-1.1 6.6 6.6 0 00-9.4 0 .8.8 0 101.1 1.1zM2 5.3a9 9 0 0113 0 .8.8 0 101.1-1.1 10.6 10.6 0 00-15.2 0 .8.8 0 101.1 1.1z" />
  </svg>
);

export const BatteryIcon = () => (
  <svg width="27" height="13" viewBox="0 0 27 13" fill="currentColor">
    <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="currentColor" fill="none" />
    <rect x="2.5" y="2.5" width="18" height="8" rx="1.5" />
    <path d="M24 4.5v4a1.5 1.5 0 001.5-1.5v-1A1.5 1.5 0 0024 4.5z" />
  </svg>
);

export const StarIcon = ({ color = '#d83b8a', size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke={color}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
