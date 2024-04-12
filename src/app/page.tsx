import MainHomeBanner from "@/components/banner/MainHomeBanner";
import Header from "@/components/common/Header";
import MainHomeAllArticle from "@/components/curations/MainHomeAllArticle";
import MainHomePopularCuration from "@/components/curations/MainHomePopularCuration";
import { PostSort } from "@/interfaces/post";
import { getAllPostMeta, getAllTags } from "@/lib/api";

export default function Home() {
  const popularPostsMeta = getAllPostMeta(PostSort.Popular);
  const allPostsMeta = getAllPostMeta(PostSort.Recently);
  const allTags = getAllTags();

  return (
    <div className="pt-[80px]">
      <Header />
      <MainHomeBanner />
      <MainHomePopularCuration allPostsMeta={popularPostsMeta} />
      <MainHomeAllArticle allPostsMeta={allPostsMeta} allTags={allTags} />
    </div>
  );
}
