import express from "express";
import cors from "cors";
import pool from "./db.js";
const app = express();

// middleware
app.use(cors());
app.use(express.json());

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
        .json({ error: `No Author found with name: "${author_name}"` });
    }

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "Whoops something went wrong, try again!" });
  }
});

app.listen(8080, () => {
  console.log("server has started on port 8080");
});
