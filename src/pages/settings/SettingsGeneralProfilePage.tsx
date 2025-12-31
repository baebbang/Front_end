export const SettingsGeneralProfilePage = () => {
  return (
    <div className="page-content">
      <h2>설정 - 일반 - 프로필</h2>
      <div className="settings-form">
        <div className="form-group">
          <label>사용자명</label>
          <input type="text" placeholder="사용자명 입력" />
        </div>
        <div className="form-group">
          <label>이메일</label>
          <input type="email" placeholder="이메일 입력" />
        </div>
        <button className="save-btn">저장</button>
      </div>
    </div>
  );
};
