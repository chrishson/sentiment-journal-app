import { NextRequest } from "next/server";
import { findPost } from "../../../../../prisma/helpers/post";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const post = await findPost(id);
  return Response.json(post);
}
