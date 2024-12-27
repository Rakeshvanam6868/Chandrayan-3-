"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page12() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/11");
  };

  const nextPageHandler = () => {
    router.push("/page/13");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page12 select-none">
        <div className="flex text-white text-justify text-2xl font-medium w-full px-16 pt-20 gap-12">
          <div className="flex pl-3 flex-col gap-4">
            <p className="w-[500px]">
              Veer&apos;s mind wandered to something he suddenly remembered as
              Dadaji spoke. He interrupted him.
            </p>
            <p>
              Veer - Dadaji, tell me who are &apos;Vikram&apos; and
              &apos;Pragyan&apos;? I heard something about them on T.V. Are they
              astronauts?
            </p>
          </div>
          <div className="flex pl-40 flex-col gap-4">
            <p>
              Dadaji - &apos;Vikram&apos; is the name of the lander that has
              landed on the moon. &apos;Pragyan&apos; is the name of the rover
              that will explore and try to find answers to unexplored facts
              about the moon. The lander has been named &apos;Vikram&apos; in
              honour of our great scientist Dr. Vikram Sarabhai. He was the
              founding father of India&apos;s space programme.
            </p>
            <p>
              Veer - I will surely read this book which tells about Vikram
              Sarabhai.
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"22"}
        pageNum2={"23"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
