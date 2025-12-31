export const UserManagementRolesPage = () => {
  return (
    <div className="page-content">
      <h2>사용자 관리 - 역할</h2>
      <div className="roles-container">
        <div className="role-item">
          <h3>관리자</h3>
          <p>권한: 모든 시스템 관리</p>
        </div>
        <div className="role-item">
          <h3>편집자</h3>
          <p>권한: 콘텐츠 편집</p>
        </div>
        <div className="role-item">
          <h3>뷰어</h3>
          <p>권한: 읽기 전용</p>
        </div>
      </div>
    </div>
  );
};
