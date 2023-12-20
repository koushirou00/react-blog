// src/types/postTypes.ts
export type PostObj = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

export type FetchPostResponse = {
  message: string;
  post: PostObj;
};

export type FetchPostsResponse = {
  message: string;
  posts: PostObj[];
};
