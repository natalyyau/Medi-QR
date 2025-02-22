// created backend directory, installed express for backend API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Risk factors using map for efficient lookup
const RISK_FACTORS = new Map([
    ["exercise", new Map([
        ["Never", 3],
        ["Rarely", 2],
        ["Few times a week", 1],
        ["Daily", 0]
    ])],
    ["diet", new Map([
        ["Unhealthy", 3],
        ["Moderate", 2],
        ["Healthy", 0]
    ])],
    ["smoking", new Map([
        ["Yes", 3],
        ["No", 0]
    ])]
]);

// Function to calculate risk score
function calculateRiskScore(exercise, diet, smoking) {
    return RISK_FACTORS.get("exercise").get(exercise) +
           RISK_FACTORS.get("diet").get(diet) +
           RISK_FACTORS.get("smoking").get(smoking);
}

//Function to determine risk level based on risk score
function determineRiskLevel(riskScore) {
    if (riskScore >= 7) return "High";
    else if (riskScore >= 4) return "Moderate";
    else return "Low";
}

// Enable CORS for cross-origin requests (important for development)
app.use(cors());// When handling form submission
app.use(express.json()); //middleware to parse JSON requirements

app.post("/api/assess", (req, res) => {
    const { exercise, diet, smoking } = req.body;

    // Calculate risk score
    const riskScore = calculateRiskScore(exercise, diet, smoking);

    // send response to frontend
    res.json({
        riskScore,
        riskLevel: determineRiskLevel(riskScore)
    }); 
});

// app.get('/', (req, res) => {
//     res.send('AI Health Risk Assessment Tool - Backend is working!');
// });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);

});
// run node server.js in terminal, but make sure you are in src directory, use cd <location> in terminal
