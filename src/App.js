import axios from "axios";
import { useState } from "react";

function App() {
  const [joke, setJoke] = useState([]);

  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setJoke(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Get a Random Joke</h1>
      {joke &&
        joke.map((joke) => {
          return (
            <div key={joke._id} className="jokes">
              <h3>{joke.setup}</h3>
              <p>{joke.punchline}</p>
            </div>
          );
        })}
      <button onClick={fetchData} className="joke-btn">
        get random joke
      </button>
    </div>
  );
}

export default App;
