class Admin {
  constructor(id, username, password , isDeleted) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.isDeleted = isDeleted
  }
}

module.exports = Admin;
