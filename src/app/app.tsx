import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';
import MainLayout from '../layouts/MainLayout';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Routes>
      {/* 인증이 필요 없는 경로 */}
      <Route path="/login" element={<LoginPage />} />

      {/* 인증이 필요한 경로 (MainLayout으로 감싸기) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* 추가적인 페이지들 (예: 설정, 사용자 관리 등) */}
      </Route>

      {/* 404 페이지 처리 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;