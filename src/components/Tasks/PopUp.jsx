import React from "react";
import Modal from "../Modal";
import send from "../../assets/icons/send.svg";
import mark from "../../assets/icons/mark.svg";
import copy from "../../assets/icons/copy.svg";
import download from "../../assets/icons/download.svg";
import task from "../../assets/icons/task.svg";
import del from "../../assets/icons/delete.svg";
import noNot from "../../assets/icons/no-notification.svg";
import add from "../../assets/icons/add-person.svg";
import plus from "../../assets/icons/add.svg";
import assigned from "../../assets/people/assigned.webp";
import desc from "../../assets/icons/desc.svg";
import attachment from "../../assets/icons/attachment.svg";
import calendar from "../../assets/icons/calendar.svg";
import Chip from "../Chip";
import { Checkbox } from "@mui/material";

const ActionBtn = ({ img, title }) => {
  return (
    <div className="flex gap-[11px] items-center h-[42px]">
      <img src={img} alt="" />
      <div className="text-[14px] font-semibold leading-[21px] text-[#252631]">
        {title}
      </div>
    </div>
  );
};

const PopUp = ({ open, setOpen }) => {
  return (
    <Modal open={open} popUpTitle="Task overview" setOpen={setOpen}>
      <div slot="tab" className="flex  items-center justify-between w-full">
        <div className="text-[12px] font-normal leading-[18px] text-[#778CA2]">
          Overall progress 6/13 subtasks complete
        </div>

        <div className="w-[64px] bg-[#F2F4F6] h-[6px] rounded-md">
          <div className="rounded-md h-full bg-[#FFAB2B] w-[64%]"></div>
        </div>
      </div>

      <div slot="content" className="flex gap-4 pb-8">
        <div className="w-[70%]">
          {/* Task Title  */}
          <div className="flex items-center gap-3">
            <img src={mark} alt="" />
            <div className="text-[20px] font-semibold leading-[30px] text-[#252631]">
              PGN meeting at Tern Haven
            </div>
          </div>

          {/* Assignment  */}
          <div className="mt-6 pl-[24px] flex items-center gap-12">
            <div className="flex flex-col gap-2 items-start">
              <div className="text-[12px] font-normal leading-[18px] text-[#778CA2]">
                Assigned to
              </div>

              <img
                className="w-[124px] h-[28px] object-contain object-center"
                src={assigned}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-2 items-start">
              <div className="text-[12px] font-normal leading-[18px] text-[#778CA2]">
                Due to
              </div>

              <div className="flex gap-2 px-3 py-[5px] rounded-[99px] border hover:border-[#252631] border-[#E8ECEF] items-center text-[14px] text-[#778CA2] font-normal leading-[21px] cursor-pointer">
                16 Aug 2025
                <img className="w-[13px]" src={calendar} alt="" />
              </div>
            </div>
          </div>

          {/* Description  */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <img src={desc} alt="" />
              <div className="text-[16px] font-semibold leading-[24px] text-[#252631]">
                Description
              </div>
            </div>
            <p className="text-[14px] max-w-[379px] font-normal leading-[21px] text-[#252631] mt-[12px] pl-[24px]">
              Prepare talking points for Tern Haven meeting. We’ll be like
              Romans among the Greeks.
            </p>

            <div className="mt-3 w-fit pl-[24px]">
              <Chip type="Work" />
            </div>
          </div>

          {/* Checklist  */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <img className="w-[16px]" src={task} alt="" />
              <div className="text-[16px] font-semibold leading-[24px] text-[#252631]">
                Checklist
              </div>
            </div>

            <div className="mt-3 flex gap-2 flex-col pl-[24px]">
              <div className="flex gap-3 items-center">
                <Checkbox
                  checked
                  sx={{
                    p: 0,
                    m: 0,
                    "&.Mui-checked": {
                      color: "#4D7CFE",
                    },
                  }}
                />
                <div
                  className={`text-[14px] text-[#252631] leading-[21px] font-medium`}
                >
                  Identify family members
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Checkbox
                  sx={{
                    p: 0,
                    m: 0,
                    "&.Mui-checked": {
                      color: "#4D7CFE",
                    },
                  }}
                />
                <div
                  className={`text-[14px] text-[#778CA2] leading-[21px] font-medium`}
                >
                  Brush up on Shakespeare
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Checkbox
                  sx={{
                    p: 0,
                    m: 0,
                    "&.Mui-checked": {
                      color: "#4D7CFE",
                    },
                  }}
                />
                <div
                  className={`text-[14px] text-[#778CA2] leading-[21px] font-medium`}
                >
                  Review Latin phrases
                </div>
              </div>
            </div>
          </div>

          {/* Attachment  */}
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <img src={attachment} alt="" />
              <div className="text-[16px] font-semibold leading-[24px] text-[#252631]">
                Attachments
              </div>
            </div>

            <div className="pl-[24px] mt-3 w-fit">
              <div className="flex gap-1 px-3 py-[5px] rounded-[99px] border hover:border-[#252631] border-[#E8ECEF] items-center text-[14px] text-[#778CA2] font-normal leading-[21px] cursor-pointer">
                Upload your attachment
                <img className="w-[13px]" src={plus} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%]">
          <div className="text-[12px] font-normal leading-[18px] text-[#778CA2]">
            Actions
          </div>

          <div className="mt-2 flex flex-col gap-[2px]">
            <ActionBtn img={mark} title="Mark as done" />
            <ActionBtn img={copy} title="Duplicate task" />
            <ActionBtn img={download} title="Attachments" />
            <ActionBtn img={task} title="Checklist" />
            <ActionBtn img={add} title="Add members" />
            <ActionBtn img={noNot} title="Disable notificaions" />
            <ActionBtn img={del} title="Delete task" />
          </div>
        </div>
      </div>

      <div
        slot="actions"
        className="flex justify-between h-[56px] items-center w-full px-4 bg-[#F8FAFB] "
      >
        <div className="text-[14px] font-normal leading-[21px] text-[#778CA2]">
          Type to add your comment
        </div>

        <img src={send} alt="" />
      </div>
    </Modal>
  );
};

export default PopUp;
