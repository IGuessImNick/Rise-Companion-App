const db = require('../config/connection');
const Character= require('../models/Character');
const characterSeeds = require('./characterSeeds.json');
const User = require('../models/User');
const userSeeds = require('./userSeeds.json');
const Powers = require('../models/Powers');
const powerSeeds = require('./powerSeeds.json');

db.once('open', async () => {
    try {
      await User.deleteMany({});
      await User.create(userSeeds);

      await Character.deleteMany({});
      await Character.create(characterSeeds);

      await Powers.deleteMany({});
      await Powers.create(powerSeeds);
      
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });