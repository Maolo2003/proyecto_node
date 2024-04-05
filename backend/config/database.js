const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://mauricio606:6YMhr1Oeb2q7y9Td@cluster0.eiuyf3o.mongodb.net/`
mongoose.connect(URI);

module.exports = mongoose;

