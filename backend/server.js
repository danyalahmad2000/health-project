import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


pool
  .connect()
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post("/api/submitSubscribeForm", async (req, res) => {
  try {
    const {
      username,
      password,
      gender,
      email,
      job_title,
      company_name,
      company_website,
    } = req.body;
    const client = await pool.connect();
    console.log("connection successful")
    const result = await client.query(
      "INSERT INTO subscribeform (username, password, gender, email, job_title, company_name, company_website) VALUES ($1, $2, $3, $4, $5, $6, $7)",
      [
        username,
        password,
        gender,
        email,
        job_title,
        company_name,
        company_website,
      ]
    );
    client.release();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).send("Internal server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
