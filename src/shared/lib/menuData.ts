import type { MenuLevel1 } from '../types';

export const MENU_DATA: MenuLevel1[] = [
  {
    id: 'dashboard',
    label: '대시보드',
    children: [
      {
        id: 'overview',
        label: '개요',
        children: [
          { id: 'summary', label: '요약' },
          { id: 'statistics', label: '통계' },
        ],
      },
      {
        id: 'analytics',
        label: '분석',
        children: [
          { id: 'traffic', label: '트래픽' },
          { id: 'users', label: '사용자' },
        ],
      },
    ],
  },
  {
    id: 'management',
    label: '관리',
    children: [
      {
        id: 'users',
        label: '사용자 관리',
        children: [
          { id: 'list', label: '목록' },
          { id: 'roles', label: '역할' },
        ],
      },
      {
        id: 'content',
        label: '콘텐츠 관리',
        children: [
          { id: 'pages', label: '페이지' },
          { id: 'media', label: '미디어' },
        ],
      },
    ],
  },
  {
    id: 'settings',
    label: '설정',
    children: [
      {
        id: 'general',
        label: '일반',
        children: [
          { id: 'profile', label: '프로필' },
          { id: 'preferences', label: '환경설정' },
        ],
      },
      {
        id: 'security',
        label: '보안',
        children: [
          { id: 'password', label: '비밀번호' },
          { id: 'sessions', label: '세션' },
        ],
      },
    ],
  },
];
