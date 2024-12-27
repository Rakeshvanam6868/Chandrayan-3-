"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page9() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/08");
  };

  const nextPageHandler = () => {
    router.push("/page/10");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page9 select-none">
        <div className="flex p-16 pr-80 gap-10 text-2xl text-justify font-medium">
          <div className="flex flex-col gap-4">
            <p>
              Dadaji was expecting this question. He knew that Veer wanted to
              get into the root of the matter. He was prepared to answer.{" "}
            </p>
            <p>
              Dadaji - For over fourteen hundred years, Cruel invaders attacked
              out land, ruled it, and caused great harm. They destroyed the
              famous universities of Nalanda, Takshashilla, and Vikramshilla,
              where many of our precious texts were kept. That is how we lost
              our ancient knowledge.
            </p>
          </div>
          <div className="pl-32">
            <p>
              Just imagine! Veer, the great mathematician Aryabhatt who
              discovered &apos;Zero&apos; was an esteemed teacher at Nalanda University.
              The Chinese scholar Hiuen Tsang studied at Nalanda University and
              even because a teacher there, so great was its name and fame.
            </p>
          </div>
        </div>
      </section>
      <FooterStory
        pageNum1={"16"}
        pageNum2={"17"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
