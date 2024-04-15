import { Post, PostMeta, PostSort } from "@/interfaces/post";
import { join } from "path";
import fs from "fs";
import matter, { language } from "gray-matter";
import { estimateReadingTime } from "@/service/readTime";
import { getTagNameForURL } from "@/service/tagName";

const POST_ROOT_DIR = join(process.cwd(), "_posts");

export function getPostBySlug(
  language: string,
  category: string,
  slug: string
): Post {
  const realSlug = decodeURIComponent(slug.replace(/\.md$/, ""));
  const fullPath = join(
    `${POST_ROOT_DIR}/${language}/${category}`,
    `${realSlug}.md`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const readMin = estimateReadingTime(content);

  const tags = data.tags.map((tagString: string) => {
    let realTags: Tag = {
      name: tagString,
      path: `$/${language}/tags/${getTagNameForURL(tagString)}`,
      id: getTagNameForURL(tagString),
    };
    return realTags;
  });

  return { ...data, slug: realSlug, content, category, readMin, tags } as Post;
}

export function getPostMetaBySlug(
  language: string,
  category: string,
  slug: string
): PostMeta {
  const realSlug = decodeURIComponent(slug.replace(/\.md$/, ""));
  const fullPath = join(
    `${POST_ROOT_DIR}/${language}/${category}`,
    `${realSlug}.md`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const readMin = estimateReadingTime(content);
  const { id, title, date, description } = data as Post;

  const tags = data.tags.map((tagString: string) => {
    let realTags: Tag = {
      name: tagString,
      path: `/${language}/tags/${getTagNameForURL(tagString)}`,
      id: getTagNameForURL(tagString),
    };
    return realTags;
  });

  return {
    id,
    path: `${language}/${category}/${realSlug}`,
    title,
    description,
    date,
    tags,
    readMin,
  } as PostMeta;
}

export function getAllPosts(language: string = "kr"): Post[] {
  let posts: Post[] = [];
  const categories = fs.readdirSync(`${POST_ROOT_DIR}/${language}`, {
    withFileTypes: true,
  });
  categories.map((category) => {
    const files = fs.readdirSync(
      `${POST_ROOT_DIR}/${language}/${category.name}`
    );
    const markDownFileName = files.filter((item) => item.indexOf(".md") != -1);
    const categoryPost = markDownFileName.map((slug) =>
      getPostBySlug(language, category.name, slug)
    );
    posts = [...posts, ...categoryPost];
  });
  return posts;
}

export function getAllTags(language: string = "kr") {
  let allPosts = getAllPostMeta(PostSort.Recently, language);
  let allTags = new Set<string>(); // 태그 이름을 저장하기 위한 Set

  allPosts.forEach((item) => {
    item.tags.forEach((tag) => {
      allTags.add(tag.name); // 태그 이름을 Set에 추가
    });
  });

  // Set에 저장된 이름을 사용하여 Tag 객체 배열 생성
  const tagsArray: Tag[] = Array.from(allTags).map((tagName) => {
    return {
      name: tagName,
      path: `${language}/tags/${getTagNameForURL(tagName)}`, // path 생성 로직은 상황에 맞게 조정 필요
      id: getTagNameForURL(tagName),
    };
  });

  return tagsArray;
}

export function getPostsByCategory(language: string = "kr", category: string) {
  let post = getAllPosts(language);
  let filted = post.filter((item) => {
    return item.category == category;
  });
  return filted;
}

export function getAllPostMeta(
  sortBy: PostSort = PostSort.Recently,
  language: string = "kr",
  tagId: string | undefined = undefined
): PostMeta[] {
  let meta: PostMeta[] = [];
  const categories = fs.readdirSync(`${POST_ROOT_DIR}/${language}`, {
    withFileTypes: true,
  });
  categories.map((category) => {
    const files = fs.readdirSync(
      `${POST_ROOT_DIR}/${language}/${category.name}`
    );
    const markDownFileName = files.filter((item) => item.indexOf(".md") != -1);
    const categoryMeta = markDownFileName.map((slug) =>
      getPostMetaBySlug(language, category.name, slug)
    );
    meta = [...meta, ...categoryMeta];
  });

  if (tagId) {
    meta = meta.filter((item) => {
      return item.tags.some((tag) => tag.id === tagId);
    });
  }

  if (sortBy == PostSort.Recently) {
    meta.sort(function (a, b) {
      const A = a.date;
      const B = b.date;

      if (A < B) return 1;
      else if (A > B) return -1;
      else return 0;
    });
    return meta;
  } else if (sortBy == PostSort.Popular) {
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

export function getCategoryPostMetas(
  categoryName: string,
  language: string = "kr"
): PostMeta[] {
  let meta: PostMeta[] = [];
  const categories = fs.readdirSync(POST_ROOT_DIR, { withFileTypes: true });
  categories.map((category) => {
    if (categoryName == category.name) {
      const files = fs.readdirSync(
        `${POST_ROOT_DIR}/${language}/${category.name}`
      );
      const markDownFileName = files.filter(
        (item) => item.indexOf(".md") != -1
      );
      const categoryMeta = markDownFileName.map((slug) =>
        getPostMetaBySlug(language, category.name, slug)
      );
      meta = [...meta, ...categoryMeta];
    }
  });
  return meta;
}
