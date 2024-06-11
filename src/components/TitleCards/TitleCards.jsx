import "./TitleCards.css";
import cardsData from "../../assets/cards/Cards_data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TitleCards = ({ title, category }) => {
  const [ApiData, setApiData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTA4ZTczMGEyNmIxOWEzYjM5ZDI1ZTcxMTI3ZTFmMCIsInN1YiI6IjY2MzlmY2QxMmEwOWJjMDEyYzViMDczMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RNJg_V7XO9UakVYKj0TCE07m8ojKVBiSJWfCXLjmNpI",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  });

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {ApiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
