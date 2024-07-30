const MenuLink = ({ link, href, active, icon }) => {
  return (
    <div
      className={`${
        icon ? "pl-[18px]" : "pl-[35px]"
      }  h-[42px] w-[232px] flex items-center  ${
        active ? "bg-[#F8FAFB]" : "hover:bg-slate-200/70"
      }  rounded-lg cursor-pointer`}
    >
      <div className="flex gap-[10px] items-center">
        <div>{icon && <div className="text-[20px]">{icon}</div>}</div>
        <div
          className={`text-[14px] ${
            active ? "text-[#4D7CFE]" : "text-[#252631]"
          }  leading-[21px] font-semibold`}
        >
          {link}
        </div>
      </div>
    </div>
  );
};

export default MenuLink;
