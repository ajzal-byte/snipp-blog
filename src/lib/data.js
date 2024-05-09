import { Post, User } from "./models";
import { connectToDB } from "./connectToDB";
import { unstable_noStore as noStore } from 'next/cache';

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch post");
  }
};
export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch users");
  }
};
