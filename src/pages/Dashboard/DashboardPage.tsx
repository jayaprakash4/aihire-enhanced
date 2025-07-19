import { Sidebar } from "../../components/Sidebar";
import { Outlet, Routes, Route, Navigate } from "react-router-dom";
import JobsView from "./JobsView";
import AnalyticsView from "./AnalyticsView";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="jobs" element={<JobsView />} />
          <Route path="analytics" element={<AnalyticsView />} />
          <Route index element={<Navigate to="jobs" replace />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}
