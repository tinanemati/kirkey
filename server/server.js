import express from "express";
import cors from "cors";
import pool from "./db.js";
import NodeCache from "node-cache";
import rateLimit from "express-rate-limit";

const app = express();
const myCache = new NodeCache();

// middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  handler: function (req, res) {
    res
      .status(429)
      .json({ error: "Too many requests, please try again later." });
  },
});

app.use(limiter);

// Define a route for handling the API request
app.get("/top-authors", async (req, res) => {
  try {
    const { author_name } = req.query;
    const cacheKey = author_name ? author_name : "top10";
    // Try getting data from cache
    const cachedData = myCache.get(cacheKey);
    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    let query;
    let queryParams;

    // If not in cache, fetch from database
    if (!author_name) {
      query = `
        SELECT authors.name,  authors.email, SUM(item_price * quantity) AS total_sales 
        FROM sale_items 
        JOIN books ON sale_items.book_id = books.id 
        JOIN authors ON books.author_id = authors.id 
        GROUP BY authors.name, authors.email
        ORDER BY total_sales DESC
        LIMIT 10;
      `;
    } else {
      query = `
        SELECT authors.name, authors.email, SUM(item_price * quantity) AS total_sales 
        FROM sale_items 
        JOIN books ON sale_items.book_id = books.id 
        JOIN authors ON books.author_id = authors.id 
        WHERE authors.name = $1
        GROUP BY authors.name, authors.email;
      `;
      queryParams = [author_name];
    }

    const { rows } = await pool.query(query, queryParams);
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ error: `No Author found given name of ${author_name}` });
    }

    // Store result in cache for 1 hour
    myCache.set(cacheKey, rows, 3600);

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "Whoops something went wrong, try again!" });
  }
});

app.listen(8080, () => {
  console.log("server has started on port 8080");
});
