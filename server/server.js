import express from "express";
import 'dotenv/config';
import connectDB from "./config/mongodb.js"; 


const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Ruta no encontrada' });
  });

app.listen(port, () => console.log(`Server started on PORT:${port}`));
