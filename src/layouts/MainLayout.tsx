import React from 'react';
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { MENU_DATA } from '../shared/lib/menuData';
import { useAuthStore } from '../store/useAuthStore';

const { Header, Content, Sider } = Layout;

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuthStore();
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  // 메뉴 데이터를 Ant Design 형식으로 변환
  const mapMenuData = (data: any[], parentPath: string = ''): any[] => {
    return data.map((item) => {
      const fullPath = `${parentPath}/${item.id}`;
      return {
        key: fullPath,
        label: item.label,
        children: item.children ? mapMenuData(item.children, fullPath) : null,
        onClick: !item.children ? () => navigate(fullPath) : undefined,
      };
    });
  };

  // 브레드크럼 생성
  const breadcrumbItems = location.pathname.split('/').filter(i => i).map((sub, idx, arr) => ({
    title: sub.charAt(0).toUpperCase() + sub.slice(1),
    key: sub
  }));

  return (
    <Layout className="min-h-screen">
      <Sider collapsible breakpoint="lg">
        <div className="h-16 m-4 flex items-center justify-center bg-blue-600 rounded-lg text-white font-bold">
          SPP ADMIN
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={mapMenuData(MENU_DATA)} />
      </Sider>
      <Layout>
        <Header className="flex justify-between items-center px-6" style={{ background: colorBgContainer }}>
          <Breadcrumb items={[{ title: 'Home' }, ...breadcrumbItems]} />
          <div className="flex items-center gap-4">
            <span><UserOutlined /> {user?.name}님</span>
            <Button icon={<LogoutOutlined />} onClick={logout}>로그아웃</Button>
          </div>
        </Header>
        <Content className="m-6">
          <div className="p-6 min-h-full" style={{ background: colorBgContainer, borderRadius: borderRadiusLG }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;