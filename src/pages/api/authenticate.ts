// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
type Data = {
  jwt: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await prisma.users.findFirst({
      where: { OR: [{ email }] },
    });
    if (email === user?.email && password === user?.password) {
      res.setHeader("Content-Type", "text/html");
      return res.status(200).json({
        jwt: jwt.sign({ email }, "KASODMDMASKD;LASDA;LDSKQPKDALSD"),
        message: "",
      });
    }else{
      res.setHeader("Content-Type", "text/html");
      return res.status(404).json({ message: "user not found", jwt: "" });

    }
  }
}
