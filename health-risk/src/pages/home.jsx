import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold">Welcome to the Health Risk Assessment</h1>
      <p className="mt-2 text-lg">Answer a few questions to assess your health risk.</p>
      <Link to="/assessment" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Start Assessment
      </Link>
    </div>
  );
};

export default Home;

  