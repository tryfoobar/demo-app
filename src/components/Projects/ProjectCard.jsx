import tool from "../../assets/icons/tool.svg";
import users from "../../assets/people/three-user.webp";

const ProjectCard = () => {
  return (
    <div className="h-[336px] bg-white rounded-lg border border-[#E8ECEF] w-[363px] p-6 relative">
      <div className="flex justify-end">
        <img src={tool} alt="" />
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <div className="w-[74px] h-[74px] rounded-full bg-[#E9088A]"></div>
        <div className="text-[16px] text-[#252631] leading-[24px] font-semibold mt-3">
          40th Birthday Party
        </div>

        <div className="text-[14px] text-[#778CA2] leading-[21px] font-normal">
          Due to: 21 July 2025
        </div>

        <div
          style={{ padding: "3px 14px 4px 16px" }}
          className="text-[14px] mt-6 text-[#778CA2] leading-[21px] font-normal flex items-center gap-2 rounded-[99px] bg-[#F2F4F6] cursor-pointer"
        >
          Work
        </div>

        <img
          className="w-[146px] h-[32px] object-contain object-center mt-12"
          src={users}
          alt=""
        />
      </div>

      <div className="h-[4px] bg-[#F2F4F6] left-0 w-full absolute bottom-0 rounded-lg">
        <div className="bg-[#C2C8DC] w-[58%] h-full rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
