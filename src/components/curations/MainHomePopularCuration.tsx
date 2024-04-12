import PopularArticle from "@/components/article/PopularArticle";
import { PostMeta } from "@/interfaces/post";

type MainHomePopularCuration = {
  allPostsMeta: PostMeta[];
};

const MainHomePopularCuration = ({ allPostsMeta }: MainHomePopularCuration) => {
  return (
    <section className="hidden md:flex justify-center border-b-[1px] border-gray-900">
      <div className="flex flex-col xl:w-[1200px] w-full items-start px-[40px] gap-[80px] py-[80px]">
        <h2 className="font-semibold text-[22px] text-gray-900">
          관심 받는 글
        </h2>
        <div className="flex flex-wrap justify-between xl:gap-x-[60px] gap-x-[40px] gap-y-[80px]">
          {allPostsMeta.map((item, index) => {
            if (index < 6) {
              return (
                <PopularArticle
                  key={`${item.title + index}`}
                  index={index}
                  postMeta={item}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default MainHomePopularCuration;
