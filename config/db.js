const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('mydatabase.db');

db.all('SELECT * FROM users', (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(rows);
  }
});

db.close();
