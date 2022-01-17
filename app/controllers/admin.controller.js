const db = require("../models");
const Admin = db.admins;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.nama || !req.body.password ) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const admin = {
    nama: req.body.nama,
    password: req.body.password
  };

  // Save Tutorial in the database
  Admin.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Admin."
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
          err.message || "Some error occurred while retrieving admins."
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
          message: `Cannot find Admin with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Admin with id=" + id
      });
    });
};  

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Admin.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Admin was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Admin with id=${id}. Maybe Admin was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Admin with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Admin.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Admin was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Admin with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Admin.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Admins were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all admins."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Admin.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};