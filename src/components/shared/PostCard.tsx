import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Post } from "@prisma/client";
import SentimentIcon from "./SentimentIcon";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const datetime = formatDate(post.createdAt);

  return (
    <Card className="mb-4">
      <CardHeader className="flex">
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{datetime}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
      </CardContent>
      <CardFooter className="flex justify-end items-center space-x-2 p-2 text-sm">
        <span>Sentiment:</span>
        <SentimentIcon score={post.sentimentScore} />
        <span>|</span>
        <span>{post.sentimentScore}</span>
      </CardFooter>
    </Card>
  );
}
