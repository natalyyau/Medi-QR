import React, { useState } from "react";
import axios from "axios";

const HealthRiskForm = () => {
  const [formData, setFormData] = useState({
    exercise: "",
    diet: "",
    smoking: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/", formData);
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching prediction", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Health Risk Assessment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Exercise Question */}
        <div>
          <h3>How often do you exercise?</h3>
          <label>
            <input
              type="radio"
              name="exercise"
              value="None"
              checked={formData.exercise === "None"}
              onChange={handleChange}
            />
            None
          </label>
          <label>
            <input
              type="radio"
              name="exercise"
              value="1-2 times a week"
              checked={formData.exercise === "1-2 times a week"}
              onChange={handleChange}
            />
            1-2 times a week
          </label>
          <label>
            <input
              type="radio"
              name="exercise"
              value="3-4 times a week"
              checked={formData.exercise === "3-4 times a week"}
              onChange={handleChange}
            />
            3-4 times a week
          </label>
          <label>
            <input
              type="radio"
              name="exercise"
              value="5+ times a week"
              checked={formData.exercise === "5+ times a week"}
              onChange={handleChange}
            />
            5+ times a week
          </label>
        </div>

        {/* Diet Quality Question */}
        <div>
          <h3>How would you rate your diet quality?</h3>
          <label>
            <input
              type="radio"
              name="diet"
              value="Poor"
              checked={formData.diet === "Poor"}
              onChange={handleChange}
            />
            Poor
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="Average"
              checked={formData.diet === "Average"}
              onChange={handleChange}
            />
            Average
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="Good"
              checked={formData.diet === "Good"}
              onChange={handleChange}
            />
            Good
          </label>
          <label>
            <input
              type="radio"
              name="diet"
              value="Excellent"
              checked={formData.diet === "Excellent"}
              onChange={handleChange}
            />
            Excellent
          </label>
        </div>

        {/* Smoking Question */}
        <div>
          <h3>How many cigarettes do you smoke per day?</h3>
          <label>
            <input
              type="radio"
              name="smoking"
              value="None"
              checked={formData.smoking === "None"}
              onChange={handleChange}
            />
            None
          </label>
          <label>
            <input
              type="radio"
              name="smoking"
              value="1-5 cigarettes"
              checked={formData.smoking === "1-5 cigarettes"}
              onChange={handleChange}
            />
            1-5 cigarettes
          </label>
          <label>
            <input
              type="radio"
              name="smoking"
              value="6-10 cigarettes"
              checked={formData.smoking === "6-10 cigarettes"}
              onChange={handleChange}
            />
            6-10 cigarettes
          </label>
          <label>
            <input
              type="radio"
              name="smoking"
              value="10+ cigarettes"
              checked={formData.smoking === "10+ cigarettes"}
              onChange={handleChange}
            />
            10+ cigarettes
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Assessing..." : "Submit"}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-3 border rounded">
          <h3>Prediction:</h3>
          <p>{result.risk_level}</p>
        </div>
      )}
    </div>
  );
};

export default HealthRiskForm;


