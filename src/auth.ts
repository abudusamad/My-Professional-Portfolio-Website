import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
 
const prisma = new PrismaClient()
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, token }) {
      if(session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
      console.log(session)
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
      console.log(token)
    },
  },
  
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
 
})