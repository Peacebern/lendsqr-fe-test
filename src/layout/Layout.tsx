// import { ReactNode } from 'react'
// import Header from '../components/header/Header.tsx'
// import Sidebar from '../components/sidebar/Sidebar.tsx'

// interface Props {
//     children: ReactNode;
// }
// const Layout = (props: Props) => {
//   return (
//     <div className="layout">
//         <Header/>
//         <Sidebar/>
//         <main>{props.children}</main>
//     </div>
//   )
// }

// export default Layout

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
