const Sequelize = require('sequelize');
require('dotenv').config();

const {
  DB_NAME = 'techblog_db',
  DB_USER = 'postgres',
  DB_PASSWORD = '',
  DB_URL
} = process.env;

console.log('DB_NAME:', DB_NAME);
console.log('DB_USER:', DB_USER);
console.log('DB_PASSWORD:', DB_PASSWORD);

let sequelize;

if (DB_URL) {
  sequelize = new Sequelize(DB_URL);
} else {
  sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;
