const bcrypt = require("bcrypt");

// You can adjust the number of salt rounds as needed
const saltRounds = 10;

//Async function to hash a password based on the saltRounds provided
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error("Error hashing password: " + error.message);
  }
};

//Async function to compare hashed passwords

const comparePassword = async (password, hash) => {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (error) {
    throw new Error("Error comparing password: " + error.message);
  }
};

module.exports = {
  hashPassword,
  comparePassword,
};
