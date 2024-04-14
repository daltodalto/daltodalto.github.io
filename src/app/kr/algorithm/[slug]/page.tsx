import PostDetailHeroBanner from "@/components/banner/PostDetailHeroBanner";
import PostDetailHeader from "@/components/header/PostDetailHeader";
import { getPostBySlug, getPostsByCategory } from "@/lib/api";
import { getPostPathInfo } from "@/service/postInfo";

type Params = {
  params: {
    slug: string;
  };
};

export default function DetailPage({ params }: Params) {
  const { category, language } = getPostPathInfo();
  const post = getPostBySlug(language, category, params.slug);

  return (
    <>
      <PostDetailHeader />
      <PostDetailHeroBanner post={post} />
    </>
  );
}

export async function generateStaticParams() {
  const { category, language } = getPostPathInfo();

  const posts = getPostsByCategory(language, category);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
