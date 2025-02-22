import React from "react";
import Questionnaire from "../components/questionnaire";
import { useLocation } from "react-router-dom";


const Assessment = () => {
  const location = useLocation();
  const { answers } = location.state || {}; // Retrieve answers from state

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold">Health Risk Assessment</h2>
      <p className="mt-2">Please answer the following questions:</p>
      <pre>{JSON.stringify(answers, null, 2)}</pre> {/* Render answers for debugging */}
      <Questionnaire />
    </div>
  );
};

export default Assessment;
