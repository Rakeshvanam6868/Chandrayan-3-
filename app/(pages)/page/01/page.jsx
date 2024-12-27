"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout1 from "@/app/_Layouts/TwoColumnLayout1";
import { getCldImageUrl } from 'next-cloudinary';
import { useGlobalState } from "@/app/context/GlobalStateContext";
import  lang  from "../../../utils/lang";

function Page1() {
  const router = useRouter();
  const { state, setCurrentPath } = useGlobalState();

  const prevPageHandler = () => {
    router.push("/author");
  };

  const nextPageHandler = () => {
    router.push("/page/02");
  };

  useEffect(() => {
    if (state.currentPath) {
      setCurrentPath(router.push("/page/01")); // Update the current path when the component mounts
    }
  }, []);

  let imgURL1 = getCldImageUrl({
    src: 'NBT-Chandrayaan3/assets/fgImages/page1/sn5v7djagnh4wqetd8nf',
    width: 139,
    height: 92,
    fillBackground: true,
    crop: 'auto'
  });

  const pageData = lang?.find(language => language[state.lang.toLowerCase()] && language[state.lang.toLowerCase()][0]?.page1?.[0]);

  const para1 = pageData?.[state.lang.toLowerCase()]?.[0]?.page1?.[0]?.para1?.[0] || "Default content.";

  return (
    <>
      <section className="w-[100vw] h-[100vh] page1 bg-cover select-none">
        <div className="container mx-auto px-4 py-8">
          <TwoColumnLayout1
            imageSrc={imgURL1}
            altText="Grand Father Grand Son Table"
            width="139"
            height="92"
            className="bg-cover block ml-[30rem]"
          >
            <p className="text-justify text-3xl font-medium select-none">
              {para1}
            </p>
          </TwoColumnLayout1>
        </div>
      </section>
      <FooterStory
        pageNum1={"01"}
        pageNum2={"02"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page1;
