import { Post } from "@/interfaces/post";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { components } from "./MarkDownCustomComponents";
type MarkDownBuilder = {
  post: Post;
};

const MarkDownBuilder = ({ post }: MarkDownBuilder) => {
  return (
    <div>
      <Markdown
        className="md-to-html"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {post.content}
      </Markdown>
    </div>
  );
};

export default MarkDownBuilder;
