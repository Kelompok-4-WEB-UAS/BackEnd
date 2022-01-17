module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    nama: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    no_whatsapp:{
      type: Sequelize.STRING
    }
  });

  return User;
};