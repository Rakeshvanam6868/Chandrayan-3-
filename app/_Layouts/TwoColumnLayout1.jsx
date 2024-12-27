import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

function TwoColumnLayout1({
  imageSrc,
  altText,
  children,
  width,
  height,
  className,
}) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Text Column */}
        <div className="flex flex-col justify-center p-5">{children}</div>
        {/* Image Column */}
        <div className="p-24 relative w-56 h-56 md:h-full">
          {/* <Image
            src={imageSrc}
            alt={altText}
            className="bg-cover w-28 h-56 block ml-[30rem]"
            objectFit="cover"
            unoptimized
            priority={true}
            quality={100}
            layout="fill"
          /> */}
          <CldImage
            src={imageSrc}
            alt={altText}
            className={className}
            crop={{ type: "auto", source: true }}
            width={width}
            height={height}
          />
        </div>
      </div>
    </>
  );
}

export default TwoColumnLayout1;
