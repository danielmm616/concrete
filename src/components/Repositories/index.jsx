import { RiArrowUpDownLine } from "react-icons/ri";
import { useRequisitions } from "../../providers/RequisitionsContext";
import CardRepo from "../CardRepo";
import LoadingRepo from "../LoadingRepo";

const Repositories = ({ higherRated, setHigherRated }) => {
  const { userRepos, reverseRepos } = useRequisitions();

  return (
    <section className="fix">
      <div className="repo_head">
        <h3 className="repositories_title">Repositories</h3>
        <div
          className="repo_rate_parent"
          onClick={() => {
            reverseRepos();
            setHigherRated(!higherRated);
          }}
        >
          <h4 className="repo_rate">
            {higherRated ? "Higher rating" : "Lowest rating"}{" "}
          </h4>
          <RiArrowUpDownLine className={higherRated ? "up" : "down"} />
        </div>
      </div>
      <div className="repo_parent">
        {userRepos[1]
          ? userRepos.map((repo, index) => (
              <CardRepo key={index} repo={repo} index={index} />
            ))
          : [0, 0, 0, 0, 0].map((_, index) => (
              <LoadingRepo key={index} index={index} />
            ))}
      </div>
    </section>
  );
};

export default Repositories;
