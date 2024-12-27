"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page10() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/09");
  };

  const nextPageHandler = () => {
    router.push("/page/11");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page10 select-none">
        <div className="text-black text-justify text-lg font-medium pl-64 py-20 flex flex-row-reverse">
          <div className="w-1/2 flex pr-8 flex-col gap-4">
            <p>
              Veer was amazed. But he felt that Dadaji had started talking about
              something else now. Getting impatient, he gently returned to the
              topic he wanted to discuss
            </p>
            <p>
              Veer - OK. But now we have been a free nation for more than 75
              years. What are we doing now?
            </p>
            <p>
              Dadaji- Yes. You are right. In the last ten years,India has made
              great progress in space exploration. We have become
              atmanirbhar(self-reliant) in all fields from sea to the space and
              talent to technology. India now holds the world record for sending
              104 satellites in just one day!
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"18"}
        pageNum2={"19"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
