const mongoose = require('mongose');
require('dotenv').config();

const URI = `mongodb+srv://mauricio606:<password>@cluster0.eiuyf3o.mongodb.net/`
mongoose.connect(URI);
