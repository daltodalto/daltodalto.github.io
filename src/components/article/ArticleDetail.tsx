import { Post } from "@/interfaces/post";
import MarkDownBuilder from "../markDown/MarkDownBuilder";

type ArticleDetail = {
  post: Post;
};

const ArticleDetail = ({ post }: ArticleDetail) => {
  return (
    <main className="flex flex-row justify-center py-[120px]">
      <div className="xl:flex hidden w-[300px]" />
      <article className="w-full md:w-[600px] px-[20px] md:px-[0px]">
        <MarkDownBuilder post={post} />
      </article>
      <div className="xl:flex hidden w-[300px]">{/* TOC 영역 */}</div>
    </main>
  );
};

export default ArticleDetail;
