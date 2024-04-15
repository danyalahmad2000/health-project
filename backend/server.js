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

    // Check if the email or username already exists
    const existingUser = await pool.query(
      "SELECT * FROM subscribeform WHERE email = $1 OR username = $2",
      [email, username]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).send("Sorry, a user with the same email or username already exists. Please use a different email or username.");
    }

    // Insert the data if no duplicate found
    const result = await pool.query(
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

    res.status(201).send("Thank you for subscribing!");
  } catch (error) {
    console.error("Error executing SQL query", error);
    res.status(500).send("Oops! Something went wrong. Please try again later.");
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
