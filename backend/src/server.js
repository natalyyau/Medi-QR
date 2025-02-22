// created backend directory, installed express for backend API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
// Enable CORS for cross-origin requests (important for development)
app.use(cors());

app.use(express.json()); //middleware to parse JSON requirements

// Recieve Questionare Data from Front end
app.post("/api/assess", (req, res) => {
    const { exercise, diet, smoking } = req.body;


// Logic for risk assessment
let riskLevel = "Moderate";

if (diet === "Unhealthy" && smoking === "Yes") {
    riskLevel = "High"
} else if (diet == "Healthy" && exercise === "Yes") {
    riskLevel = "Low"
}
});

// Send Response back to Frontend
app.get('/', (req, res) => {
    res.send('AI Health Risk Assessment Tool - Backend is working!');
});
app.get("/api", (req, res) => {
    res.json({ riskLevel });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});
// run node server.js in terminal, but make sure you are in src directory, use cd <location> in terminal
