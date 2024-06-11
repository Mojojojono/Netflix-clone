import "./Player.css";
import backbtn from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={backbtn}
        alt=""
        onClick={() => {
          navigate(-1);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com//embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
