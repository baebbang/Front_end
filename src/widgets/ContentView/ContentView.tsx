interface ContentViewProps {
  menu1Id: string;
  menu2Id: string;
  menu3Id: string;
}

export const ContentView = ({ menu1Id, menu2Id, menu3Id }: ContentViewProps) => {
  const getTitle = () => {
    return `${menu1Id} > ${menu2Id} > ${menu3Id}`;
  };

  const getContent = () => {
    switch (menu1Id) {
      case 'dashboard':
        if (menu2Id === 'overview') {
          if (menu3Id === 'summary') {
            return '대시보드 개요 > 요약 페이지';
          } else if (menu3Id === 'statistics') {
            return '대시보드 개요 > 통계 페이지';
          }
        } else if (menu2Id === 'analytics') {
          if (menu3Id === 'traffic') {
            return '대시보드 분석 > 트래픽 페이지';
          } else if (menu3Id === 'users') {
            return '대시보드 분석 > 사용자 페이지';
          }
        }
        break;

      case 'management':
        if (menu2Id === 'users') {
          if (menu3Id === 'list') {
            return '관리 사용자관리 > 목록 페이지';
          } else if (menu3Id === 'roles') {
            return '관리 사용자관리 > 역할 페이지';
          }
        } else if (menu2Id === 'content') {
          if (menu3Id === 'pages') {
            return '관리 콘텐츠관리 > 페이지 페이지';
          } else if (menu3Id === 'media') {
            return '관리 콘텐츠관리 > 미디어 페이지';
          }
        }
        break;

      case 'settings':
        if (menu2Id === 'general') {
          if (menu3Id === 'profile') {
            return '설정 일반 > 프로필 페이지';
          } else if (menu3Id === 'preferences') {
            return '설정 일반 > 환경설정 페이지';
          }
        } else if (menu2Id === 'security') {
          if (menu3Id === 'password') {
            return '설정 보안 > 비밀번호 페이지';
          } else if (menu3Id === 'sessions') {
            return '설정 보안 > 세션 페이지';
          }
        }
        break;

      default:
        return '페이지를 선택해주세요';
    }
  };

  return (
    <div className="content-view">
      <h2>{getTitle()}</h2>
      <p>{getContent()}</p>
    </div>
  );
};
