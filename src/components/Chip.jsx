const Chip = ({ type }) => {
  const getStyle = () => {
    if (type == "Work") {
      return {
        bg: "var(--fe-4-d-97-soft, linear-gradient(0deg, rgba(254, 77, 151, 0.15) 0%, rgba(254, 77, 151, 0.15) 100%), #FFF)",
        color: "#FE4D97",
      };
    } else if (type == "Family") {
      return {
        bg: "var(--6-dd-230-soft, linear-gradient(0deg, rgba(109, 210, 48, 0.15) 0%, rgba(109, 210, 48, 0.15) 100%), #FFF)",
        color: "#6DD230",
      };
    } else if (type == "Home") {
      return {
        bg: "var(--ffab-2-b-soft, linear-gradient(0deg, rgba(255, 171, 43, 0.15) 0%, rgba(255, 171, 43, 0.15) 100%), #FFF)",
        color: "#FFAB2B",
      };
    } else {
      return {
        bg: "var(--4-d-7-cfe-soft, linear-gradient(0deg, rgba(77, 124, 254, 0.15) 0%, rgba(77, 124, 254, 0.15) 100%), #FFF)",
        color: "#4D7CFE",
      };
    }
  };
  return (
    <div
      style={{ background: getStyle().bg, color: getStyle().color }}
      className="flex rounded-[99px] items-center justify-center p-[3px_16px_4px_16px] capitalize text-[14px] text-[#778CA2] leading-[21px] font-normal"
    >
      {type}
    </div>
  );
};

export default Chip;
