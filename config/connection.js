const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    heroku_a249381720684fc,
    b78baa364edbfb,
    acd5648d,
    {
      host: 'us-cdbr-east-04.cleardb.com',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;