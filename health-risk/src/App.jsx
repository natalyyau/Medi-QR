import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    exercise: '',
    diet: '',
    smoking: '',
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/assess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setPrediction(data.riskLevel); // Assuming 'riskLevel' is returned in the response
    } catch (error) {
      console.error('Error fetching prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Health Risk Assessment Tool</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Exercise (e.g., 'None', 'Regular', 'Frequent'):</label>
          <input
            type="text"
            name="exercise"
            value={formData.exercise}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Diet (e.g., 'Poor', 'Balanced', 'Healthy'):</label>
          <input
            type="text"
            name="diet"
            value={formData.diet}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Smoking (e.g., 'Yes', 'No'):</label>
          <input
            type="text"
            name="smoking"
            value={formData.smoking}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Predicting...' : 'Get Risk Assessment'}
        </button>
      </form>

      {prediction && (
        <div>
          <h2>Risk Level: {prediction}</h2>
        </div>
      )}
    </div>
  );
}

export default App;

