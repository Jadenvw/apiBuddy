import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

app.get("/health", (req: Request, res: Response) => {
    res.json({ "ok": true });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

