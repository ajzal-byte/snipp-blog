import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/connectToDB";
import { Post } from "../../../../lib/models";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse("Failed to fetch post");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (error) {
    console.error(error);
    return NextResponse("Failed to delete post");
  }
};