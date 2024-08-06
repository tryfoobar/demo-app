import React from "react";

import { useEffect } from "react";
import DashboardLayout from "./layout/DashboardLayout";
import { Outlet, useMatch, useNavigate } from "react-router-dom";

function App() {
  const match = useMatch("/");
  const navigate = useNavigate();

  window.CommandBar.boot("123456");

  React.useEffect(() => {
    const routerFunc = (newUrl) => navigate(newUrl);
    window.CommandBar.addRouter(routerFunc);
  }, []);

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
