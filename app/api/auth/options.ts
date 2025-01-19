import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "", //to be added
    }),
  ],
  secret: "",
  //callbacks
  callback: {
    async jwt({ token, user }) {
      return user;
    },
    async session({ session, token, user }) {
      return session;
    },
  },
};
