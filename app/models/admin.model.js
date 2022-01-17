module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("user", {
    nama: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
  });

  return Admin;
};