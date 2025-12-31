import { TrafficGrid } from './components/TrafficGrid';

export const AnalyticsTrafficPage = () => {
  return (
    <div className="page-content">
      <h2>분석 - 트래픽</h2>
      <div style={{ marginTop: 20 }}>
        <TrafficGrid />
      </div>
    </div>
  );
};
