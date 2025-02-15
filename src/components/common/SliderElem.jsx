import React from "react";

function SliderElem({ src, styles, alt }) {
  return (
    <img
      className={`w-[120px] h-[80px] object-contain mx-2 ${styles}`}
      src={src}
      alt={alt}
    />
  );
}

export default SliderElem;
