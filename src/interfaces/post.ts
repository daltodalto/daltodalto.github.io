export type Post = {
  slug: string;
  category: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  author: string;
  id: string;
  project: string;
  readMin: number;
  totalCnt: number;
  monthlyCnt: number;
  weeklyCnt: number;
  content: string;
};

export type PostMeta = {
  id: string;
  path: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  totalCnt: number;
};

export enum PostSort {
  Recently = "최신순",
  Popular = "인기순",
}