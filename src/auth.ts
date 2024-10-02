import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user";
import { db } from "@/lib/db"

export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return {
        ...session,
        user: {
          ...session.user,

        },
      }
    },
    async jwt({ token}) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      console.log(token)

      return {
        ...token,
        id: existingUser.id,
        email: existingUser.email,
        emailVerified: existingUser.emailVerified,
      }
    },
    async signIn({ user, account }) {
      if (account?.provider !== "credentials") return true
     
      if (user && user.id) {
        const exitUser = await getUserById(user.id)
        if(!exitUser?.emailVerified){
        return false
    }}


      return true
    }
    },

  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    }
  },

  
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
 
})