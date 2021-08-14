import React, { useState } from "react";
import "./styles.css";

const movieLib = {
  Mystery: [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTYwOTM0MzQ0N15BMl5BanBnXkFtZTcwNDU1NzI5Mw@@._V1_.jpg",
      name: "Exam",
      year: "2009",
      director: "⭐⭐⭐"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfq84ctU2dqeFthQIdvTHspUV1LNC0tJI1vUu6-UYkak_e8L19-_UBx1tl8TPi4Pheino&usqp=CAU",
      name: "Gone Girl",
      year: "2014",
      director: "⭐⭐"
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMjIwOTA3NDI3MF5BMl5BanBnXkFtZTgwNzIzMzA5NTM@._V1_.jpg",
      name: "Searching",
      year: "2018",
      director: "⭐⭐⭐⭐"
    }
  ],
  Psychological: [
    {
      image:
        "https://i.pinimg.com/originals/9d/97/af/9d97aff9a911ef664c31493f86818861.png",
      name: "The Stanford prison experiment",
      year: "2015",
      director: "⭐⭐⭐⭐"
    },
    {
      image:
        "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2020/03/TIM_DVD_OCard_2DSKEW_MECH03.png",
      name: "The Invisible Man",
      year: "2020",
      director: "⭐⭐⭐"
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTmKYo0zbvTGYSk9JmTqWAHiLseBPjRUbDHO68YpJtAXFJxV8nF",
      name: "Fractured",
      year: "2019",
      director: "⭐⭐⭐⭐"
    }
  ],
  ScienceFiction: [
    {
      image: "https://i.ebayimg.com/images/g/OoYAAOSw~gRVlWLX/s-l400.jpg",
      name: "Ex-Machina",
      year: "2014",
      director: "⭐⭐⭐⭐⭐"
    },
    {
      image:
        "https://i.pinimg.com/564x/e8/16/2c/e8162caba284826b3271a03c2d6d12f9.jpg",
      name: "The Social Dilemma",
      year: "2020",
      director: "⭐⭐⭐⭐"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/The_Silence_2019_film_poster.jpg/220px-The_Silence_2019_film_poster.jpg",
      name: "The Scilence",
      year: "2019",
      director: "⭐⭐⭐"
    }
  ]
};

const moviesData = Object.keys(movieLib);

export default function App() {
  const [showMovie, setShowMovie] = useState("ScienceFiction");

  function clickHandler(genre) {
    setShowMovie(genre);
  }
  return (
    <div className="App">
      <div className="header">
        <h1>Piyush's Movie Recommendation</h1>
        <p>Click on the genre to get the movie list</p>
      </div>
      <div className="btn-class">
        {moviesData.map((genre) => (
          <button onClick={() => clickHandler(genre)}> {genre} </button>
        ))}
      </div>
      <ul className="unorderedList">
        {movieLib[showMovie].map((myMovie) => (
          <div className="genre">
            <li className="list">
              <img
                className="imgClass"
                src={myMovie.image}
                alt={myMovie.name}
              />
              <div className="container">
                <h3>{myMovie.name}</h3>
                <span>Year: {myMovie.year}</span>
                <p>Rating: {myMovie.director}</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <footer class="footer">
        <div class="footer-div">
          <p>
            Made with &lt;&#47;&gt; by{" "}
            <a
              href="https://piyushahir28.netlify.app"
              target="_blank"
              class="with-para"
            >
              Piyush
            </a>
            <br></br>
            <a href="https://github.com/piyushahir28" target="_blank">
              <i class="fa fa-github"></i>
            </a>
            <a href="https://twitter.com/piyushahir28" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/in/piyushahir28" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
