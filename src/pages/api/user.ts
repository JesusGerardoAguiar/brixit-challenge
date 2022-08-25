// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
type Data = {
  //   jwt: string;
  user: object;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const auth = req.headers.authentication as string;
    const token = auth.split(" ")[1];
    const userDecoded = jwt.decode(token);
    if (userDecoded) {
      const user = await prisma.users.findFirst({
        where: { OR: [{ email: (userDecoded as any).email }] },
      });
      if (user) {
        res.setHeader("Content-Type", "text/html");
        res.status(200).json({ user: user, message: "User Found" });
      }
    }else{

      res.setHeader("Content-Type", "text/html");
      res.status(404).json({ user: {}, message: "User Not Found" });
    }
  }
}
