import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

/**
 * @description encoding token method
 * @param {string} email
 * @returns {string} token
 */
export const encode = (email) => {
  const token = jwt.sign(email, process.env.JWT_SECRET);
  return token;
};

/**
 * @description decoding token method
 * @param {string} token
 * @returns {object} payload
 */
export const decode = (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  return payload;
};

/**
 * @description decoding token method
 * @param {string} password
 * @returns {string} hash
 */
export const hashPassword = (password) => {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};

/**
 * @description decoding token method
 * @param {string} password
 * @param {string} hash
 * @returns {boolean} compare
 */
export const comparePassword = (password, hash) => {
  const compare = bcrypt.compareSync(password, hash);
  return compare;
};
