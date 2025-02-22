// created backend directory, installed express for backend API
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); //middleware to parse JSON requirements

app.post("/api/assess", (req, res) => {
    const { exercise, diet, smoking } = req.body;


// Logic for risk assessment
let riskLevel = "Moderate";

if (diet === "Unhealthy" && smoking === "Yes") {
    riskLevel = "High"
} else if (diet == "Healthy" && exercise === "Yes") {
    riskLevel = "Low"
}

// Send response back to frontend
res.json({ riskLevel });
});

app.get('/', (req, res) => {
    res.send('AI Health Risk Assessment Tool - Backend is working!');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});
// run node server.js in terminal, but make sure you are in src directory, use cd <location> in terminal
