"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, img, userId } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newPost = new Post({
      title,
      desc,
      slug,
      img,
      userId,
    });

    await newPost.save();
    console.log("post saved");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.error(error);
    return {error: "Something went wrong!"}
  }
};

export const deletePost = async (formData) => {
  const { postId } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(postId);

    console.log("post deleted");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, profilePic } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newUser = new User({
      username,
      email,
      password,
      profilePic,
    });

    await newUser.save();
    console.log("user saved");
    revalidatePath("/admin");
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const deleteUser = async (formData) => {
  const { userId } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.deleteMany({ userId });
    await User.findByIdAndDelete(userId);

    console.log("user and their posts deleted");
    revalidatePath("/blogs");
    revalidatePath("/admin");
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

export const register = async (previousState, formData) => {
  let { username, email, password, cpassword } = Object.fromEntries(
    Object.entries(Object.fromEntries(formData)).map(([key, value]) => [
      key,
      value.trim(),
    ])
  );

  if (password !== cpassword) return { error: "Passwords do not match" };

  try {
    connectToDB();

    const user = await User.findOne({ email });
    if (user) return { error: "User already exists" };

    const thisUsername = await User.findOne({ username });
    if (thisUsername) return { error: "This username is already taken" };

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("Saved to db");

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    // if (error.message.includes("CredentialsSignin")) {
    // return { error: "Invalid username or password" };
    // }
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials", status: "error" };
        case "CredentialsSignin":
          throw error;
        default:
          return { error: "Something went wrong", status: "error" };
      }
    }
    throw error;
  }
};
