import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { MENU_DATA } from '../shared/lib/menuData';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  // 계층형 경로 생성을 위한 재귀 함수
  const mapMenuData = (data: any[], parentPath: string = ''): MenuItem[] => {
    return data.map((item) => {
      // 부모 경로와 현재 ID를 합쳐 전체 경로 생성 (예: /dashboard/overview/summary)
      const currentPath = `${parentPath}/${item.id}`;
      
      return {
        key: currentPath, // key를 전체 경로로 설정하여 선택 상태 관리 용이
        label: item.label,
        children: item.children ? mapMenuData(item.children, currentPath) : null,
        onClick: !item.children ? () => navigate(currentPath) : undefined,
      };
    });
  };

  const menuItems = mapMenuData(MENU_DATA);

  return (
    <Layout className="min-h-screen">
      <Sider width={260} theme="dark" breakpoint="lg" collapsedWidth="0">
        <div className="h-16 m-4 flex items-center justify-center border-b border-gray-700">
          <span className="text-white font-bold text-lg">SPP ADMIN</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          // 현재 URL과 일치하는 메뉴 하이라이트
          selectedKeys={[location.pathname]}
          // 현재 선택된 메뉴의 상위 메뉴들을 자동으로 펼침
          defaultOpenKeys={['/dashboard', '/dashboard/overview']} 
          items={menuItems}
        />
      </Sider>
      
      <Layout>
        <Header style={{ background: colorBgContainer, padding: '0 24px', display: 'flex', alignItems: 'center' }}>
          <span className="text-gray-400">경로: {location.pathname.replace(/\//g, ' > ')}</span>
        </Header>
        <Content style={{ margin: '24px 16px' }}>
          <div style={{ padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG, minHeight: '80vh' }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;