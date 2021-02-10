const Sauce = require('../models/Sauce');
const fs = require('fs');

exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    likes: 0,
    dislikes: 0
  });
  sauce.save()
  .then(() => res.status(201).json({ message: 'Object saved' }))
  .catch(error => res.status(400).json({ error }));
};

exports.modifySauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
  .then(sauce => {
    const filename = sauce.imageUrl.split('/images/')[1];
    if (req.file) {
      fs.unlink(`images/${filename}`, () => console.log('Image deleted'));
    }
    const sauceObject = req.file ? {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Object modified' }))
    .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
  .then(sauce => {
    const filename = sauce.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Sauce.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Object deleted' }))
      .catch(error => res.status(400).json({ error }));
    });
  })
  .catch(error => res.status(500).json({ error }));
}

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
  .then(sauce => res.status(200).json(sauce))
  .catch(error => res.status(404).json({ error }));
};

exports.getAllSauces = (req, res, next) => {
  Sauce.find()
  .then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(400).json({ error }));
};

exports.likeOneSauce = (req, res, next) => {
  const userId = req.body.userId;
  const like = req.body.like;
  Sauce.findOne({ _id: req.params.id })
  .then(sauce => {
    if (like === 1 && sauce.usersLiked.indexOf(userId) === -1) {
      sauce.usersLiked.push(userId);
      sauce.likes++;
    } else if (like === -1 && sauce.usersDisliked.indexOf(userId) === -1) {
      sauce.usersDisliked.push(userId);
      sauce.dislikes++;
    } else if (like === 0) {
      let indexLiked = sauce.usersLiked.indexOf(userId);
      let indexDisliked = sauce.usersDisliked.indexOf(userId);
      if (indexLiked > -1) {
        sauce.usersLiked.splice(indexLiked, 1);
        sauce.likes--;
      } else if (indexDisliked > -1) {
        sauce.usersDisliked.splice(indexDisliked, 1);
        sauce.dislikes--;
      }
    }
    Sauce.updateOne({ _id: req.params.id }, { 
      likes: sauce.likes, 
      dislikes: sauce.dislikes, 
      usersLiked: sauce.usersLiked,
      usersDisliked: sauce.usersDisliked,
      _id: req.params.id })
    .then(res.status(200).json({message: 'Sauce likée !'}))
    .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(400).json ({ error }));
}