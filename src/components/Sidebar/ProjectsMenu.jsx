import MenuLink from "./MenuLink";
import plus from "../../assets/icons/plus.svg";
import ellipsis from "../../assets/icons/ellipsis.svg";
import { IconButton } from "@mui/material";

const ProjectsMenu = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center px-[22px] mb-3">
        <div className="text-[14px] text-[#778CA2] leading-[21px] font-light">
          Projects
        </div>

        <IconButton color="inherit" aria-label="create project" edge="start">
          <img src={plus} alt="" />
        </IconButton>
      </div>

      <div
        className={`flex max-h-[1000px] overflow-hidden transition-[max-height] duration-300 ease-in-out flex-col items-center justify-center `}
      >
        <MenuLink icon="👨‍💻" link={"Work"} />
        <MenuLink icon="✈️" link={"Travel"} />
        <MenuLink icon="❤️" link={"Family"} />
        <MenuLink icon="🏡" link={"Home"} />
        <MenuLink icon="🍼" link={"Kids"} />
      </div>

      <div className="flex cursor-pointer hover:underline items-center mt-3 capitalize font-semibold gap-2 text-[#4D7CFE] text-[12px] leading-[18px] pl-[30px]">
        <img src={ellipsis} alt="" />
        See more projects
      </div>
    </div>
  );
};

export default ProjectsMenu;
