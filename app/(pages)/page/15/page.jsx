"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

export default function Page15() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/14");
  };

  const nextPageHandler = () => {
    router.push("/page/16");
  };

  const imgURL = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page15/p5yzrsqdkrmcqsu780dz",
  });

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page15 select-none">
        <div className="flex ">
          <Image
            src={imgURL}
            alt="image1"
            className="  bg-cover mt-40"
            width={600}
            height={500}
            quality={100}
            objectFit="cover"
          />
        </div>
        <div className="text-black text-justify text-2xl font-medium -mt-[650px] pl-28 pr-10 pt-16 flex flex-row-reverse">
          <div className="w-1/2 flex flex-col pr-10 gap-4">
            <p>Veer nodded as he gulped down the now cold milk.</p>
            <p>He faintly remembered watching this news five years ago.</p>
            <p>
              Dadaji was surprised. How could Veer remember the event? He was
              just five back then.
            </p>
            <p>
              Dadaji - Do you remember watching that landing of Chandrayaan 2?
              Our Prime Minister Shri Narendra Modi was also present in the
              operation control room to witness that historic moment. We were
              all so touched when Modi ji hugged and consoled the ISRO Chairman
              K Sivan and encouraged him to try again.
            </p>
            <p>
              Veer - I can imagine how disappointing it must have been for the
              whole team.
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"28"}
        pageNum2={"29"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
