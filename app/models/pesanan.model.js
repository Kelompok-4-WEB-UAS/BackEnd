module.exports = (sequelize, Sequelize) => {
  const Pesanan = sequelize.define("user", {
    id_pesanan: {
      type: Sequelize.STRING
    },
    jumlah: {
      type: Sequelize.STRING
    },
    nama: {
      type: Sequelize.STRING
    },
    nama_game: {
      type: Sequelize.STRING
    },
    harga: {
      type: Sequelize.STRING
    },
    no_whatsapp: {
      type:Sequelize.STRING
    }
  });

  return Admin;
};