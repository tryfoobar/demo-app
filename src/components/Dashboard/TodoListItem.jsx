import { useState } from "react";
import { Checkbox } from "@mui/material";

import Task from "../../assets/icons/task.svg";
import Chat from "../../assets/icons/chat.svg";
import Chip from "../Chip";

const TodoListItem = ({ title, type, checked = false, handleClick, id }) => {
  const [checkbox, setCheckbox] = useState(checked);

  const handleChange = (event) => {
    setCheckbox(event.target.checked);
  };

  return (
    <div
      onClick={() => handleClick(id)}
      className="h-[52px] mx-2 flex items-center justify-between border-b-[1px] border-[#E8ECEF] cursor-pointer hover:bg-[#E8ECEF]/40"
    >
      <div className="flex  items-center">
        <Checkbox
          checked={checkbox}
          onChange={handleChange}
          sx={{
            "&.Mui-checked": {
              color: "#4D7CFE",
            },
          }}
        />
        <div
          className={`text-[14px] ${
            checkbox ? "text-[#778CA2]" : "text-[#252631] "
          } leading-[21px] font-medium`}
        >
          {title}
        </div>
      </div>

      <div className="flex gap-4">
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

        <Chip type={type} />
      </div>
    </div>
  );
};

export default TodoListItem;
