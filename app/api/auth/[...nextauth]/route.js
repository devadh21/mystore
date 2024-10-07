
import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  session:{
    strategy:"jwt",
  },
  providers: [
 
        // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    
    
  ],

//   secret:process.env.NEXTAUTH_SECRET,
  // if want to use your custom login page
  pages: {
    signIn: "/login",
  },
 }
const  handler = NextAuth(authOptions)

export { handler as GET, handler as POST }