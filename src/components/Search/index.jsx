import { useRequisitions } from "../../providers/RequisitionsContext";
import CardUser from "../CardUser";
import LoadingUser from "../LoadingUser/index.jsx";

const Search = ({ input, setInput, higherRated }) => {
  const { searchUser, user } = useRequisitions();

  return (
    <div className="landing_form">
      <h1 className="main_title">Concrete Challenge</h1>
      <div className="landing_input">
        <input
          type="text"
          value={input}
          placeholder="Enter Username"
          onChange={(e) => setInput(e.target.value)}
          className="input_user"
        />
        <button
          onClick={() => {
            searchUser(input, higherRated, setInput);
            setInput("");
          }}
          className="btn_search"
        >
          Search
        </button>
      </div>
      <section>{user ? <CardUser user={user} /> : <LoadingUser />}</section>
    </div>
  );
};

export default Search;
