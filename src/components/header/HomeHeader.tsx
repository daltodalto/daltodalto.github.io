"use client";

import { LAYOUT_CONSTANTS } from "@/constants/layout";
import HeaderProfileButton from "../button/HeaderProfileButton";
import HeaderSearchButton from "../button/HeaderSearchButton";
import HomeLogo from "./logo/HomeLogo";
import { useEffect, useState } from "react";

export enum HeaderType {
  SCROLL_TOP,
  SCROLL_DOWN,
}

const HomeHeader = () => {
  const [type, setType] = useState<HeaderType>(HeaderType.SCROLL_TOP);
  const [progress, setProgress] = useState(0);

  const tailwindLargeHeaderHeight = `sm:h-[${LAYOUT_CONSTANTS.LARGE_HEADER_HEIGHT}px]`;
  const tailwindSmallHeaderHeight = `h-[${LAYOUT_CONSTANTS.SMALL_HEADER_HEIGHT}px]`;

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = totalScroll / windowHeight;

      setProgress(scroll);

      if (window.scrollY > LAYOUT_CONSTANTS.LARGE_HOME_BANNER_HEIGHT) {
        setType(HeaderType.SCROLL_DOWN);
      } else {
        setType(HeaderType.SCROLL_TOP);
      }
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-full fixed top-[0px]">
      <header
        className={`flex flex-row justify-center w-[100%] ${tailwindLargeHeaderHeight} ${tailwindSmallHeaderHeight} border-b-[1px] border-gray-900 z-50 ${
          type == HeaderType.SCROLL_DOWN
            ? "bg-blue backdrop-blur-[4px] bg-opacity-[0.8] md:animate-height-pulse animate-sm-height-pulse"
            : "bg-gray-100"
        }`}
      >
        <div className="flex justify-between items-center xl:w-[1200px] w-[100%] sm:px-[40px] px-[20px]">
          <HomeLogo screen="HOME" type={type} />
          <nav>
            <ul className="flex flex-row md:gap-[20px] gap-[10px]">
              <li>
                <HeaderSearchButton screen="HOME" type={type} />
              </li>
              <li>
                <HeaderProfileButton screen="HOME" type={type} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="w-full flex flex-row justify-start">
        <div
          className="h-[2px] bg-[#F2D024] filter-blur-4"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
