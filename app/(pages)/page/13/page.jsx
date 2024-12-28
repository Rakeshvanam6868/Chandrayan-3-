"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page13() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/12");
  };

  const nextPageHandler = () => {
    router.push("/page/14");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page13 select-none">
        <div className="text-black text-justify text-lg font-medium pl-28 pt-14 flex flex-row-reverse sm:text-sm sm:pl-10 sm:pt-2 lg:text-xl lg:pl-28 lg:pt-10">
          <div className="w-1/2 flex flex-col pr-10 gap-4 sm:gap-1 sm:pr-2 sm:w-1/2 lg:gap-4 lg:pr-10 lg:w-1/2">
            <p>
              Dadaji - Ok, tell me the name of the engine of the launch vehicle
              that made this mission successful.
            </p>
            <p>
              Veer knew the answer. He had read it somewhere just recently. He
              answered promptly.
            </p>
            <p>Veer - VIKAS!!!</p>
            <p>
              Dadaji - Shabash! It is a short form of Vikram Sarabhai, who
              played an important role in shaping India&apos;s space research and
              exploration endeavours. His significant contributions have left a
              profound mark on India&apos;s scientific programmes.
            </p>
            <p>
              Veer - I am so proud of our scientists. What a great achievement!
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"24"}
        pageNum2={"25"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
