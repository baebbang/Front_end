export const DashboardSummaryPage = () => {
  return (
    <div className="page-content">
      <h2>대시보드 - 요약</h2>
      <div className="summary-container">
        <div className="summary-card">
          <h3>총 방문자</h3>
          <p className="number">1,234</p>
        </div>
        <div className="summary-card">
          <h3>오늘 방문자</h3>
          <p className="number">456</p>
        </div>
        <div className="summary-card">
          <h3>신규 사용자</h3>
          <p className="number">78</p>
        </div>
      </div>
    </div>
  );
};
