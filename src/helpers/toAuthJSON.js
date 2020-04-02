import { encode } from "./jwt";

const toAuthJSON = (email) => {
  return {
    email,
    token: encode(email),
  };
};

export default toAuthJSON;
