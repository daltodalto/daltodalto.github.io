import { PostMeta } from "@/interfaces/post";
import Image from "next/image";

type MainArticle = {
  postMeta: PostMeta;
};

const MainArticle = ({ postMeta }: MainArticle) => {
  return (
    <article className="flex flex-1">
      <a
        className="flex flex-1 flex-row gap-[20px] justify-between"
        href={postMeta.path}
      >
        <div className="flex flex-1 flex-col gap-[20px]">
          <div className="flex flex-col gap-[6px]">
            <h1 className="font-semibold md:text-[20px] text-[15px] leading-[22px] md:leading-[28px] text-gray-800">
              {postMeta.title}
            </h1>
            <h2 className="font-medium text-[10px] md:text-[14px] leading-[16px] md:leading-[22px] text-gray-700">
              {postMeta.description}
            </h2>
          </div>
          <div className="hidden md:flex flex-row flex-wrap gap-[8px]">
            {postMeta.tags.map((item, index) => {
              return (
                <div
                  className="py-[4px] px-[10px] border-gray300 border-[1px] rounded-[100px] text-[14px] text-gray-800"
                  key={`${item}${index}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <Image
          className="md:hidden bg-gray-200 border-[1px] border-gray-900"
          src={`/${postMeta.id}_cover.png`}
          width={120}
          height={90}
          alt={`article-${postMeta.id}-image`}
        ></Image>
        <Image
          className="hidden md:block bg-gray-200 border-[1px] border-gray-900"
          src={`/${postMeta.id}_cover.png`}
          width={200}
          height={150}
          alt={`article-${postMeta.id}-image`}
        ></Image>
      </a>
    </article>
  );
};

export default MainArticle;
