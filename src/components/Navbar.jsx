import User from "../assets/people/user.webp";
import NavHeader from "../assets/icons/nav-header.svg";
import Notification from "../assets/icons/notification.svg";
import Add from "../assets/icons/add.svg";
import Search from "../assets/icons/search.svg";
import { IconButton } from "@mui/material";

const Navbar = () => {
  return (
    <div className="pr-[20px] flex items-center gap-4">
      <div className="flex items-center gap-2 w-[225px]">
        <img src={Search} alt="" />
        <input
          placeholder="Search"
          className="text-[14px] focus:border-b text-black/70 leading-[21px] font-light outline-none bg-transparent"
        />
      </div>

      <div className="flex items-center gap-8 cursor-pointer">
        <div className="flex gap-2">
          <IconButton color="error">
            <img src={Notification} alt="" />
          </IconButton>

          <IconButton color="inherit">
            <img src={Add} alt="" />
          </IconButton>

          <IconButton color="inherit">
            <img src={NavHeader} alt="" />
          </IconButton>
        </div>

        <img className="w-[36px] h-[36px] cursor-pointer" src={User} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
