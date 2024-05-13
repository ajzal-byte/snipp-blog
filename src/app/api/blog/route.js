import { NextResponse } from "next/server";
import { connectToDB } from "../../../lib/connectToDB";
import { Post } from "../../../lib/models";

export const GET = async (request) => {
  try {
    connectToDB()

    const posts = await Post.find();
    return NextResponse(posts)
  } catch (error) {
    console.error(error);
    return NextResponse("Failed to fetch posts");
  }
}