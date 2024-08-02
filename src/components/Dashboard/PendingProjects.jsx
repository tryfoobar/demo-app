import { Chip, Paper } from "@mui/material";
import Task from "../../assets/icons/task.svg";
import Chat from "../../assets/icons/chat.svg";

const PendingProjects = () => {
  return (
    <div className="mt-4">
      <div className="text-[16px] font-semibold leading-[24px] text-[#778CA2] mb-2">
        Pending projects
      </div>

      <Paper
        sx={{
          boxShadow: "none",
          border: "1px solid #E8ECEF",
          p: 0,
          m: 0,
          borderRadius: "8px",
          height: "150px",
        }}
      >
        <div className="relative w-full h-full overflow-hidden ">
          <div className="px-6 pt-6 pb-6 border-b flex gap-3 items-center">
            <div className="rounded-full w-[36px] h-[36px] bg-[#E9088A] flex items-center justify-center text-[26px] text-white font-medium">
              <p className="text-center">V</p>
            </div>
            <div className="text-[16px] text-[#252631] leading-[24px] font-semibold ">
              Vaulter Acquisition
            </div>
          </div>

          <div className="flex mt-4 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <img className="w-[16px] h-[16px]" src={Task} alt="" />
                <div className="text-[14px] text-[#778CA2] leading-[21px] font-normal">
                  12/28
                </div>
              </div>

              <div className="flex items-center gap-1">
                <img className="w-[16px] h-[16px]" src={Chat} alt="" />
                <div className="text-[14px] text-[#778CA2] leading-[21px] font-normal">
                  8
                </div>
              </div>
            </div>

            <Chip
              size="small"
              variant="outlined"
              sx={{
                fontFamily: "Public Sans",
                color: "#778CA2",
                height: "fit-content",
                p: "3px 14px 4px 16px !important",
              }}
              label="July 2025"
            />
          </div>

          <div className="h-[4px] bg-[#F2F4F6] w-full absolute bottom-0 rounded-lg ">
            <div className="bg-[#E9088A] w-[85%] h-full rounded-lg"></div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default PendingProjects;
