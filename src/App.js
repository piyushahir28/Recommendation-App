import React, { useState } from "react";
import "./styles.css";

const movieLib = {
  Mystery: [
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMTYwOTM0MzQ0N15BMl5BanBnXkFtZTcwNDU1NzI5Mw@@._V1_.jpg",
      name: "Exam",
      year: "2009",
      director: "Hazeldine"
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfq84ctU2dqeFthQIdvTHspUV1LNC0tJI1vUu6-UYkak_e8L19-_UBx1tl8TPi4Pheino&usqp=CAU",
      name: "Gone Girl",
      year: "2014",
      director: "David Fincher"
    },
    {
      image:
        "https://m.media-amazon.com/images/M/MV5BMjIwOTA3NDI3MF5BMl5BanBnXkFtZTgwNzIzMzA5NTM@._V1_.jpg",
      name: "Searching",
      year: "2018",
      director: "Aneesh Chaganty"
    }
  ],
  Psychological: [
    {
      image:
        "https://i.pinimg.com/originals/9d/97/af/9d97aff9a911ef664c31493f86818861.png",
      name: "The Stanford prison experiment",
      year: "2015",
      director: "K. P. Alvarez"
    },
    {
      image:
        "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2020/03/TIM_DVD_OCard_2DSKEW_MECH03.png",
      name: "The Invisible Man",
      year: "2020",
      director: "Leigh Whannell"
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Fractured",
      year: "2019",
      director: "Brad Anderson"
    }
  ],
  ScienceFiction: [
    {
      image:
        "https://lh3.googleusercontent.com/proxy/pOywgD0NEf3NC_d0gKMREwsg6vMihlWbIImE6xAhkdsVtHD1GpdzjdWVxhfDLHhxDP0nprDidhcDC2T3qDVDUAaykfW3tjmH4r6hAQ",
      name: "Ex-Machina",
      year: "2014",
      director: "Alex Garland"
    },
    {
      image:
        "https://i.pinimg.com/564x/e8/16/2c/e8162caba284826b3271a03c2d6d12f9.jpg",
      name: "The Social Dilemma",
      year: "2020",
      director: "Jeff Orlowski"
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/31/The_Silence_2019_film_poster.jpg/220px-The_Silence_2019_film_poster.jpg",
      name: "The Scilence",
      year: "2019",
      director: "John R. Leonetti"
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
                <p>Directed by: {myMovie.director}</p>
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
