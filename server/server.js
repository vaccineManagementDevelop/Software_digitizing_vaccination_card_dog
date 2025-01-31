import express from "express";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js"; // Asegúrate del nombre del archivo
import authRouter from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cookieParser());

// API Endpoints
app.get('/', (req, res) => res.send("API working"));
app.use('/api/auth', authRouter);

app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Ruta no encontrada' });
  });

app.listen(port, () => console.log(`Server started on PORT:${port}`));
