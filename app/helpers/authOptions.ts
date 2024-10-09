import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { addNewUser } from "@/serverActions/users/addNewUserActions";
import { EmailIsExistAction } from "@/serverActions/EmailIsExistAction";

export const authOptions: NextAuthOptions = {
  providers: [
    // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET, 



  // if want to use your custom login page
  pages: {
    signIn: "/login",
  },
};
