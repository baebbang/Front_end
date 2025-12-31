export const SettingsSecurityPasswordPage = () => {
  return (
    <div className="page-content">
      <h2>설정 - 보안 - 비밀번호</h2>
      <div className="settings-form">
        <div className="form-group">
          <label>현재 비밀번호</label>
          <input type="password" placeholder="현재 비밀번호 입력" />
        </div>
        <div className="form-group">
          <label>새 비밀번호</label>
          <input type="password" placeholder="새 비밀번호 입력" />
        </div>
        <div className="form-group">
          <label>비밀번호 확인</label>
          <input type="password" placeholder="새 비밀번호 확인" />
        </div>
        <button className="save-btn">변경</button>
      </div>
    </div>
  );
};
