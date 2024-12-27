import React from "react";
import Image from "next/image";

const TwoRowLayout1 = ({ imageUrl, altText, content }) => {
  return (
    <div className="container mx-auto p-4">
      {/* Wrapper with responsive grid layout */}
      <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
        {/* Text Column */}
        <div className="flex flex-col justify-center p-4">
          <div className="text-lg leading-relaxed">{content}</div>
        </div>
        {/* Image Column */}
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src={imageUrl}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoRowLayout1;
