import { revalidatePath } from "next/cache";
import { connectToDB } from "./connectToDB";
import { Post } from "./models";

export const addPost = async (formData) => {
  "use server";

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save()
    console.log("post saved");
    revalidatePath("/blog")
  } catch (error) {
    console.error(error);
    throw new Error(error)
  }
};


export const deletePost = async (formData) => {
  "use server";

  const { postId } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(postId)

    console.log("post deleted");
    revalidatePath("/blog")
  } catch (error) {
    console.error(error);
    throw new Error(error)
  }
};