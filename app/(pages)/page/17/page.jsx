"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page17() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/16");
  };

  const nextPageHandler = () => {
    router.push("/page/18");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page17 select-none">
        <div className="flex pl-16 pt-10  gap-10 text-2xl pr-40 text-justify">
          <div className="flex w-[200px] flex-col gap-4 ">
            <p>
              Veer - What will this rover do on the moon? Nobody stays there.
              How will it help us?
            </p>
            <p>
              Dadaji - Ha! Ha! Ha! You are wrong, little boy. Like Chandrayaan 1
              gave valuable inputs about the possibility of water on the moon,
              this mission will explore the properties of the moon&apos;s surface,
              its soil, gases, metals and minerals.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Veer smiled sheepishly. He wanted to show Dadaji that he was not a
              little boy. He knew a lot!
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"32"}
        pageNum2={"33"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
