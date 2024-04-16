"use client";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { useEffect } from "react";
import { useIsMobile } from "./useIsMobile";

const ScrollToHash = ({ offset = 80 }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleClick = (e: any) => {
      const target = e.target;
      if (target.tagName === "A" && target.closest(".toc")) {
        e.preventDefault();
        const targetId = target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        let bannerHeight = isMobile
          ? LAYOUT_CONSTANTS.SMALL_DETAIL_BANNER_HEIGHT
          : LAYOUT_CONSTANTS.LARGE_DETAIL_BANNER_HEIGHT;
        let headerHeight = isMobile
          ? LAYOUT_CONSTANTS.SMALL_HEADER_HEIGHT
          : LAYOUT_CONSTANTS.LARGE_HEADER_HEIGHT;
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop + bannerHeight - headerHeight,
            behavior: "smooth",
          });
        }
      }
    };

    // 페이지 로드 시 해시 처리

    document.querySelectorAll(".toc a").forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.querySelectorAll(".toc a").forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [isMobile]);

  return null;
};

export default ScrollToHash;
