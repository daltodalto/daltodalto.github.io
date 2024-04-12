import { PostMeta } from "@/interfaces/post";
import MainArticle from "../article/MainArticle";
import { getTagNameForURL } from "@/service/tagName";

type MainHomeAllArticle = {
  allPostsMeta: PostMeta[];
  allTags: string[];
};

const MainHomeAllArticle = ({ allPostsMeta, allTags }: MainHomeAllArticle) => {
  return (
    <main className="flex w-full justify-center">
      <div className="flex flex-row justify-start xl:w-[1200px] w-full px-[20px] py-[40px] md:px-[40px] md:pb-[80px] md:pt-[60px] gap-[80px]">
        <section className="flex flex-1 flex-col gap-[80px]">
          <h2 className="md:flex hidden text-gray-900 font-semibold text-[22px]">
            최신글
          </h2>
          <div className="flex flex-1 flex-col gap-[80px]">
            {allPostsMeta.map((item, index) => {
              return (
                <MainArticle key={`${item.title}${index}`} postMeta={item} />
              );
            })}
          </div>
        </section>

        <section className="xl:flex flex-col hidden w-[320px] h-full">
          <div className="flex flex-col gap-[40px] w-full sticky top-[120px]">
            <h2 className="flex text-gray-900 font-semibold text-[22px]">
              관심
            </h2>
            <div className="flex flex-row flex-wrap w-full gap-[10px]">
              {allTags.map((item, index) => {
                return (
                  <a
                    key={`${item}${index}`}
                    href={`/tags/${getTagNameForURL(item)}`}
                  >
                    <div className="px-[12px] py-[8px] border-[1px] border-gray-300 text-gray-900 text-[16px]">
                      {item}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MainHomeAllArticle;
