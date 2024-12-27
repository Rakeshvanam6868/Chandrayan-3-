import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

function TwoColumnLayout2({
  imageSrc,
  altText,
  children,
  className,
  width,
  height,
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Image Column */}
        <div className="relative w-full h-96 md:h-full">
          {/* <Image
            src={imageSrc}
            alt={altText}
            objectFit="cover"
            className={className}
            unoptimized
            priority={true}
            quality={100}
            width={100}
            height={100}
          /> */}
          <CldImage
            src={imageSrc}
            alt={altText}
            className={className}
            width={width}
            height={height}
            crop={{ type: "auto", source: true }}
          />
        </div>
        {/* Text Column */}
        <div className="flex flex-col justify-center p-4">{children}</div>
      </div>
    </>
  );
}

export default TwoColumnLayout2;
