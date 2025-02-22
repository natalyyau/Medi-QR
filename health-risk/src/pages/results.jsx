// Modifying results.jsx to display backend data

import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const result = location.state?.result;

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold">Your Health Risk Assessment</h2>
      {/* <p className="mt-2">Diabetes Risk: {result?.diabetes_risk}%</p>
      <p>Heart Disease Risk: {result?.heart_disease_risk}%</p> */}
    
        {/* Display from backend */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-blue-600">
              Risk Level: {result?.riskLevel}
            </h3>
            <p className="mt-2 text-gray-700">{result?.message}</p>
          </div>

          <div className="mt-4">
            <p className="text-gray-700">Risk Score: {result?.riskScore}</p>
          </div>
        </div>
    
    </div>
  );
};

export default Results;
