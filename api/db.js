import mysql from "mysql";

let db;

function handleDisconnect() {
  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1998",
    database: "blog"
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      setTimeout(handleDisconnect, 2000); 
    } else {
      console.log('Connected to the database.');
    }
  });

  db.on('error', (err) => {
    console.error('Database error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

export { db };
