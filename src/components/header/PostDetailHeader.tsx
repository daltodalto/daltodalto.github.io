"use client";

import Image from "next/image";
import HeaderProfileButton from "../button/HeaderProfileButton";
import HeaderSearchButton from "../button/HeaderSearchButton";
import { useEffect, useState } from "react";

const PostDetailHeader = () => {
  const [isYellowLogo, setIsYellowLogo] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = totalScroll / windowHeight;

      setProgress(scroll);

      if (window.scrollY > 700 - 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    setIsYellowLogo(true);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-[0px] flex flex-row justify-center w-[100%] sm:h-[80px] h-[60px] z-50">
      <div className="flex justify-between items-center xl:w-[1200px] w-[100%] sm:px-[40px] px-[20px]">
        <Image
          className="sm:block hidden"
          width={140}
          height={(140 * 40) / 160}
          src="/dallogLogoDark.png"
          alt="로고"
        />
        <Image
          className="sm:hidden"
          width={104}
          height={(104 * 40) / 160}
          src="/dallogLogoDark.png"
          alt="로고"
        />
        <nav>
          <ul className="flex flex-row md:gap-[20px] gap-[10px]">
            <li>
              <HeaderSearchButton />
            </li>
            <li>
              <HeaderProfileButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PostDetailHeader;
