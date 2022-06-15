import { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

const RepositoryPage = () => {
  const [repository, setRepository] = useState(null);
  const params = useParams();

  useEffect(() => {
    api
      .get(`/repos/${params.full}/${params.name}`)
      .then((response) => {
        console.log(response.data);
        setRepository(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.full, params.name]);

  return (
    <div className="repository_page">
      {repository && (
        <section className="repository_section">
          <h1 className="repository_name">{repository.name}</h1>
          <p className="repository_description">
            Description: {repository.description}
          </p>
          <p className="repository_stars">
            StarCount: {repository.stargazers_count}{" "}
            <BsFillStarFill className="repo_star" />
          </p>
          <p className="repository_language">Language: {repository.language}</p>
          <a
            href={repository.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repository_link"
          >
            Repo access
          </a>
          <Link to="/" className="back_link">
            Home
          </Link>
        </section>
      )}
    </div>
  );
};

export default RepositoryPage;
