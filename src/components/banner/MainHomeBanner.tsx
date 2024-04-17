import { LAYOUT_CONSTANTS } from "@/constants/layout";

const MainHomeBanner = () => {
  return (
    <section
      className={`hidden lg:flex justify-center items-center h-[500px] border-b-[1px] border-gray-900`}
    >
      <div className="flex flex-col gap-[30px] xl:w-[1200px] w-full h-full pl-[40px] justify-center items-start">
        <h1 className="text-gray-800 text-[36px] font-semibold">
          새 롭 지 만 익 숙 하 게
        </h1>
        <h2 className="text-gray-700 font-medium text-[24px]">
          이 모든 것이 나의 생과 함께하길 기대한다.
        </h2>
      </div>
    </section>
  );
};

export default MainHomeBanner;
