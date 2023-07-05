const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create plant
app.post("/plants", async (req, res) => {
  try {
    const { name } = req.body;
    const newPlant = await pool.query("INSERT INTO plant (name) VALUES($1) RETURNING *", [
      name,
    ]);
    res.json(newPlant.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all plants
app.get("/plants", async (req, res) => {
  try {
    const allPlants = await pool.query("SELECT * FROM plant");
    res.json(allPlants.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get a plant

// update a todo

// delete a todo

app.listen(5000, () => {
  console.log("the server has started");
});
