import React from "react";

function NorButton({ title, styles }) {
  return (
    <button
      className={`cursor-pointer relative px-6 py-2 border border-[#7687B5] font-[pop_reg] text-white text-[12.5px] rounded-full overflow-hidden ${styles}`}
    >
      {title}
      <span className="w-[70%] aspect-video absolute bg-[#E6EDFF] top-9 left-1/2 -translate-x-1/2 rounded-full blur-md"></span>
    </button>
  );
}

export default NorButton;
