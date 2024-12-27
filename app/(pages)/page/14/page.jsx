"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page14() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/13");
  };

  const nextPageHandler = () => {
    router.push("/page/15");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page14 select-none">
        <div className="text-white text-justify text-2xl font-medium pl-28 pt-80 flex flex-row-reverse">
          <div className="w-1/2 flex flex-col pr-10 gap-4">
            <p>
              Dadaji - Veer, first of all you should know that Chandrayaan is
              the name of the Indian Lunar Exploration Program.
            </p>

            <p>
              India launched Chandrayaan 2 in 2019. The lander was on the right
              path, but unfortunately due to a small error, communication was
              lost in the final 300 meters, and it could not make a smooth
              landing on the surface of the moon. It crashed.
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"26"}
        pageNum2={"27"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
