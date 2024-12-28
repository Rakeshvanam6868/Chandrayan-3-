"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";
export default function Page11() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/10");
  };

  const nextPageHandler = () => {
    router.push("/page/12");
  };

  let imgURL1;

if (typeof window !== "undefined") {
  imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page11/ibq1kx9fqjricropqfde",
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    // Uncomment the following for additional options if needed
    // width: 960,
    // height: 600,
    // fillBackground: true,
    // crop: 'auto'
  });
}

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page11 select-none">
        <div className="flex">
          <Image
            src={imgURL1}
            alt="image1"
            className="  bg-cover top-0 left-0 -mt-24"
            width={900}
            height={800}
            quality={100}
            objectFit="cover"
          />
          <div className="text-black text-justify text-xl font-medium pr-9 pt-24 flex flex-row-reverse">
            <div className=" flex pr-8 flex-col gap-4">
              <p>
                Veer - I know. I saw the satellites video on youtube. It was so
                interesting. Tell me Dadaji, what is so special about
                Chandrayaan 3?
              </p>
              <p>
                Dadaji - You have asked a very good question. I will explain in
                detail. Just then, Veer&apos;s mother entered the room with a
                tray with two glasses of hot milk for both of them. Dadaji took
                a sip.
              </p>
              <p>
                Veer adjusted his pillow to be even more comfortable. The milk
                was too hot for him. He would wait a bit to drink it.
              </p>
              <p>
                Dadaji - The landing of Chandrayaan 3 is a matter of great pride
                for us because India is the first country to successfully land
                on the south pole of the moon. Our scientists have achieved it
                at a very low cost of 620 million dollars which is almost half
                the cost of a Hollywood movie.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"20"}
        pageNum2={"21"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
