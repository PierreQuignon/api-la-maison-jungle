CREATE DATABASE la_maison_jungle;

CREATE TABLE plant(
  plant_id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  water INTEGER CHECK (water >= 1 AND water <= 500),
  cover VARCHAR(255)
);

CREATE TABLE watering(
  hour_id SERIAL PRIMARY KEY,
  hour INTEGER CHECK (hour >= 0 AND water <= 23)
);
