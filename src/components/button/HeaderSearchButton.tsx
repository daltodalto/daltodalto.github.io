import Image from "next/image";

const HeaderSearchButton = () => {
  return (
    <a href="/search">
      <div className="sm:flex hidden items-center h-[40px] px-[18px] bg-gray-900 rounded-[100px] text-[15px] text-gray-100 gap-[4px]">
        <Image width={20} height={20} src="/search.png" alt="프로필 아이콘" />
        검색
      </div>

      <div className="sm:hidden flex justify-center items-center h-[40px] w-[40px]">
        <Image
          className="sm:hidden"
          width={22}
          height={22}
          src="/search_dark.png"
          alt="프로필 아이콘"
        />
      </div>
    </a>
  );
};

export default HeaderSearchButton;
