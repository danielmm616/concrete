import "./style.css";

const LoadingUser = () => {
  return (
    <div className="user_card">
      <div className="user_top">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user"
          className="user_img"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          className="git_img"
          alt="git"
          onClick={() => window.open("github.com")}
        />
      </div>
      <div className="user_bottom">
        <div className="user_name fakeprefix">{""}</div>
        <div className="user_bio fakeprefix">{""}</div>
        <div className="user_follow fakeprefix">{""}</div>
        <div className="user_follow fakeprefix">{""}</div>
        <div className="user_email fakeprefix">{""}</div>
      </div>
    </div>
  );
};

export default LoadingUser;
