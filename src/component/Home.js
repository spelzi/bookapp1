import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useSelector((state) => state.userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/books");
    }
  }, [user]);
  return (
    <div className="header">
      <div className="row1">
        <h1>
          A room with no books is like <br />A body with no soul
        </h1>
      </div>
      <div className="row3">
        <h3>To see all Books</h3>
        <a href="/get-started/register">
          <button className="btn1">Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
