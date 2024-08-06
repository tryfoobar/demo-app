import React from "react";
import { useEffect } from "react";
import DashboardLayout from "./layout/DashboardLayout";
import { Outlet, useMatch, useNavigate } from "react-router-dom";

function App() {
  const match = useMatch("/");
  const navigate = useNavigate();

  useEffect(() => {
    if (match?.pathname === "/") {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="">
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </div>
  );
}

export default App;
