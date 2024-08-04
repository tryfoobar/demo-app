import React from "react";
import UploadPhoto from "../UploadPhoto";
import PopUpForm from "./PopUpForm";
import Modal from "../Modal";

const Settings = ({ open, setOpen }) => {
  return (
    <Modal open={open} popUpTitle="Profile settings" setOpen={setOpen}>
      <div slot="tab" className="flex gap-5 items-center">
        <div className="h-full flex items-center border-b border-[#4D7CFE] w-fit cursor-pointer">
          <div className="text-[14px] text-[#4D7CFE] leading-[21px] font-medium">
            General
          </div>
        </div>

        <div className="h-full flex items-center w-fit cursor-pointer">
          <div className="text-[14px] text-[#252631] leading-[21px] font-medium">
            Accounts & Apps
          </div>
        </div>

        <div className="h-full flex items-center w-fit cursor-pointer">
          <div className="text-[14px] text-[#252631] leading-[21px] font-medium">
            Security
          </div>
        </div>

        <div className="h-full flex items-center w-fit cursor-pointer">
          <div className="text-[14px] text-[#252631] leading-[21px] font-medium">
            Billing
          </div>
        </div>

        <div className="h-full flex items-center w-fit cursor-pointer">
          <div className="text-[14px] text-[#252631] leading-[21px] font-medium">
            Notifications
          </div>
        </div>
      </div>

      <div slot="content">
        <UploadPhoto />
        <PopUpForm />
      </div>

      <div
        slot="actions"
        className="flex justify-between items-center w-full px-3 mb-5 mt-4"
      >
        <div className="bg-[#F2F4F6] text-[14px] font-semibold leading-[21px] text-[#778CA2] p-[12px_24px] rounded-md  cursor-pointer hover:bg-[#dee1e3]">
          Dismiss All
        </div>

        <div className="bg-[#4D7CFE] text-[14px] font-semibold leading-[21px] p-[12px_24px] rounded-md text-white cursor-pointer hover:bg-[#3b68e2]">
          Save Settings
        </div>
      </div>
    </Modal>
  );
};

export default Settings;
