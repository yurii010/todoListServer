import jwt from "jsonwebtoken";

class tokenService {
  async generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, { expiresIn: "1h" });
    return {
      accessToken,
    };
  }
}

export default new tokenService();
