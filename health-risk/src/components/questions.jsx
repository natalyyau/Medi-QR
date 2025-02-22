import { useState } from "react";
import "../components/questions.css";

const Question = ({ question, options, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="p-4 border-b">
      <h3 className="text-lg font-semibold">{question}</h3>
      {options.map((option) => (
        <label key={option} className="block">
          <input
            type="radio"
            name={question}
            value={option}
            checked={selected === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default Question;
