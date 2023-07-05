CREATE DATABASE la_maison_jungle;

CREATE TABLE plant(
  plant_id SERIAL PRIMARY KEY,
  name VARCHAR(100)
  water INTEGER CHECK (water >= 1 AND water <= 500)
);
