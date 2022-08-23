// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  jwt: string;
  err: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (email === "aguiarf.j16@gmail.com" && password === "123456") {
      res.status(200).json({ jwt: "jwt-token", err: "" });
    }
    res.status(404).json({ err: "user not found", jwt: "" });
  }
}
