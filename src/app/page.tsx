import MainHomeBanner from "@/components/banner/MainHomeBanner";
import Header from "@/components/common/Header";
import { PostSort } from "@/interfaces/post";
import { getAllPostMeta, getAllPosts } from "@/lib/api";

export default function Home() {
  const allPostsMeta = getAllPostMeta(PostSort.Popular);
  console.log(allPostsMeta);
  return (
    <>
      <Header />
      <MainHomeBanner />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
