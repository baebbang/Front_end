export const AnalyticsUsersPage = () => {
  return (
    <div className="page-content">
      <h2>분석 - 사용자</h2>
      <div className="users-container">
        <div className="users-stat">
          <h3>활성 사용자</h3>
          <p>현재: 567명</p>
        </div>
        <div className="users-stat">
          <h3>신규 가입</h3>
          <p>이번 달: 89명</p>
        </div>
        <div className="users-stat">
          <h3>이탈 사용자</h3>
          <p>지난 달: 12명</p>
        </div>
      </div>
    </div>
  );
};
