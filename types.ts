// Fix: Import React to use React.ReactNode type.
import React from 'react';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Flashcard {
  id: number;
  category: 'Fundamentals' | 'Operations' | 'Architecture' | 'Performance';
  front: string;
  back: string;
  example?: string;
}

export interface NavLinkInfo {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export interface ProgressData {
  name: string;
  completed: number;
}
