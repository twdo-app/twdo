import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {},
    }),
  ],
};
