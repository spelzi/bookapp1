import React, { useState } from "react";
import myImage from "../image/bookapp2.jpeg";
import "./style.css";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBFt3Bnd43_fVtpoBA1p80puEHYtYD7rxI" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room with no books is like <br />A body with no soul
          </h1>
        </div>
        <div className="row2">
          <h2>Find your Books</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your book name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i class="fa fa-magnifying-glass"></i>
            </button>
          </div>
          {/* <img src={myImage} alt="" /> */}
        </div>
      </div>

      <div className="container2">{<Card book={bookData} />}</div>
    </>
  );
};

export default Main;
