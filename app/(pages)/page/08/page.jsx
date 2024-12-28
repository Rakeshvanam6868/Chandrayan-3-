"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

export default function Page8() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/07");
  };

  const nextPageHandler = () => {
    router.push("/page/09");
  };

  let imgURL;

  if (typeof window !== "undefined") {
    imgURL = getCldImageUrl({
      src: "NBT-Chandrayaan3/assets/fgImages/page8/qjoegabipmnwt6qzbkiz",
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      // Optional parameters can be uncommented as needed
      // width: 960,
      // height: 600,
      // fillBackground: true,
      // crop: 'auto'
    });
  }
  

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page8 select-none">
        <div className="flex items-start">
          <Image
            src={imgURL}
            alt="image1"
            className="bg-cover sm:w-[420px] sm:h-[360px] lg:w-[820px] lg:h-[740px]"
            width={740}
            height={500}
            quality={100}
            objectFit="cover"
          />
          <div className="text-black text-justify text-2xl font-medium pr-10 py-20 flex flex-row-reverse sm:text-sm  sm:py-10 lg:text-xl lg:pr-12 lg:py-12">
            <div className="flex pr-8 flex-col gap-4 sm:pr-4 sm:gap-2" >
              <p >
                Dadaji - Thousands of years before people could not even dream
                of space and aircrafts, ancient Indian wise men had compiled the
                Vimaanshastra, or the science of flying. Gods and kings often
                covered long distances on their flying chariots.
              </p>
              <p>
                Veer - Yes, Dadaji, I remember! In the Ramayana too, Ravana
                kidnapped Sita and flew in his Pushpak Vimaan. But then, why did
                it take us so long to explore space?
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"14"}
        pageNum2={"15"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
