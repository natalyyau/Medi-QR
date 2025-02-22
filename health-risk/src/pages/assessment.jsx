import React from "react";
import Questionnaire from "../components/questionnaire";


const Assessment = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold">Health Risk Assessment</h2>
      <p className="mt-2">Please answer the following questions:</p>
      <Questionnaire />
    </div>
  );
};

export default Assessment;
