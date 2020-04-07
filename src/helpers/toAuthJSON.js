import { encode } from "./jwtHelpers";

const toAuthJSON = (email, isConfirmed) => {
  return {
    email,
    token: encode(email),
    isConfirmed,
  };
};

export default toAuthJSON;
