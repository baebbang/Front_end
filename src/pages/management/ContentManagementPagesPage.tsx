import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useMemo } from 'react';

interface PageData {
  title: string;
  author: string;
  modifiedDate: string;
  status: string;
  views: number;
}

export const ContentManagementPagesPage = () => {
  const columnDefs = useMemo<ColDef<PageData>[]>(
    () => [
      { field: 'title', headerName: '제목', width: 150 },
      { field: 'author', headerName: '작성자', width: 120 },
      { field: 'modifiedDate', headerName: '수정일', width: 130 },
      { field: 'status', headerName: '상태', width: 100 },
      { field: 'views', headerName: '조회수', width: 100 },
    ],
    []
  );

  const rowData = useMemo<PageData[]>(
    () => [
      { title: '홈페이지', author: '홍길동', modifiedDate: '2024-12-25', status: '발행', views: 1234 },
      { title: '회사소개', author: '김영희', modifiedDate: '2024-12-20', status: '발행', views: 567 },
      { title: '제품소개', author: '이순신', modifiedDate: '2024-12-18', status: '임시저장', views: 0 },
      { title: '뉴스', author: '박철수', modifiedDate: '2024-12-15', status: '발행', views: 890 },
      { title: '공지사항', author: '최민지', modifiedDate: '2024-12-10', status: '발행', views: 456 },
      { title: '자주묻는질문', author: '정은혜', modifiedDate: '2024-12-05', status: '발행', views: 2345 },
    ],
    []
  );

  return (
    <div className="page-content">
      <h2>콘텐츠 관리 - 페이지</h2>
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
