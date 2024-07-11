const User = require('../models/User');

// Controller functions
const getAllUsers = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({ error: err.message }));
};

const createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(500).json({ error: err.message }));
};

module.exports = {
  getAllUsers,
  createUser,
};
