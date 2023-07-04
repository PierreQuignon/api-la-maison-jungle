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
    const newPlant = await pool.query("INSERT INTO plant (name) VALUES($1)", [
      name,
    ]);
    res.json(newPlant);
  } catch (error) {
    console.error(err.message);
  }
});

//get all plants

//get a plant

// update a todo

// delete a todo

app.listen(5000, () => {
  console.log("the server has started");
});
