
import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  strokeWidth: "1.5",
};

export const DashboardIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

export const QuizIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9.5 13.5l1.5 1.5 3.5-3.5"></path>
  </svg>
);

export const FlashcardIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
    <path d="M5 7V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2"></path>
  </svg>
);

export const MindMapIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3v2"></path>
    <path d="M12 19v2"></path>
    <path d="M5 12H3"></path>
    <path d="M21 12h-2"></path>
    <path d="M12 8a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z"></path>
    <path d="M12 12v5a2 2 0 0 1-2 2H8"></path>
    <path d="M12 12v5a2 2 0 0 0 2 2h2"></path>
  </svg>
);

export const AssistantIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8V4H8"></path>
    <rect x="4" y="8" width="16" height="12" rx="2"></rect>
    <path d="M12 12h.01"></path>
    <path d="M16 12h.01"></path>
    <path d="M8 12h.01"></path>
  </svg>
);
