"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/app/context/GlobalStateContext";
import  lang  from "../../../utils/lang";
function Page3() {
  const router = useRouter();
  const { state, setCurrentPath } = useGlobalState();

  const prevPageHandler = () => {
    router.push("/page/02");
  };

  const nextPageHandler = () => {
    router.push("/page/04");
  };

  useEffect(() => {
    if (state.currentPath) {
      setCurrentPath(router.push("/page/03")); // Update the current path when the component mounts
    }
  }, []);

  const pageData = lang?.find(
    (language) =>language[state.lang.toLowerCase()] &&language[state.lang.toLowerCase()][0]?.page3?.[0]
  );

  const para1 =pageData?.[state.lang.toLowerCase()]?.[0]?.page3?.[0]?.para1 || "Default content.";
  return (
    <>
      <section className="w-[100vw] h-[100vh] page3 bg-cover select-none">
        <div className="ml-[45rem] py-[4rem] flex flex-col justify-center gap-3 text-slate-800 text-2xl text-justify font-medium">
        {Array.isArray(para1) && para1.length > 0
                ? para1.map((text, index) => (
                    <p key={index} className="text-justify text-lg font-medium select-none">
                      {text}
                    </p>
                  ))
                : <p className="text-justify text-lg font-medium select-none">No content available.</p>}
        </div>
      </section>
      <FooterStory
        pageNum1={"04"}
        pageNum2={"05"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page3;
