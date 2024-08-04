import arrow from "../assets/icons/arrow-up.svg";
const UploadPhoto = () => {
  return (
    <div className="h-[124px] border-[1px] border-dotted border-[#E8ECEF] rounded-[4px] flex items-center justify-center">
      <div className="flex gap-4 items-center justify-center">
        <img src={arrow} alt="" />

        <div className="text-[14px] text-[#778CA2] leading-[21px] font-normal">
          Upload photo
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
