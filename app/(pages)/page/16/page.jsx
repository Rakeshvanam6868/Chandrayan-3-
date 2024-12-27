"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page16() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/15");
  };

  const nextPageHandler = () => {
    router.push("/page/17");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page16 select-none"></section>
      <FooterStory
        pageNum1={"30"}
        pageNum2={"31"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
