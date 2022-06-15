import "./style.css";
import { BsFillStarFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";

const CardRepo = ({ repo, index }) => {
  return (
    <div className={`repos_card  ${index % 2 === 0 ? "even" : "odd"}`}>
      <div className="info">
        <h3 className="repo_name">
          <Link to={`/${repo.full_name}`}>{repo.name}</Link>
        </h3>
        <h4 className="repo_starcount">
          StarsCount: {repo.stargazers_count}{" "}
          <BsFillStarFill className="repo_star" />
        </h4>
      </div>
      <div className="link_icon">
        <BiLinkExternal
          className="icon_link"
          onClick={() => window.open(repo.html_url)}
        />
      </div>
    </div>
  );
};

export default CardRepo;
