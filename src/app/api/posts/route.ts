import { Prisma } from "@prisma/client";
import { NextRequest } from "next/server";
import { fetchPosts } from "../../../../prisma/helpers/post";
import { SortType } from "@/components/features/Journal";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const orderType = searchParams.get("orderType") as SortType;
  const sortType = searchParams.get("sortType") as Prisma.SortOrder;

  const posts = await fetchPosts(orderType, sortType);

  return Response.json(posts);
}
