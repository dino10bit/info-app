import { Request, Response } from "express";

export class AuthController {
  static login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!(username && password)) {
      return res
        .status(400)
        .json({ message: "Username & password are required!" });
    }

    res.send({
      token: 'test-token',
    });
  };
}

export default AuthController;
