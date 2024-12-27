import React from "react";
import Image from "next/image";

function TwoColumnLayout4({
  textContent1,
  textContent2,
  imageSrc1,
  altText1,
  width1,
  height1,
  imageSrc2,
  altText2,
  width2,
  height2,
}) {
  return (
    <div className={`grid grid-rows-2 grid-cols-2 grid-flow-col h-1/2 `}>
      <div className="h-48 ml-40 mt-8 w-3/4 flex gap-4 flex-col">
        {textContent1}
      </div>

      <div>
        <Image
          src={imageSrc1}
          alt={altText1}
          className="bg-cover"
          width={width1}
          height={height1}
          priority={true}
          quality={100}
        />
      </div>

      <div className="ml-52">
        <Image
          src={imageSrc2}
          alt={altText2}
          className="bg-cover"
          width={width2}
          height={height2}
          priority={true}
          quality={100}
        />
      </div>

      <div className="w-4/5 mt-52 flex gap-4 flex-col">{textContent2}</div>
    </div>
  );
}

export default TwoColumnLayout4;
