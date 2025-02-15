import React from "react";

function WorkedWithElem({ src, alt }) {
  return (
    <div className="w-16 rounded-[16px] aspect-square flex justify-center items-center bg-[#78819936] backdrop-blur-md border border-[#7687B5]">
      <img className="w-[50%] object-cover" src={src} alt={alt} />
    </div>
  );
}

export default WorkedWithElem;
