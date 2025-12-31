import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useMemo } from 'react';

interface SessionData {
  device: string;
  loginTime: string;
  lastActivity: string;
  ipAddress: string;
}

export const SettingsSecuritySessionsPage = () => {
  const columnDefs = useMemo<ColDef<SessionData>[]>(
    () => [
      { field: 'device', headerName: '장치', width: 150 },
      { field: 'loginTime', headerName: '로그인 시간', width: 160 },
      { field: 'lastActivity', headerName: '마지막 활동', width: 160 },
      { field: 'ipAddress', headerName: 'IP 주소', width: 130 },
      {
        headerName: '작업',
        width: 100,
        cellRenderer: () => <button className="action-btn">로그아웃</button>,
      },
    ],
    []
  );

  const rowData = useMemo<SessionData[]>(
    () => [
      { device: 'Chrome - Windows', loginTime: '2024-12-30 10:00', lastActivity: '2024-12-30 14:30', ipAddress: '192.168.1.100' },
      { device: 'Safari - iOS', loginTime: '2024-12-28 15:00', lastActivity: '2024-12-28 16:00', ipAddress: '192.168.1.101' },
      { device: 'Firefox - MacOS', loginTime: '2024-12-25 09:30', lastActivity: '2024-12-25 11:45', ipAddress: '192.168.1.102' },
      { device: 'Edge - Windows', loginTime: '2024-12-20 14:20', lastActivity: '2024-12-20 15:30', ipAddress: '192.168.1.103' },
    ],
    []
  );

  return (
    <div className="page-content">
      <h2>설정 - 보안 - 세션</h2>
      <div className="ag-theme-quartz" style={{ height: 500, marginTop: 20 }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination
          paginationPageSize={10}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};
