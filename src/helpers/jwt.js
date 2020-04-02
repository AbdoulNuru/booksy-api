import jwt from "jsonwebtoken";
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
