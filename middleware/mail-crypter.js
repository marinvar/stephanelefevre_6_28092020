const crypto = require('crypto');

const mailCrypter = (req, res, next) => {
  const secret = process.env.EMAIL_PASS;
  req.body.email = crypto.createHmac('sha256', secret)
                         .update(req.body.email)
                         .digest('hex');
  next();
}

module.exports = mailCrypter;