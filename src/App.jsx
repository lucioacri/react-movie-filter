import { useEffect, useState } from "react";

function App() {
  const filmsArray = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  const genres = [];
  filmsArray.forEach((film) => {
    if (!genres.includes(film.genre)) {
      genres.push(film.genre);
    }
  });

  const titles = [];
  filmsArray.forEach((film) => titles.push(film.title));

  const [selectGenreFilter, setSelectGenreFilter] = useState("");
  const [selectTitleFilter, setSelectTitleFilter] = useState("");
  const [filteredFilms, setFilteredFilms] = useState(filmsArray);

  useEffect(() => {
    if (selectGenreFilter === "") {
      setFilteredFilms(filmsArray);
    } else {
      const newFilteredFilms = filmsArray.filter(
        (film) => film.genre === selectGenreFilter
      );
      setFilteredFilms(newFilteredFilms);
    }
  }, [selectGenreFilter]);

  useEffect(() => {
    if (selectTitleFilter === "") {
      setFilteredFilms(filmsArray);
    } else {
      const newFilteredFilms = filmsArray.filter(
        (film) => film.title === selectTitleFilter
      );
      setFilteredFilms(newFilteredFilms);
    }
  }, [selectTitleFilter]);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <select
              className="form-select"
              value={selectGenreFilter}
              onChange={(e) => setSelectGenreFilter(e.target.value)}
            >
              <option value=""></option>
              {genres.map((genre, index) => (
                <option key={index}>{genre}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <select
              className="form-select"
              value={selectTitleFilter}
              onChange={(e) => setSelectTitleFilter(e.target.value)}
            >
              <option value=""></option>
              {titles.map((title, index) => (
                <option key={index}>{title}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row g-3">
          {filteredFilms.map((film, index) => (
            <div className="col-4" key={index}>
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
