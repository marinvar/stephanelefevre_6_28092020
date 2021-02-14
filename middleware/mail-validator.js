const validator = require('email-validator');

/**
 * middleware validating email address before use in app
 */
const mailValidator = (req, res, next) => {
  try {
    if (!validator.validate(req.body.email)) {
      throw new Error('Invalid email');
    }
    next();
  }
  catch (error) {
    res.status(401).json({ error: 'Email invalide !' });
  }
}

module.exports = mailValidator;