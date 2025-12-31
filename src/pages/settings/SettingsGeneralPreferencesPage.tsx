export const SettingsGeneralPreferencesPage = () => {
  return (
    <div className="page-content">
      <h2>설정 - 일반 - 환경설정</h2>
      <div className="settings-form">
        <div className="form-group">
          <label>
            <input type="checkbox" defaultChecked /> 이메일 알림
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" defaultChecked /> 푸시 알림
          </label>
        </div>
        <div className="form-group">
          <label>언어</label>
          <select>
            <option>한국어</option>
            <option>English</option>
            <option>中文</option>
          </select>
        </div>
        <button className="save-btn">저장</button>
      </div>
    </div>
  );
};
