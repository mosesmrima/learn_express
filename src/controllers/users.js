const User = require('../models/user');

async function createUser (req, res) {
  try {
    const user = await User.create({
	    name: req.body.name,
	    age: req.body.age
    });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

async function allUsers (req, res) {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

async function getUser (req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

async function delUser (req, res) {
  try {
    const id = req.params.id;
    const data = await User.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

async function updateUser (req, res) {
  try {
    const id = req.params.id;
    const val = req.body;
    const options = { new: true };
    const data = await User.findByIdAndUpdate(id, val, options);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

module.exports = { createUser, allUsers, getUser, delUser, updateUser };
