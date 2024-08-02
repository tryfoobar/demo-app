import MenuLink from "./MenuLink";
import arrow from "../../assets/icons/arrow-down.svg";
import { IconButton } from "@mui/material";
import { useState } from "react";

const NavigationMenu = () => {
  const [open, setOpen] = useState(true);

  const handleNavOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="flex justify-between items-center px-[22px] mb-3">
        <div className="text-[14px] text-[#778CA2] leading-[21px] font-light">
          Navigation
        </div>

        <IconButton
          onClick={handleNavOpen}
          color="inherit"
          aria-label="open nav"
          edge="start"
        >
          <img
            className={`transition-all duration-300 ${
              open ? "rotate-0" : "rotate-[180deg]"
            }`}
            src={arrow}
            alt=""
          />
        </IconButton>
      </div>

      <div
        className={`flex overflow-hidden transition-[max-height] duration-300 ease-in-out flex-col items-center justify-center  ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <MenuLink link={"Dashboard"} href="dashboard" />
        <MenuLink link={"Projects"} />
        <MenuLink link={"Tasks"} href="tasks" />
        <MenuLink link={"Calendar"} />
        <MenuLink link={"Analytics"} />
      </div>
    </div>
  );
};

export default NavigationMenu;
