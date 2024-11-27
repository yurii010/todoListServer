import { Token } from "../../sequelize/models/token.model.js";
import { User } from "../../sequelize/models/user.model.js";

class userService {
  async createUser(data) {
    await User.create(data);
  }

  async findUserByEmail(email) {
    const user = User.findOne({ where: { userEmail: email } });
    return user;
  }

  async findUserByUid(uid) {
    const user = User.findOne({ where: { uid: uid } });
    return user;
  }

  async addToken(data) {
    await Token.create(data);
  }

  async findTokenByUid(uid) {
    const token = await Token.findOne({ where: { uid: uid } });
    return token;
  }
  async findToken(token) {
    const tuid = await Token.findOne({ where: { token: token } });
    return tuid;
  }

  async destroyToken(token) {
    await Token.destroy({ where: { token: token } });
  }
}

export default new userService();
