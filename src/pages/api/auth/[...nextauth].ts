import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dotenv from "dotenv";



const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
          clientId: String(process.env.GOOGLE_CLIENT_ID),
          clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
        })
      ],
  // ...
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
