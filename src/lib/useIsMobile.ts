"use client";

import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { useState, useEffect } from "react";

// Hook
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const detectMobile = () => {
        if (window.innerWidth <= LAYOUT_CONSTANTS.MOBILE_WIDTH) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };

      window.addEventListener("resize", detectMobile);
      detectMobile();
      return () => window.removeEventListener("resize", detectMobile);
    }
  }, []);

  return isMobile;
}
