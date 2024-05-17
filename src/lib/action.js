"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("post saved");
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const deletePost = async (formData) => {
  const { postId } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(postId);

    console.log("post deleted");
    revalidatePath("/blog");
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, cpassword } = Object.fromEntries(formData);
  if (password !== cpassword) return "Passwords do not match";

  try {
    connectToDB();

    const user = await User.findOne({ email });
    if (user) return "User already exists";

    const thisUsername = await User.findOne({ username });
    if (thisUsername) return "This username is already taken";

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("Saved to db");
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.error(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
