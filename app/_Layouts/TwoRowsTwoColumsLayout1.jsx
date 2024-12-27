import Image from "next/image";
import React from "react";

function TwoRowsTwoColumsLayout1({ imgSRC1, text1, imgSRC2, text2 }) {
  return (
    <>
      <div className="min-h-screen p-6">
        <div className="grid grid-rows-2">
          <div className="flex items-center justify-between">
            <p className="text-justify text-2xl font-medium select-none">
              {text1}
            </p>
            <Image
              src={imgSRC1}
              alt="image1"
              className="w-full h-72 bg-cover top-0 left-0"
              width={900}
              height={500}
              quality={100}
              objectFit="cover"
            />
          </div>
          <div className="flex items-center justify-between">
            <Image
              src={imgSRC2}
              alt="image1"
              className="w-full h-80 bg-cover mr-48 bottom-0 left-0"
              width={800}
              height={500}
              quality={100}
              objectFit="cover"
            />
            <p className="text-justify text-2xl font-medium select-none">
              {text2}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TwoRowsTwoColumsLayout1;
