import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useMemo } from 'react';

interface UserData {
  userId: string;
  name: string;
  email: string;
  joinDate: string;
  status: string;
}

export const UserManagementListPage = () => {
  const columnDefs = useMemo<ColDef<UserData>[]>(
    () => [
      { field: 'userId', headerName: '아이디', width: 120 },
      { field: 'name', headerName: '이름', width: 120 },
      { field: 'email', headerName: '이메일', width: 180 },
      { field: 'joinDate', headerName: '가입일', width: 120 },
      { field: 'status', headerName: '상태', width: 100 },
    ],
    []
  );

  const rowData = useMemo<UserData[]>(
    () => [
      { userId: 'user001', name: '홍길동', email: 'hong@example.com', joinDate: '2024-01-01', status: '활성' },
      { userId: 'user002', name: '김영희', email: 'kim@example.com', joinDate: '2024-01-05', status: '활성' },
      { userId: 'user003', name: '이순신', email: 'lee@example.com', joinDate: '2024-02-10', status: '활성' },
      { userId: 'user004', name: '박철수', email: 'park@example.com', joinDate: '2024-02-15', status: '비활성' },
      { userId: 'user005', name: '최민지', email: 'choi@example.com', joinDate: '2024-03-01', status: '활성' },
      { userId: 'user006', name: '정은혜', email: 'jung@example.com', joinDate: '2024-03-10', status: '활성' },
      { userId: 'user007', name: '강민준', email: 'kang@example.com', joinDate: '2024-04-05', status: '활성' },
      { userId: 'user008', name: '윤지현', email: 'yoon@example.com', joinDate: '2024-04-12', status: '비활성' },
    ],
    []
  );

  return (
    <div className="page-content">
      <h2>사용자 관리 - 목록</h2>
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
