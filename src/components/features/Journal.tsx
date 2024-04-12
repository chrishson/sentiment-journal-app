"use client";

import { useState, useEffect } from "react";
import { Post, Prisma } from "@prisma/client";
import PostCard from "../shared/PostCard";
import { getPosts } from "@/lib/utils";
import PostSortOptions from "./PostSortOptions";
import NewPostButton from "./NewPostButton";
import LoadingSpinner from "../shared/LoadingSpinner";

export type SortType = "createdAt" | "sentimentScore";

export default function Journal() {
  const [sortType, setSortType] = useState<SortType>("createdAt");
  const [sortOrder, setSortOrder] = useState<Prisma.SortOrder>("desc");
  const [posts, setPosts] = useState<Post[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPosts(sortType, sortOrder).then((posts) => {
      setPosts(posts);
      setIsLoading(false);
    });
  }, [sortType, sortOrder]);

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  const submitCallback = () => {
    getPosts(sortType, sortOrder).then(setPosts);
    closeDialog();
  };

  return isLoading ? (
    <div className="w-full h-full flex justify-center items-center">
      <LoadingSpinner />
    </div>
  ) : (
    <div>
      <div className="flex justify-between mb-4">
        <NewPostButton
          dialogOpen={dialogOpen}
          closeDialog={closeDialog}
          openDialog={openDialog}
          submitCallback={submitCallback}
        />

        <PostSortOptions
          sortType={sortType}
          sortOrder={sortOrder}
          setSortType={setSortType}
          setSortOrder={setSortOrder}
        />
      </div>

      {posts.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
}
