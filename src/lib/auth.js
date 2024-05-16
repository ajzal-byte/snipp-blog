import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDB } from "./connectToDB";
import { User } from "./models";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDB();
        try {
          console.log("email", profile.email);
          const user = await User.findOne({ email: profile.email });

          console.log(user);

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              profilePic: profile.avatar_url,
            });

            await newUser.save();
            console.log("New User: ", newUser);
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      return true;
    },
  },
});
