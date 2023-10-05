import "./App.css";
import { FaRegStar, FaStar } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <FaRegStar color="yellow" size={30} />
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input type="radio" name="rating" value={currentRating} />
            <FaStar size={30} />
          </label>
        );
      })}
    </div>
  );
}

export default App;
