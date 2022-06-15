import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../services/api";

const RequisitionsContext = createContext();

export const RequisitionsProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRepos, setUserRepos] = useState([]);

  const reverseRepos = () => {
    setUserRepos(userRepos.reverse());
  };

  const searchUser = (username, higherrated, setInput) => {
    api
      .get(`users/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        toast.error("User not found!", {
          duration: 2000,

          style: {
            fontFamily: "Ubuntu",
            width: "180px",
          },
        });
      });

    api
      .get(`users/${username}/repos`)
      .then((response) => {
        // console.log(response.data);
        higherrated
          ? setUserRepos(
              response.data.sort(
                (a, b) => b.stargazers_count - a.stargazers_count
              )
            )
          : setUserRepos(
              response.data.sort(
                (a, b) => a.stargazers_count - b.stargazers_count
              )
            );
      })
      .catch((error) => {
        console.log(error);
      });

    setInput("");
  };

  return (
    <RequisitionsContext.Provider
      value={{ searchUser, user, userRepos, reverseRepos }}
    >
      {children}
    </RequisitionsContext.Provider>
  );
};

export const useRequisitions = () => useContext(RequisitionsContext);
