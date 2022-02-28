const { createPool } = require('mysql2');

const connection = createPool({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DBNAME,
  port: process.env.MYSQL_DBPORT,
});

const query = (query, values) => {
  return new Promise((resolve, reject) => {
    connection.getConnection((error, connect) => {
      if (error) reject(error);
      else
        connect.query(query, values, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        });
      connect.release();
    });
  });
};

module.exports = { query };
