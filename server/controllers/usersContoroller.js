const mongoose = require('mongoose');
const User = require('../models/dbModel');

module.exports.getUsers = async (req, res) => {
    const users = await User.find({}).sort({score:1}).exec();
    res.status(200).json(users);
};

module.exports.postUser = async (req, res, next) => {
  if (!req.body.name || !req.body.score) {
    res.status(400);
    res.send();
  } else {
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        score: req.body.score
      });

      await newUser.save();

      res.status(201).json(newUser);
    }
};


