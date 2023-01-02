const sqlite3 = require('sqlite3');

module.exports = function configDB() {
  const db = new sqlite3.Database('moneymapper.db');

  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS payments (
        id INTEGER PRIMARY KEY,
        amount REAL NOT NULL,
        paid_at DATETIME NOT NULL,
        user_id INTEGER NOT NULL,
        mpesa_transaction_id TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL
      )
    `);
  });

  return {
    getPaymentsByPeriod: (start, end, callback) => {
      db.all(`
        SELECT users.name, SUM(payments.amount) as total_paid
        FROM users
        JOIN payments ON payments.user_id = users.id
        WHERE payments.paid_at BETWEEN ? AND ?
        GROUP BY users.id
      `, [start, end], (err, rows) => {
        if (err) {
          console.error(err.message);
          callback(err);
        } else {
          callback(null, rows);
        }
      });
    }
  };
};
