import React from "react";
import DashboardLayout from "./layout/DashboardLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
}

export default App;
