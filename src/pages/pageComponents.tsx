// src/pages/pageComponents.tsx
import LoginPage from './Login/LoginPage';
import { DashboardSummaryPage } from './dashboard/DashboardSummaryPage';
import { DashboardStatisticsPage } from './dashboard/DashboardStatisticsPage';
import { AnalyticsTrafficPage } from './dashboard/AnalyticsTrafficPage';
import { AnalyticsUsersPage } from './dashboard/AnalyticsUsersPage';
import { UserManagementListPage } from './management/UserManagementListPage';
import { UserManagementRolesPage } from './management/UserManagementRolesPage';
import { ContentManagementPagesPage } from './management/ContentManagementPagesPage';
import { ContentManagementMediaPage } from './management/ContentManagementMediaPage';
import { SettingsGeneralProfilePage } from './settings/SettingsGeneralProfilePage';
import { SettingsGeneralPreferencesPage } from './settings/SettingsGeneralPreferencesPage';
import { SettingsSecurityPasswordPage } from './settings/SettingsSecurityPasswordPage';
import { SettingsSecuritySessionsPage } from './settings/SettingsSecuritySessionsPage';

export const pageComponents: Record<string, React.ComponentType> = {
  login: LoginPage,
  'dashboard-overview-summary': DashboardSummaryPage,
  'dashboard-overview-statistics': DashboardStatisticsPage,
  'dashboard-analytics-traffic': AnalyticsTrafficPage,
  'dashboard-analytics-users': AnalyticsUsersPage,
  'management-users-list': UserManagementListPage,
  'management-users-roles': UserManagementRolesPage,
  'management-content-pages': ContentManagementPagesPage,
  'management-content-media': ContentManagementMediaPage,
  'settings-general-profile': SettingsGeneralProfilePage,
  'settings-general-preferences': SettingsGeneralPreferencesPage,
  'settings-security-password': SettingsSecurityPasswordPage,
  'settings-security-sessions': SettingsSecuritySessionsPage,
};

// 1depth 메뉴 클릭 시 기본으로 이동할 하위 페이지 매핑
export const defaultRoutes: Record<string, string> = {
  dashboard: 'dashboard-overview-summary',
  management: 'management-users-list',
  settings: 'settings-general-profile',
};