import { useState } from "react";

function App() {
  const filmsArray = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  return (
    <main>
      <div className="container">
        <div className="row g-3">
          {filmsArray.map((film) => (
            <div className="col">
              <div className="card">
                <div className="card-title">{film.title}</div>
                <div className="card-content">{film.genre}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
