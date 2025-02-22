// All Backend - Frontend communication is done IN THIS FILE
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios";
  
//// Send Data to Backend
const Results = () => {
  // Retrieves Questionare Answers from Questionairre
  let location = useLocation();
  const { answers } = location.state || {};

  // Sends Code to Backend
  const sendAnswersToBackend = async () => {
    const response = await axios.post("http://localhost:5000/api/assess", answers);
   }
  
// Send Data if Answers exists
useEffect(() => {
  if (answers) {
    sendAnswersToBackend();
    }
  }, [answers]);


//// Recieves Data from Backend
const [healthStatus, setHealthStatus] = useState([{}]);

  useEffect(() => {
    // Using axios to fetch data
    axios.get("/api")
      .then((response) => {
        setHealthStatus(response.data); // setting the state with the response data
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Health Status</h1>
      {/* Render healthStatus data */}
      <pre>{JSON.stringify(healthStatus, null, 2)}</pre>
    </div>
  );
};

export default Results;