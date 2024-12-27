import React from "react";
import { CldImage } from "next-cloudinary";

function TwoColumnLayourt3({
  imageSrc,
  altText,
  children,
  className,
  width,
  height,
  imageSrc1,
  altText1,
  className1,
  width1,
  height1,
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Image Column */}
        <div className="w-full h-96 md:h-full">
          <CldImage
            src={imageSrc}
            alt={altText}
            className={className}
            width={width}
            height={height}
            crop={{ type: "auto", source: true }}
          />
        </div>
        {/* Text Column with Image on Top */}
        <div className="flex flex-col items-center justify-between p-4">
          <CldImage
            src={imageSrc1}
            alt={altText1}
            className={className1}
            width={width1}
            height={height1}
            crop={{ type: "auto", source: true }}
          />
          {children}
          {/* <div className="flex flex-col justify-center p-4">{children}</div> */}
        </div>
      </div>
    </>
  );
}

export default TwoColumnLayourt3;
