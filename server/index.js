const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Bektur2003@",
    database: "products1"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM products";
    db.query(sqlGet, (error, result) => {
        res.send(result)
    })
})

app.post('/api/update-data', (req, res) => {
    const { id, residualQuantity } = req.body;
  
    db.query('UPDATE products SET quantities = ? WHERE idproducts = ?', [residualQuantity, id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error updating data');
      } else {
        res.status(200).send('Data updated successfully');
      }
    });
  });

app.get("/", (req, res) => {
    // const sqLInsert = "INSERT INTO products (idproducts, quantities) VALUES (1, 80)";
    // db.query(sqLInsert, (error, result) => {
    //     console.log("error", error);
    //     console.log("result", result);
    //     res.send("Hello")
    // });
});


app.listen(5000, () => {
    console.log("Server is running");
})