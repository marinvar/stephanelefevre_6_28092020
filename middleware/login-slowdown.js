const slowDown = require('express-slow-down');

const loginSlowdown = slowDown({
  windowMs: 15*60*1000, // 15 minutes
  delayAfter: 3, //Allows 3 requests at full speed, then...
  delayMs: 5000 // 4th request has a 5000ms delay, 5th has a 10000ms delay, 6th gets 15000ms, etc.
});

module.exports = loginSlowdown;