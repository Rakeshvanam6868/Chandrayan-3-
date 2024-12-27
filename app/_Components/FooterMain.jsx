"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function FooterMain() {
  const currentYear = new Date().getFullYear();

  const navigate = useRouter();

  const pageHandler = (e) => {
    e.preventDefault();
    navigate.push("/author");
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 w-full h-16 bg-[#c4122f] text-white flex items-center justify-between">
        <h1 className="pl-4 cursor-pointer">CopyRights © {currentYear} NBT</h1>
        <div
          className="flex items-center justify-center gap-10 cursor-pointer"
          onClick={pageHandler}
        >
          <Image
            src="/images/icons/moon-icon.png"
            alt="moon"
            width={56}
            height={56}
            quality={100}
            className="w-14 h-14 absolute bottom-10 hover:animate-spin"
          />
          <h1 className="py-10 mt-5">Index</h1>
        </div>
        <h1 className="pr-4 cursor-pointer">Developed by 5THDT</h1>
      </div>
    </>
  );
}

export default FooterMain;
