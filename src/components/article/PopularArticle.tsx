import { PostMeta } from "@/interfaces/post";
import { convertDateSimpleKR } from "@/service/date";
import Image from "next/image";

type PopularArticle = {
  index: number;
  postMeta: PostMeta;
};

const PopularArticle = ({ index, postMeta }: PopularArticle) => {
  return (
    <>
      <article className="flex flex-row justify-start xl:w-article-popular3-width w-article-popular2-width">
        <a
          href={`${postMeta.path}`}
          className="flex flex-row justify-start w-full"
        >
          <div className="leading-[100%] w-[62px] font-medium text-[24px] text-gray-600">
            {getNumberString()}
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-[6px]">
                <h1 className="text-[22px] break-all font-medium leading-[120%] line-clamp-2 text-gray-900">
                  {postMeta.title}
                </h1>
                <div className="flex flex-row gap-[10px] text-gray-500 text-[16px]">
                  <time>{convertDateSimpleKR(postMeta.date)}</time>
                  <div className="flex items-center gap-[4px]">
                    <div>
                      <Image
                        width={16}
                        height={16}
                        src="/timer.png"
                        alt="걸리는 시간"
                      />
                    </div>
                    {postMeta.readMin}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-[6px]">
                {postMeta.tags.map((item, index) => {
                  return (
                    <div
                      className="border-gray300 px-[10px] py-[4px] border-[1px] rounded-[20px] text-[14px] text-gray-800"
                      key={`${item.name}${index}`}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </a>
      </article>
    </>
  );

  function getNumberString() {
    if (index == 0) {
      return "하나.";
    } else if (index == 1) {
      return "둘.";
    } else if (index == 2) {
      return "셋.";
    } else if (index == 3) {
      return "넷.";
    } else if (index == 4) {
      return "다섯.";
    } else if (index == 5) {
      return "여섯.";
    } else {
      return "";
    }
  }
};

export default PopularArticle;
