"use client";
import FooterStory from "@/app/_Components/FooterStory";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import TwoColumnLayout4 from "@/app/_Layouts/TwoColumnLayout4";
import { getCldImageUrl } from "next-cloudinary";
// import { useGlobalState } from "@/app/context/GlobalStateContext";
// import  lang  from "../../../utils/lang";

function Page2() {
  const router = useRouter();
  // const { state, setCurrentPath } = useGlobalState();

  const prevPageHandler = () => {
    router.push("/page/01");
  };

  const nextPageHandler = () => {
    router.push("/page/03");
  };

  // useEffect(() => {
  //     if (state.currentPath) {
  //       setCurrentPath(router.push("/page/02")); // Update the current path when the component mounts
  //     }
  //   }, []);

  let imgURL1 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page2/gd2m5ir1xdflrfxxfduv",
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    // width: 960,
    // height: 600,
    // fillBackground: true,
    // crop: 'auto'
  });

  let imgURL2 = getCldImageUrl({
    src: "NBT-Chandrayaan3/assets/fgImages/page2/marjuyovclvtt9mld98d",
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    // width: 960,
    // height: 600,
    // fillBackground: true,
    // crop: 'auto'
  });

  // let imgURL1 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/fgImages/page2/gd2m5ir1xdflrfxxfduv",
  // });

  // let imgURL2 = getCldImageUrl({
  //   src: "NBT-Chandrayaan3/assets/fgImages/page2/marjuyovclvtt9mld98d",
  // });

  

  // const pageData = lang?.[0]?.english?.[0]?.page2?.[0]; // Access page1 using optional chaining
  // console.log("Page Data:", pageData); // Log the fetched page data
  
  //   // If pageData exists, fetch para1, otherwise use fallback text
  //   //const para1 = pageData?.para1?.[0] || "Default content.";
    
  //   //const para2 = pageData?.para2?.[0];
    

  //   const para1 = Array.isArray(pageData?.para1) ? pageData.para1 : [];
  //   console.log(para1);
  //   const para2 = Array.isArray(pageData?.para2) ? pageData.para2 : [];
  //   console.log(para2);

  // const pageData = lang?.find(
  //   (language) => language[state.lang.toLowerCase()] && language[state.lang.toLowerCase()][0]?.page2?.[0]
  // );

  // // Extract para1 and para2 dynamically from pageData
  // const para1 = pageData?.[state.lang.toLowerCase()]?.[0]?.page2?.[0]?.para1 || ["Default content for para1"];
  // const para2 = pageData?.[state.lang.toLowerCase()]?.[0]?.page2?.[0]?.para2 || ["Default content for para2"];


  return (
    <>
      <section className="w-[100vw] h-[100vh] page2 bg-cover select-none">
        
        <TwoColumnLayout4
          
          textContent1={
            <>
              {/* {Array.isArray(para1) && para1.length > 0
                ? para1.map((text, index) => (
                    <p key={index} className="text-justify text-lg font-medium select-none">
                      {text}
                    </p>
                  ))
                : <p className="text-justify text-lg font-medium select-none">No content available.</p>} */}
            </>
          }
          textContent2={
            <>
              {/* {Array.isArray(para2) && para2.length > 0
                ? para2.map((text, index) => (
                    <p key={index} className="text-justify text-lg font-medium select-none">
                      {text}
                    </p>
                  ))
                : <p className="text-justify text-lg font-medium select-none">No content available.</p>} */}
            </>
          }
          
          imageSrc1={imgURL1}
          altText1="bed grandfather grandson moon story"
          width1={700}
          height1={200}
          imageSrc2={imgURL2}
          altText2="bed grandfather grandson moon story"
          width2={1000}
          height2={350}
          className="mt-8"
        ></TwoColumnLayout4>
      </section>
      <FooterStory
        pageNum1={"03"}
        pageNum2={"04"}
        onPrev={prevPageHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default Page2;
