import React from 'react';

const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">{title} 페이지</h2>
    <div className="bg-gray-50 p-10 border-dashed border-2 border-gray-200 rounded-lg text-center text-gray-400">
      {title}의 상세 컨텐츠가 이곳에 표시됩니다. (AG-Grid 등을 추가하세요)
    </div>
  </div>
);

export const PageComponents: Record<string, React.FC> = {
  summary: () => <PagePlaceholder title="대시보드 요약" />,
  statistics: () => <PagePlaceholder title="통계 분석" />,
  traffic: () => <PagePlaceholder title="트래픽 현황" />,
  users: () => <PagePlaceholder title="사용자 관리" />,
  list: () => <PagePlaceholder title="목록 관리" />,
  roles: () => <PagePlaceholder title="권한 관리" />,
  pages: () => <PagePlaceholder title="페이지 설정" />,
  media: () => <PagePlaceholder title="미디어 라이브러리" />,
  profile: () => <PagePlaceholder title="내 프로필" />,
  preferences: () => <PagePlaceholder title="환경 설정" />,
  password: () => <PagePlaceholder title="비밀번호 변경" />,
  sessions: () => <PagePlaceholder title="로그인 세션" />,
};