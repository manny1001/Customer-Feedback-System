class AuthService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }
  async register(username, password) {
    return await this.authRepository.register(username, password);
  }
  async login(username, password) {
    return await this.authRepository.login(username, password);
  }
}

module.exports = AuthService;
