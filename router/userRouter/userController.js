import tokenService from "../../jwt/tokenService.js";
import userService from "./userService.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

class userController {
  async registration(req, res) {
    try {
      const { email, username, password } = req.body;
      const existingUser = await userService.findUserByEmail(email);

      if (existingUser) {
        return res.status(400).json({ error: "E-mail already exists." });
      }

      const salt = await bcrypt.genSalt(15);
      const hashedPassword = await bcrypt.hash(password, salt);

      await userService.createUser({
        uid: uuidv4(),
        userEmail: email,
        username: username,
        hashedPassword: hashedPassword,
      });

      res.json({ message: "User registered successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async authorization(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userService.findUserByEmail(email);
      const userToken = await userService.findTokenByUid(user.uid);
      const hashedpassword = user.hashedPassword;
      const validPassword = bcrypt.compare(password, hashedpassword);
      if (!user || !validPassword) return res.status(400).send("Invalid username or password.");
      if (userToken) {
        res.status(200).json({ token: userToken.token });
      } else {
        const token = await tokenService.generateToken({ uid: user.uid, userEmail: user.userEmail, username: user.username });
        if (token) {
          await userService.addToken({ tid: uuidv4(), uid: user.uid, token: token.accessToken });
          res.status(200).json({ token: token.accessToken });
        }
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getData(req, res) {
    try {
      const { token } = req.body;
      const userid = await userService.findToken(token);
      const user = await userService.findUserByUid(userid.uid);
      res.status(200).json({ user: user });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async logout(req, res) {
    try {
      const { token } = req.query;
      if (!token) {
        return res.status(400).json({ error: "Token is required" });
      }
      const userToken = await userService.findToken(token);
      if (!userToken) {
        return res.status(404).json({ error: "Token not found" });
      }

      await userService.destroyToken(token);
      res.status(200).json({ message: "Logout successfully." });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default new userController();
