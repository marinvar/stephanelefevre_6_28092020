const formValidator = (req, res, next) => {

  const regX = /[^\p{L}\s\d'-]+/ug;
  
  const sauceObject = req.file ? {
    ...JSON.parse(req.body.sauce)
  } : { ...req.body };

  sauceObject.name = sauceObject.name.replace(regX, '');
  sauceObject.userId = sauceObject.userId.replace(regX, '');
  sauceObject.heat = parseFloat(sauceObject.heat.toString().replace(/[^0-9]+/g, ''));
  sauceObject.description = sauceObject.description.replace(regX, '');
  sauceObject.mainPepper = sauceObject.mainPepper.replace(regX, '');
  sauceObject.manufacturer = sauceObject.manufacturer.replace(regX, '');

  req.file ? req.body.sauce = JSON.stringify(sauceObject) : req.body = sauceObject;
  
  next();
}

module.exports = formValidator;