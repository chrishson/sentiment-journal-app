import { SortType } from "@/components/features/Journal";
import { Prisma } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(datetime: Date) {
  return new Date(datetime).toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function roundScore(score: number) {
  return parseFloat(score.toFixed(2));
}

export async function getPosts(
  orderType: SortType,
  sortType: Prisma.SortOrder
) {
  const res = await fetch(
    `/api/posts?orderType=${orderType}&sortType=${sortType}`,
    { cache: "no-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
