
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
