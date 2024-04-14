import { Post } from "@/interfaces/post";

type PostDetailHeroBanner = {
  post: Post;
};

const PostDetailHeroBanner = ({ post }: PostDetailHeroBanner) => {
  return (
    <section
      className="flex flex-1 md:h-[600px] h-[300px] justify-center "
      style={{
        backgroundImage: "url(/defaultCover.jpg)", // 동적으로
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full md:h-[600px] h-[300px]  bg-[#171E24] bg-opacity-[0.35] absolute top-0 left-0"></div>
      <div className="hidden md:flex flex-col justify-end w-[100%] md:w-[700px] px-[20px] pb-[100px]">
        <h1 className="font-semibold text-[40px] text-gray-100 text-shadow-default z-50">
          {post.title}
        </h1>
      </div>
    </section>
  );
};

export default PostDetailHeroBanner;
