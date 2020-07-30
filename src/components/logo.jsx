import React from "react";

export default function Logo({ src, classWidth, width }) {
  return (
    <div className={`d-flex justify-content-center ${classWidth}`}>
      <img src={src} alt="" width={width} />
    </div>
  );
}
