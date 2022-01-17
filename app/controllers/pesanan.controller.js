const db = require(".");
const Pesanan = db.pesanans;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.id_pesanan || !req.body.jumlah || !req.body.nama || !req.body.nama_game || !req.body.harga ||!req.body.no_whatsapp ) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const pesanan = {
    id_pesanan: req.body.pesanan,
    jumlah: req.body.jumlah,
    nama: req.body.nama,
    nama_game: req.body.nama_game,
    harga: req.body.harga,
    no_whatsapp: req.body.no_whatsapp
  };

  // Save Tutorial in the database
  Pesanan.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pesanan."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama ? { nama: { [Op.like]: `%${nama}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pesanans."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Pesanan with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pesanan with id=" + id
      });
    });
};  

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Pesanan.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pesanan was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pessanan with id=${id}. Maybe Pesanan was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pesanan with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pesanan.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pesanan was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Pesanan with id=${id}. Maybe Pesanan was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Pesanan with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Pesanan.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Pesanans were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all pesanans."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Pesanan.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pesanans."
      });
    });
};