"use client";
import { useState } from "react";
import Image from "next/image";
import FooterMain from "./_Components/FooterMain";
import Modal from "./_Components/Modal";
import LanguageBox from "./_Components/LanguageBox";
import { CldImage } from "next-cloudinary";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  // If the cloud name is not set, log an error and return
  if (!cloudinaryCloudName) {
    console.error("Cloudinary Cloud Name is missing from the environment variables.");
    return null; // Optionally return a fallback UI or nothing
  }

  return (
    <>
      <section className="w-[100vw] h-[100vh] bgHome overflow-hidden">
        <div className="flex items-end justify-end pr-5 py-10">
          <Image
            src="/images/icons/lang.png"
            alt="Language Icon"
            width={56}
            height={56}
            quality={100}
            priority={true}
            className="w-14 h-14 animate-pulse cursor-pointer"
            onClick={openModal}
          />
        </div>
        <div className="xl:w-[30rem] xl:max-h-80 mx-auto top-12 flex items-center justify-center">
          {/* <Image
            src="/images/home/homePageBG1.png"
            alt="Chandrayaan 3"
            width={610}
            height={610}
            quality={100}
            priority={true}
            className="mt-5 2xl:w-[38rem] 2xl:bottom-48"
            style={{ height: "auto", width: "auto" }}
          /> */}
          <CldImage
            src={`https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/v1734583824/NBT-Chandrayaan3/assets/coverImages/home/znrri581t1m0yfeg2emd.png`}
            width={2362}
            height={2834}
            crop={{ type: "auto", source: true }}
            alt="Chandrayaan3 Cover Page"
            className="mt-5 2xl:w-[38rem] 2xl:bottom-48"
            style={{ height: "auto", width: "auto" }}
          />
        </div>
      </section>
      <FooterMain />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        titleName="Select Your Language"
        body={<LanguageBox />}
      />
    </>
  );
}
