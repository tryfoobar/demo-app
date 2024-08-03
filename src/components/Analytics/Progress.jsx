import { IconButton, Paper } from "@mui/material";
import tool from "../../assets/icons/tool.svg";

const Progress = ({ title, graph, analytics = false }) => {
  return (
    <Paper
      sx={{
        boxShadow: "none",
        border: "1px solid #E8ECEF",
        borderRadius: "8px",
        mt: 1,
        mx: 0,
        px: 0,
        position: "relative",
        height: "446px",
      }}
    >
      <div className="h-[56px] flex items-center justify-between px-5">
        <div className="text-[14px] text-[#778CA2] leading-[21px] font-medium">
          {title}
        </div>

        <IconButton color="inherit" aria-label="open menu" edge="start">
          <img src={tool} alt="" />
        </IconButton>
      </div>
      <div className="bg-[#E8ECEF] h-[1px]"></div>

      {analytics && (
        <div className="mt-2 px-5">
          <div className="text-[24px] text-[#252631] leading-[36px] font-semibold">
            1,480
          </div>
          <div className="text-[14px] text-[#778CA2] leading-[21px] font-medium">
            Tasks completed
          </div>
        </div>
      )}
      <div className="px-4 absolute bottom-5">
        <img className="object-contain object-center" src={graph} alt="" />
      </div>
    </Paper>
  );
};

export default Progress;
