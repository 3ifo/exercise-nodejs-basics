import dotenv from "dotenv";
import path from "path";
import fs from "fs";
dotenv.config();
const apiKey = process.env.VITE_API_KEY;

const apiFetch = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const result = await response.text();
  fs.writeFileSync(path.normalize("objects/movies.json"), result);
};

apiFetch();
