import "./App.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="App">
      <h1>Star Rating</h1>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="star"
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
              size={30}
            />
          </label>
        );
      })}
      <p>Total Rating is: {rating}</p>
    </div>
  );
}

export default App;
