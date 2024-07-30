const MenuLink = ({ link, href, active }) => {
  return (
    <div
      className={`pl-[40px] h-[42px] w-[232px] flex items-center  ${
        active ? "bg-white" : "hover:bg-slate-200/70"
      }  rounded-lg cursor-pointer`}
    >
      <div
        className={`text-[14px] ${
          active ? "text-[#4D7CFE]" : "text-[#252631]"
        }  leading-[21px] font-semibold`}
      >
        {link}
      </div>
    </div>
  );
};

export default MenuLink;
