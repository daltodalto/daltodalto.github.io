import Image from "next/image";
import HeaderProfileButton from "../button/HeaderProfileButton";
import HeaderSearchButton from "../button/HeaderSearchButton";

const Header = () => {
  return (
    <header className="fixed top-[0px] flex flex-row justify-center w-[100%] sm:h-[80px] h-[60px] border-b-[1px] border-gray-900 bg-white z-50">
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

export default Header;
