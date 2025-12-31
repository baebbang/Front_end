import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore';
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/Login';
import { MENU_DATA } from './shared/lib/menuData';
import { PageComponents } from './pages';

const App = () => {
  const { isLoggedIn } = useAuthStore();

  // 메뉴 기반 동적 라우트 생성 (재귀)
  const renderRoutes = (menuList: any[]) => {
    let routes: any[] = [];
    menuList.forEach((item) => {
      if (item.children) {
        // 자식 노드를 평탄화하여 라우트에 등록
        routes = [...routes, ...renderRoutes(item.children)];
      } else {
        const Component = PageComponents[item.id] || (() => <div>Page Not Found</div>);
        routes.push(<Route key={item.id} path={item.id} element={<Component />} />);
      }
    });
    return routes;
  };

  return (
    <Routes>
      {!isLoggedIn ? (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      ) : (
        <Route path="/" element={<MainLayout />}>
          {/* 하위 계층형 경로들을 모두 평탄하게 등록 (간소화 방식) */}
          <Route index element={<Navigate to="summary" replace />} />
          {renderRoutes(MENU_DATA)}
          <Route path="*" element={<div>404 - 페이지를 찾을 수 없습니다.</div>} />
        </Route>
      )}
    </Routes>
  );
};

export default App;
