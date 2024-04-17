import MainHomeBanner from "@/components/banner/MainHomeBanner";
import MainHomeAllArticle from "@/components/curations/MainHomeAllArticle";
import MainHomePopularCuration from "@/components/curations/MainHomePopularCuration";
import { PostSort } from "@/interfaces/post";
import { getAllPostMeta, getAllTags } from "@/lib/api";
import HomeHeader from "@/components/header/HomeHeader";
import path from "path";
import { getHomeLanguage } from "@/service/postInfo";
const categoryDirectoryName = path.dirname(__dirname);
const language = getHomeLanguage(categoryDirectoryName);

export default function Home() {
  const popularPostsMeta = getAllPostMeta(PostSort.Popular);
  const allPostsMeta = getAllPostMeta(PostSort.Recently);
  const allTags = getAllTags();

  return (
    <div className="pt-[80px]">
      <HomeHeader language={language} />
      <MainHomeBanner />
      <MainHomePopularCuration allPostsMeta={popularPostsMeta} />
      <MainHomeAllArticle allPostsMeta={allPostsMeta} allTags={allTags} />
    </div>
  );
}
