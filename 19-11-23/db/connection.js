const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/onlineshope').then(res => {
  console.log('database connected!');
}).catch(err => {
  console.log('Err', err);
});

module.exports = { mongoose }