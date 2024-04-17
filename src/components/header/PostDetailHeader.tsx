"use client";

import HeaderProfileButton from "../button/HeaderProfileButton";
import HeaderSearchButton from "../button/HeaderSearchButton";
import { useEffect, useState } from "react";
import { HeaderType } from "./HomeHeader";
import HomeLogo from "./logo/HomeLogo";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { useIsMobile } from "@/lib/useIsMobile";

type PostDetailHeader = {
  language: string;
};

const PostDetailHeader = ({ language }: PostDetailHeader) => {
  const isMobile = useIsMobile();
  const [type, setType] = useState<HeaderType>(HeaderType.SCROLL_TOP);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = totalScroll / windowHeight;

      setProgress(scroll);
      const targetSize = isMobile
        ? LAYOUT_CONSTANTS.SMALL_DETAIL_BANNER_HEIGHT
        : LAYOUT_CONSTANTS.LARGE_DETAIL_BANNER_HEIGHT;

      if (window.scrollY > targetSize) {
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
  }, [isMobile]);

  return (
    <div className="flex flex-col w-full fixed top-[0px] z-50 ">
      <header
        className={`flex flex-row justify-center w-[100%] sm:h-[80px] h-[60px]  ${
          type == HeaderType.SCROLL_DOWN
            ? "bg-blue backdrop-blur-[4px] bg-opacity-[0.8] sm:animate-height-pulse animate-sm-height-pulse"
            : ""
        }`}
      >
        <div className="flex justify-between items-center xl:w-[1200px] w-[100%] sm:px-[40px] px-[20px]">
          <HomeLogo screen="DETAIL" type={type} language={language} />
          <nav>
            <ul className="flex flex-row md:gap-[20px] gap-[10px]">
              <li>
                <HeaderSearchButton screen="DETAIL" type={type} />
              </li>
              <li>
                <HeaderProfileButton screen="DETAIL" type={type} />
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

export default PostDetailHeader;
