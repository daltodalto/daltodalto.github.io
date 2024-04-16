import { Post } from "@/interfaces/post";
import { TOC } from "@/interfaces/toc";
import MarkDownBuilder from "../markDown/MarkDownBuilder";
import TOCContainer from "../toc/TOCContainer";

type ArticleDetail = {
  post: Post;
  toc: TOC[];
};

const ArticleDetail = ({ post, toc }: ArticleDetail) => {
  return (
    <main className="flex flex-row justify-center md:py-[120px] py-[60px] bg-white mt-[600px] relative z-30 ">
      <div className="xl:flex hidden w-[300px]" />
      <article className="flex flex-col w-full md:w-[600px] px-[20px] md:px-[0px] gap-[40px]">
        <div className="md:hidden border-b-[0.6px] pb-[40px] border-gray-200">
          <h1 className="text-[28px] font-bold leading-[150%]">{post.title}</h1>
        </div>
        <MarkDownBuilder post={post} />
      </article>
      <div className="xl:flex hidden w-[300px]">
        <TOCContainer toc={toc} />
      </div>
    </main>
  );
};

export default ArticleDetail;
