// src/server/index.ts
import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = new Database("./src/db/tornadoes.sqlite", { readonly: true });

app.get("/api/tornado/superoutbreak", (req, res) => {
  let query = "SELECT * FROM tornados WHERE date >= ? AND date <= ?";

  const params = ["2011-04-27", "2011-04-27"];

  const stmt = db.prepare(query);
  const results = stmt.all(...params);

  res.status(200).json(results);
});

app.post("/api/tornado", (req, res) => {
  const { startDate, endDate, states, magnitudes } = req.body;

  let query = "SELECT * FROM tornados WHERE date >= ? AND date <= ?";
  const params = [startDate, endDate];

  if (states?.length) {
    query += " AND st IN (" + states.map(() => "?").join(",") + ")";
    params.push(...states);
  }

  if (magnitudes?.length) {
    query += " AND mag IN (" + magnitudes.map(() => "?").join(",") + ")";
    params.push(...magnitudes);
  }

  const stmt = db.prepare(query);
  const results = stmt.all(...params);

  res.json(results);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
