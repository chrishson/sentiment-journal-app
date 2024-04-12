import type { NextRequest } from "next/server";
import { createPost } from "../../../../../prisma/helpers/post";
import { analyzeSentiment } from "@/lib/sentimentAnalysis";
import { roundScore } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const { title, content } = await request.json();

  if (!title || !content) {
    return new Response(
      JSON.stringify({ message: "Title and content are required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const sentiment = await analyzeSentiment(content);

  const sentimentScore = roundScore(sentiment.documentSentiment.score);
  const sentimentMagnitude = roundScore(sentiment.documentSentiment.magnitude);

  await createPost({ title, content, sentimentScore, sentimentMagnitude });

  return new Response(JSON.stringify({ message: "Success" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
