import { useState } from "react";
import "./style.css";
import Search from "../components/Search";
import Repositories from "../components/Repositories";

const LandingPage = () => {
  const [input, setInput] = useState("");
  const [higherRated, setHigherRated] = useState(true);

  return (
    <>
      <main className="landing_main">
        <Search input={input} setInput={setInput} higherRated={higherRated} />
        <Repositories
          higherRated={higherRated}
          setHigherRated={setHigherRated}
        />
      </main>
    </>
  );
};

export default LandingPage;
