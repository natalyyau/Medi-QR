import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartAssessment = () => {
    navigate("/assessment");  // Navigate to the assessment page
  };

  return (
    <div className="home-wrapper">
      <h1 className="text-3xl font-bold">Welcome to the Health Risk Assessment</h1>
      <p className="mt-2 text-lg">Answer a few questions to assess your health risk.</p>
      <button
        onClick={handleStartAssessment}  // Trigger navigation on click
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Start Assessment
      </button>
    </div>
  );
};

export default Home;




  