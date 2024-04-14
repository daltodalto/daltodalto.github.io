import { Post } from "@/interfaces/post";
import MarkDownBuilder from "../markDown/MarkDownBuilder";

type ArticleDetail = {
  post: Post;
};

const ArticleDetail = ({ post }: ArticleDetail) => {
  return (
    <main className="flex flex-row justify-center md:py-[120px] py-[60px]">
      <div className="xl:flex hidden w-[300px]" />
      <article className="flex flex-col w-full md:w-[600px] px-[20px] md:px-[0px] gap-[40px]">
        <div className="md:hidden border-b-[0.6px] pb-[40px] border-gray-200">
          <h1 className="text-[28px] font-bold leading-[150%]">{post.title}</h1>
        </div>
        <MarkDownBuilder post={post} />
      </article>
      <div className="xl:flex hidden w-[300px]">{/* TOC 영역 */}</div>
    </main>
  );
};

export default ArticleDetail;
