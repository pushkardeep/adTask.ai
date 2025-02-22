import React from "react";

function NorButton({ title, img_src, styles }) {
  return (
    <button
      className={`cursor-pointer relative  border border-[#7687B5] font-[pop_reg] text-white text-[10px] md:text-[12.5px] rounded-full overflow-hidden ${styles}`}
    >
      {title && title}
      {img_src && (
        <img
          className={`min-w-[15px] w-[15px] aspect-square object-contain`}
          src={img_src}
          alt="call"
        />
      )}
      <span className="w-[70%] aspect-video absolute bg-[#E6EDFF] top-9 left-1/2 -translate-x-1/2 rounded-full blur-md"></span>
    </button>
  );
}

export default NorButton;
