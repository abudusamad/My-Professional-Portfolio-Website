import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"
import { db } from "./lib/db"

 
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
      return {
        ...session,
        user: {
          ...session.user,

        },
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      console.log("token", token)
      return token
    },
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    }
  },

  
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
 
})