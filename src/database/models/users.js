import dotenv from "dotenv";

dotenv.config();

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isConfirmed: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {}
  );
  Users.associate = () => {
    // associations can be defined here
  };
  return Users;
};
