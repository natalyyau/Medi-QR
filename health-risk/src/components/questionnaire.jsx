import { useState } from "react";
import Question from "./questions";
import { useNavigate } from "react-router-dom";
import "../components/questionnaire.css"; // Import CSS file

const questions = [
  { id: "exercise", question: "How often do you exercise?", options: ["Daily", "Few times a week", "Rarely", "Never"] },
  { id: "diet", question: "How is your diet?", options: ["Healthy", "Moderate", "Unhealthy"] },
  { id: "smoking", question: "Do you smoke?", options: ["Yes", "No"] },
];

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelect = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });

    const result = await response.json();
    navigate("/results", { state: { result } });
  };

  return (
    <div className="page-wrapper"> {/* Wrapper for full-page centering */}
      <div className="questionnaire-container">
        <h2 className="text-2xl font-bold">Health Risk Assessment</h2>
        <p className="mt-2">Please answer the following questions:</p>
        
        {questions.map((q) => (
          <Question key={q.id} question={q.question} options={q.options} onSelect={(value) => handleSelect(q.id, value)} />
        ))}

        <button onClick={handleSubmit} className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default Questionnaire;
