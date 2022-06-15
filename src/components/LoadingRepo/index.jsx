import "./style.css";
import { BsFillStarFill } from "react-icons/bs";

const LoadingRepo = ({ index }) => {
  return (
    <div className={`repo_card ${index % 2 === 0 ? "even" : "odd"}`}>
      <h3 className="repo_name">
        <a
          onClick={() => window.open("https://github.com/")}
          target="_blank"
          rel="noopener noreferrer"
          href="/"
        >
          Loading...
        </a>
      </h3>
      <h4 className="repo_starcount">
        StarsCount: Loading... <BsFillStarFill className="repo_star" />
      </h4>
    </div>
  );
};

export default LoadingRepo;
