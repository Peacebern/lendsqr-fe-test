import Submenu from "./Submenu";
import { SideBarData } from "../types/sidebar";

interface Props {
  menu: SideBarData;
}

const Menu = ({ menu }: Props) => {
  return (
    <div>
      <p className="menu">
        {menu.title}
      </p>

      {menu.subNav.map((sn, i) => (
        <Submenu submenu={sn} key={i} />
      ))}
    </div>
  );
};

export default Menu;
