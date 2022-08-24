// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  //   jwt: string;
  user: object;
};

const mockUser = {
  id: "123456",
  avatar: "",
  age: 24,
  email: "aguiarf.j16@gmail.com",
  name: "Jesus",
  role: "admin",
  surname: "Aguiar",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ user: mockUser });
  }
}
