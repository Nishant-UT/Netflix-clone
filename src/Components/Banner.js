import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  //   console.log(`url(
  //     "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
  // )`);

  function truncate(str, characters) {
    return str?.length > characters
      ? str.substr(0, characters - 1) + "..."
      : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        backgroundImage: `url(
                 "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
             )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        {/* title */}
        <h2 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        {/* 2 buttons */}
        <div className="banner_btns">
          <button className="banner_btn">Play </button>
          <button className="banner_btn">My list +</button>
        </div>
        {/* movie info */}
        <h1 className="banner_info">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_gradient" />
    </header>
  );
}

export default Banner;
