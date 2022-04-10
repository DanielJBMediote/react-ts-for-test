import Api from "services/Api";

class UserApi extends Api {

  constructor() {
    super("users");
  }

  async fetchAll() {
    return super.get("");
  }
}

export default new UserApi();