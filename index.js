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
    const { name, water, cover } = req.body;
    const newPlant = await pool.query(
      "INSERT INTO plant (name, water, cover) VALUES ($1, $2, $3) RETURNING *",
      [name, water, cover]
    );
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
app.get("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await pool.query(
      "SELECT * FROM plant WHERE plant_id = $1",
      [id]
    );
    res.json(plant.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update a todo
app.put("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, water, cover } = req.body;
    const updatePlant = await pool.query(
      "UPDATE plant SET name = $1, water = $2, cover = $3 WHERE plant_id = $4",
      [name, water, cover, id]
    );
    res.json("the plant was updated with success !");
  } catch (error) {
    console.error(error.message);
  }
});

// delete a todo
app.delete("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePlant = await pool.query(
      "DELETE FROM plant WHERE plant_id = $1",
      [id]
    );
    res.json("the plant was deleted with succes !");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("the server has started");
});
