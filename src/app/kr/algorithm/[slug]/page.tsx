import ArticleDetail from "@/components/article/ArticleDetail";
import PostDetailHeader from "@/components/header/PostDetailHeader";
import PostDetailHeroBanner from "@/components/banner/PostDetailHeroBanner";
import { getPostPathInfo } from "@/service/postInfo";
import { getPostBySlug, getPostsByCategory } from "@/lib/api";

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
      <ArticleDetail post={post} />
    </>
  );
}

export async function generateStaticParams() {
  const { language, category } = getPostPathInfo();
  const posts = getPostsByCategory(language, category);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
