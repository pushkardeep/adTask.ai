import React from "react";

function SmButton({title, styles}) {
  return (
    <button className={`smButton relative cursor-pointer block mx-auto px-4 py-1.5 text-white text-[11px] border border-[#FFFFFF0D] rounded-full z-20 ${styles}`}>
      {title}
    </button>
  );
}

export default SmButton;
