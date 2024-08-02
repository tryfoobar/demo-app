import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="">
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </div>
  );
}

export default App;
