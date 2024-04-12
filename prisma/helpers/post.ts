import { Prisma } from "@prisma/client";
import prisma from "../../src/lib/prisma";
import { SortType } from "@/components/features/Journal";

export const fetchPosts = (
  sortType: SortType = "createdAt",
  sortOrder: Prisma.SortOrder = "desc"
) => {
  return prisma.post.findMany({
    orderBy: {
      [sortType]: sortOrder,
    },
  });
};

export const findPost = (id: number) => {
  return prisma.post.findUnique({
    where: { id: Number(id) },
  });
};

export const createPost = (data: Prisma.PostCreateInput) => {
  return prisma.post.create({
    data: {
      title: data.title,
      content: data.content,
      sentimentScore: data.sentimentScore,
      sentimentMagnitude: data.sentimentMagnitude,
    },
  });
};
