import Image from "next/image";
import { HeaderType } from "../header/HomeHeader";

type HeaderSearchButton = {
  type: HeaderType;
  screen: "DETAIL" | "HOME";
};
const HeaderSearchButton = ({ type, screen }: HeaderSearchButton) => {
  return (
    <a href="/search">
      <div
        className={`sm:flex hidden items-center h-[40px] px-[18px]  rounded-[100px] text-[15px] text-gray-100 gap-[4px] ${
          type == HeaderType.SCROLL_TOP && screen == "HOME" ? "bg-gray-900" : ""
        }`}
      >
        <Image width={20} height={20} src="/search.png" alt="프로필 아이콘" />
        검색
      </div>

      <div
        className={`sm:hidden flex justify-center items-center h-[40px] w-[40px]`}
      >
        {type == HeaderType.SCROLL_TOP ? (
          <Image
            className="sm:hidden"
            width={22}
            height={22}
            src="/search_dark.png"
            alt="프로필 아이콘"
          />
        ) : (
          <Image width={22} height={22} src="/search.png" alt="프로필 아이콘" />
        )}
      </div>
    </a>
  );
};

export default HeaderSearchButton;
