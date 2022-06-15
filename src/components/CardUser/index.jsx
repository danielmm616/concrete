import "./style.css";

const CardUser = ({ user }) => {
  return (
    <div className="user_card">
      <div className="user_top">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="user_img"
          onClick={() => window.open(user.html_url)}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          className="git_img"
          alt="git"
          onClick={() => window.open("https://github.com")}
        />
      </div>
      <div className="user_bottom">
        <h3 className="user_name prefix">
          Username: <span>{user.name}</span>
        </h3>
        <h4 className="user_bio prefix">
          Bio: <span>{user.bio ? user.bio : "Nada por aqui..."}</span>
        </h4>
        <h4 className="user_follow prefix">
          Followers: <span>{user.followers}</span>
        </h4>
        <h4 className="user_follow prefix">
          Following: <span>{user.following}</span>
        </h4>
        <h4 className="user_email prefix">
          Email: <span>{user.email ? user.bio : "Tentando acessar..."}</span>
        </h4>
      </div>
    </div>
  );
};

export default CardUser;
