import progress from "../../assets/analytics/project-progress.webp";
import chart from "../../assets/icons/line-chart.svg";

const OverView = () => {
  return (
    <div className="p-[24px] flex">
      <div className="flex gap-6 w-1/2 border-r border-[#E8ECEF] ">
        <img className="w-[66px] h-[66px]" src={progress} alt="" />

        <div>
          <div className="text-[18px] text-[#252631] leading-[27px] font-semibold">
            Projects complete
          </div>
          <p className="text-[12px] text-[#778CA2] leading-[18px] font-normal max-w-[203.541px]">
            Lorem placeholder copy until we know what this should says
          </p>
        </div>
      </div>

      <div className="flex gap-6 w-1/2 pl-12">
        <img className="w-[76.203px] h-[66px]" src={chart} alt="" />

        <div>
          <div className="text-[18px] text-[#252631] leading-[27px] font-semibold">
            Increase +2.0%
          </div>
          <p className="text-[12px] text-[#778CA2] leading-[18px] font-normal max-w-[203.541px]">
            Lorem placeholder copy until we know what this should says
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverView;
