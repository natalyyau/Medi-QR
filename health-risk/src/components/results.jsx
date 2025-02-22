import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const result = location.state?.result;

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold">Your Health Risk Assessment</h2>
      <p className="mt-2">Diabetes Risk: {result?.diabetes_risk}%</p>
      <p>Heart Disease Risk: {result?.heart_disease_risk}%</p>
    </div>
  );
};

export default Results;
