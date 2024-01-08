require('dotenv').config(); //load environment variables

const Sequelize = require('sequelize'); // require sequelize package

const sequelize = process.env.JAWSDB_URL // create new instance of sequelize where able to connect to database using JAWSDB_URL environment variables otherwise use the DB_NAME, DB_USER, and DB_PASSWORD environment variables to connect to a local MySQL database
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
