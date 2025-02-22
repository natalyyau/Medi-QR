import { useState } from "react";
import Question from "./questions";
import { useNavigate } from "react-router-dom";

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
    <div className="max-w-lg mx-auto p-4">
      {questions.map((q) => (
        <Question key={q.id} question={q.question} options={q.options} onSelect={(value) => handleSelect(q.id, value)} />
      ))}
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
    </div>
  );
};

export default Questionnaire;
