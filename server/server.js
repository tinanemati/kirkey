import express from "express";
import cors from "cors";
import pool from "./db.js";
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// get all authors
app.get("/authors", async (req, res) => {
  try {
    const allAuthors = await pool.query(
      "SELECT * FROM authors ORDER BY date_of_birth LIMIT 10"
    );
    res.json(allAuthors.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Define a route for handling the API request
app.get("/top-authors", async (req, res) => {
  try {
    const { author_name } = req.query;

    if (!author_name) {
        const query = `
        SELECT authors.name, SUM(item_price * quantity) AS total_sales 
        FROM sale_items 
        JOIN books ON sale_items.book_id = books.id 
        JOIN authors ON books.author_id = authors.id 
        GROUP BY authors.name
        ORDER BY total_sales DESC
        LIMIT 10;
      `;
      
      const { rows } = await pool.query(query);
      return res.status(200).json(rows);
    }

    const query = `
        SELECT authors.name, SUM(item_price * quantity) AS total_sales 
        FROM sale_items 
        JOIN books ON sale_items.book_id = books.id 
        JOIN authors ON books.author_id = authors.id 
        WHERE authors.name = $1
        GROUP BY authors.name;
      `;

    const { rows } = await pool.query(query, [author_name]);

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: `Author "${author_name}" not found` });
    }

    res.status(200).json(rows);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(8080, () => {
  console.log("server has started on port 8080");
});
