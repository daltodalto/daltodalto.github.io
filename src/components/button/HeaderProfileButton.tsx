import Image from "next/image";

const HeaderProfileButton = () => {
  return (
    <a href="\profile">
      <div className="sm:flex hidden items-center h-[40px] px-[18px] bg-gray-900 rounded-[100px]">
        <Image width={24} height={24} src="/i_person.png" alt="프로필 아이콘" />
      </div>

      <div className="sm:hidden flex justify-center items-center h-[40px] w-[40px]">
        <Image
          width={28}
          height={28}
          src="/i_person_dark.png"
          alt="프로필 아이콘"
        />
      </div>
    </a>
  );
};

export default HeaderProfileButton;
