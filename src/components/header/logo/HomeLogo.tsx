import Image from "next/image";
import { HeaderType } from "../HomeHeader";

type HomeLogo = {
  type: HeaderType;
  screen: "HOME" | "DETAIL";
};
const HomeLogo = ({ type, screen }: HomeLogo) => {
  if (type == HeaderType.SCROLL_TOP) {
    return (
      <>
        <Image
          className="sm:block hidden"
          width={140}
          height={(140 * 40) / 160}
          src={`${
            screen == "DETAIL" ? "/dallogLogo.png" : "/dallogLogoDark.png"
          }`}
          alt="로고"
        />
        <Image
          className="sm:hidden"
          width={104}
          height={(104 * 40) / 160}
          src="/dallogLogoDark.png"
          alt="로고"
        />
      </>
    );
  } else {
    return (
      <>
        <Image
          className="sm:block hidden"
          width={140}
          height={(140 * 40) / 160}
          src="/dallogLogo.png"
          alt="로고"
        />
        <Image
          className="sm:hidden"
          width={104}
          height={(104 * 40) / 160}
          src="/dallogLogo.png"
          alt="로고"
        />
      </>
    );
  }
};

export default HomeLogo;
