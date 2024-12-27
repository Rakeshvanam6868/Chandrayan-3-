"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React from "react";
import { useRouter } from "next/navigation";

export default function Page18() {
  const router = useRouter();

  const prevPageHandler = () => {
    router.push("/page/17");
  };

  const nextPageHandler = () => {
    router.push("/page/18");
  };

  return (
    <>
      <section className="w-[100vw] h-[100vh] bg-cover page18 select-none">
        
      </section>
      <FooterStory
        pageNum1={"34"}
        pageNum2={"35"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}
