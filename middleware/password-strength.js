
const passwordStrength = (req, res, next) => {
  try {
    const regX = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/g;
    if (!regX.test(req.body.password)) {
      throw new Error('Le mot de passe doit contenir au moins 8 caractères, des chiffres et des lettres minuscules et majuscules !');
    }
    next();
  }
  catch (error) {
    res.status(401).json({ error: 'Le mot de passe doit contenir au moins 8 caractères, des chiffres et des lettres minuscules et majuscules !' });
  }
}

module.exports = passwordStrength;