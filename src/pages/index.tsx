// src/pages/index.tsx
import { Routes, Route } from 'react-router-dom';
import { pageComponents } from './pageComponents';
import  MainLayout  from '../layouts/MainLayout';

export default function AppRoutes() {
  return (
    <Routes>
      {Object.entries(pageComponents).map(([key, Component]) => {
        if (key === 'login') {
          return <Route key={key} path="/" element={<Component />} />;
        }

        // "dashboard-overview-summary" → "/dashboard/overview/summary"
        const urlPath = '/' + key.replace(/-/g, '/');

        return (
          <Route
            key={key}
            path={urlPath}
            element={
              <MainLayout>
                <Component />
              </MainLayout>
            }
          />
        );
      })}
    </Routes>
  );
}