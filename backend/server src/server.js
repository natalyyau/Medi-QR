// created backend directory, installed express for backend API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for cross-origin requests (important for development)
app.use(cors());// When handling form submission
app.use(express.json()); //middleware to parse JSON requirements

app.post("/api/assess", (req, res) => {
    const { exercise, diet, smoking } = req.body;

    // initiate assessment variables
    let riskLevel;
    let message;

    // Simple scoring system
    let riskScore = 0;

    // Add points based on user input
    if (exercise === "Never") riskScore += 3;
    else if (exercise === "Rarely") riskScore += 2;
    else if (exercise === "Few times a week") riskScore += 1;
    // Daily exercise is 0 points

    if (diet === "Unhealthy") riskScore += 3;
    else if (diet === "Moderate") riskScore += 2;
    // Healthy diet is 0 points

    if (smoking === "Yes") riskScore += 3; //no smoking is 0 points

    // Now determine risk level based on risk score.
    if (riskScore >= 7) {
        riskLevel = "High";
        message = "Your risk level is high.";
    } else if (riskScore >= 4) {
        riskLevel = "Moderate";
        message = "Your risk level is moderate.";
    } else {
        riskLevel = "Low";
        message = "Your risk level is low.";
    }

    // Send response back to frontend
    res.json({
        riskLevel,
        message,
        riskScore
    });
});

// app.get('/', (req, res) => {
//     res.send('AI Health Risk Assessment Tool - Backend is working!');
// });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});
// run node server.js in terminal, but make sure you are in src directory, use cd <location> in terminal
