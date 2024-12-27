import Image from "next/image";
import React from "react";

function TwoRowLayout2({ imageURL, altText, para1, heading1 }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        {/* Text Row */}
        <div className="flex-1 flex">
          <div className="max-w-2xl px-4">
            <h1 className="text-4xl font-bold text-gray-800">{heading1}</h1>
            <p className="p-16 text-justify text-3xl select-none">{para1}</p>
          </div>
        </div>
        {/* Image Row */}
        <div className="flex-1">
          <Image
            src={imageURL} // Add your image in the `public` folder or use a URL
            alt={altText}
            className="w-full h-full pb-40"
            quality={100}
            objectPosition="bottom"
            width={1200}
            height={100}
          />
        </div>
      </div>
    </>
  );
}

export default TwoRowLayout2;
