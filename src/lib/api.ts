import { Post, PostMeta, PostSort } from "@/interfaces/post";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";

const POST_ROOT_DIR = join(process.cwd(), "_posts/kr");

export function getPostBySlug(category: string, slug: string): Post {
  const realSlug = decodeURIComponent(slug.replace(/\.md$/, ""));
  const fullPath = join(`${POST_ROOT_DIR}/${category}`, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content, category } as Post;
}

export function getPostMetaBySlug(category: string, slug: string): PostMeta {
  const realSlug = decodeURIComponent(slug.replace(/\.md$/, ""));
  const fullPath = join(`${POST_ROOT_DIR}/${category}`, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const { id, title, date, description, tags } = data as Post;
  return {
    id,
    path: `${category}/${realSlug}`,
    title,
    description,
    date,
    tags,
  } as PostMeta;
}

export function getAllPosts(): Post[] {
  let posts: Post[] = [];
  const categories = fs.readdirSync(POST_ROOT_DIR, { withFileTypes: true });
  categories.map((category) => {
    const files = fs.readdirSync(`${POST_ROOT_DIR}/${category.name}`);
    const markDownFileName = files.filter((item) => item.indexOf(".md") != -1);
    const categoryPost = markDownFileName.map((slug) =>
      getPostBySlug(category.name, slug)
    );
    posts = [...posts, ...categoryPost];
  });
  console.log(posts);
  return posts;
}

export function getAllPostMeta(
  sortBy: PostSort = PostSort.Recently
): PostMeta[] {
  let meta: PostMeta[] = [];
  const categories = fs.readdirSync(POST_ROOT_DIR, { withFileTypes: true });
  categories.map((category) => {
    const files = fs.readdirSync(`${POST_ROOT_DIR}/${category.name}`);
    const markDownFileName = files.filter((item) => item.indexOf(".md") != -1);
    const categoryMeta = markDownFileName.map((slug) =>
      getPostMetaBySlug(category.name, slug)
    );
    meta = [...meta, ...categoryMeta];
  });

  if (sortBy == PostSort.Popular) {
    meta.sort(function (a, b) {
      const A = a.date;
      const B = b.date;

      if (A < B) return 1;
      else if (A > B) return -1;
      else return 0;
    });
    return meta;
  } else if (sortBy == PostSort.Recently) {
    meta.sort(function (a, b) {
      const A = a.totalCnt;
      const B = b.totalCnt;

      if (A < B) return 1;
      else if (A > B) return -1;
      else return 0;
    });
    return meta;
  }

  return meta;
}

export function getCategoryPostMetas(categoryName: string): PostMeta[] {
  let meta: PostMeta[] = [];
  const categories = fs.readdirSync(POST_ROOT_DIR, { withFileTypes: true });
  categories.map((category) => {
    if (categoryName == category.name) {
      const files = fs.readdirSync(`${POST_ROOT_DIR}/${category.name}`);
      const markDownFileName = files.filter(
        (item) => item.indexOf(".md") != -1
      );
      const categoryMeta = markDownFileName.map((slug) =>
        getPostMetaBySlug(category.name, slug)
      );
      meta = [...meta, ...categoryMeta];
    }
  });
  return meta;
}
