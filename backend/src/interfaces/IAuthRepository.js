class IAuthRepository {
  async register(username, password) {
    throw new Error("Method not implemented");
  }
  async login(username, password) {
    throw new Error("Method not implemented");
  }
}

module.exports = IAuthRepository;
