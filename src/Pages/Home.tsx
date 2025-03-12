import axios from "axios";
import { useEffect, useState } from "react";

// Define the type for data
type LocalizationData = Record<string, string>;

const Home: React.FC = () => {
  // Define the state to hold the localization data
  const [localization, setLocalization] = useState<LocalizationData | null>(
    null
  );
  useEffect(() => {
    axios
      .get("http://localhost:4000/Language/Frontend/en.json")
      .then((response) => setLocalization(response.data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);
  // If data is not loaded yet
  if (!localization) {
    return <div>Loading...</div>;
  }
  return <div>{localization?.FeedbackTitle}</div>;
};

export default Home;
