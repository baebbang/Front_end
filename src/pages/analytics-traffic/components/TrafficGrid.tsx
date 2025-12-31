import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useMemo } from 'react';
import type { TrafficData } from '../types';

export const TrafficGrid = () => {
  const columnDefs = useMemo<ColDef<TrafficData>[]>(
    () => [
      { field: 'time', headerName: '시간', width: 150 },
      { field: 'pageviews', headerName: '페이지뷰', width: 120 },
      { field: 'visitors', headerName: '방문자', width: 120 },
      { field: 'bounceRate', headerName: '이탈률', width: 120 },
    ],
    []
  );

  const rowData = useMemo<TrafficData[]>(
    () => [
      { time: '00:00 ~ 01:00', pageviews: 234, visitors: 123, bounceRate: '45%' },
      { time: '01:00 ~ 02:00', pageviews: 456, visitors: 234, bounceRate: '38%' },
      { time: '02:00 ~ 03:00', pageviews: 345, visitors: 167, bounceRate: '42%' },
      { time: '03:00 ~ 04:00', pageviews: 289, visitors: 145, bounceRate: '51%' },
      { time: '04:00 ~ 05:00', pageviews: 178, visitors: 89, bounceRate: '55%' },
      { time: '05:00 ~ 06:00', pageviews: 123, visitors: 67, bounceRate: '62%' },
      { time: '06:00 ~ 07:00', pageviews: 567, visitors: 345, bounceRate: '35%' },
      { time: '07:00 ~ 08:00', pageviews: 789, visitors: 456, bounceRate: '28%' },
    ],
    []
  );

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination
        paginationPageSize={10}
        domLayout="autoHeight"
      />
    </div>
  );
};
