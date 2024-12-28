"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";
import { getCldImageUrl } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
function Page4() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/03");
  };

  const nextPageHandler = () => {
    router.push("/page/05");
  };

  let imgURL1;
if (typeof window !== "undefined") {
  imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page4/b838utzg4iozpiqxnk1d",
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    // width: 960,
    // height: 600,
    // fillBackground: true,
    // crop: 'auto'
  });
}


  return (
    <>
      <section className="w-[100vw] h-[100vh] page4 bg-cover select-none">
        <div className="flex flex-row-reverse">
          <CldImage
            src={imgURL1}
            alt="moon"
            className="bg-cover"
            width={300}
            height={300}
          />
        </div>
        <div className="w-1/2 -mt-14 ml-[650px] flex flex-col gap-4 text-justify text-white text-lg font-medium">
          <p>
            Dadaji - Veer, it was a very great day in the history of Space
            research, as well as for India. Modiji has rightly named 23 August as
            National Space Day. But first let me tell you a small story about
            the moon which I heard from my grandmother when I was young.
          </p>
          <p>
            Veer - Wow! Tell me quickly, Dadaji.
          </p>
          <p>
            Dadaji - Once upon a time, a young princess wanted to go to the moon.
            The king  didn&apos;t know how to fulfil his daughter&apos;s foolish
            wish. He promised a huge reward for anyone who would please his daughter.
            Many courtiers came forward with various ideas but none could please the
            princess.
          </p>
          <p>
            One day, a saint came and took the challange.
            He asked the king to bring his daughter before him.
          </p>
          <p>
            Saint - Tell me, little one, how big is the moon?
          </p>
        </div>
      </section>
      <FooterStory
        pageNum1={"06"}
        pageNum2={"07"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page4;
