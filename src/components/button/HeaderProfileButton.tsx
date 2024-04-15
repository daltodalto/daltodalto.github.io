import Image from "next/image";
import { HeaderType } from "../header/HomeHeader";

type HeaderProfileButton = {
  type: HeaderType;
  screen: "DETAIL" | "HOME";
};
const HeaderProfileButton = ({ type, screen }: HeaderProfileButton) => {
  return (
    <a href="\profile">
      <div
        className={`sm:flex hidden items-center h-[40px] px-[18px] rounded-[100px] ${
          type == HeaderType.SCROLL_TOP && screen == "HOME" ? "bg-gray-900" : ""
        }`}
      >
        <Image width={24} height={24} src="/i_person.png" alt="프로필 아이콘" />
      </div>

      <div className="sm:hidden flex justify-center items-center h-[40px] w-[40px]">
        {type == HeaderType.SCROLL_TOP ? (
          <Image
            width={28}
            height={28}
            src="/i_person_dark.png"
            alt="프로필 아이콘"
          />
        ) : (
          <Image
            width={28}
            height={28}
            src="/i_person.png"
            alt="프로필 아이콘"
          />
        )}
      </div>
    </a>
  );
};

export default HeaderProfileButton;
