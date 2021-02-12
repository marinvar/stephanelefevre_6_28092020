var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");

const passwordStrength = (req, res, next) => {
  try {
    if (!req.body.password.match(strongRegex)) {
      throw new Error('Le mot de passe doit contenir 8 caractères, des chiffres et des lettres minuscules et majuscules !');
    }
    next();
  }
  catch (error) {
    res.status(401).json({ error: 'Le mot de passe doit contenir 8 caractères, des chiffres et des lettres minuscules et majuscules !' });
  }
}

module.exports = passwordStrength;