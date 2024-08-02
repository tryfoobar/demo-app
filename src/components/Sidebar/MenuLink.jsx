import { Link, useMatch } from "react-router-dom";

const MenuLink = ({ link, href = "#", icon }) => {
  const match = useMatch(href);

  return (
    <Link
      to={href}
      className={`${
        icon ? "pl-[18px]" : "pl-[35px]"
      }  h-[42px] w-[232px] flex items-center  ${
        Boolean(match) ? "bg-[#F8FAFB]" : "hover:bg-slate-200/70"
      }  rounded-lg cursor-pointer`}
    >
      <div className="flex gap-[10px] items-center">
        <div>{icon && <div className="text-[20px]">{icon}</div>}</div>
        <div
          className={`text-[14px] ${
            Boolean(match) ? "text-[#4D7CFE]" : "text-[#252631]"
          }  leading-[21px] font-semibold`}
        >
          {link}
        </div>
      </div>
    </Link>
  );
};

export default MenuLink;
