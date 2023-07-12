import Header from "./components/Header";
import Search from "./components/Search";
import Pages from "./components/Pages";
import MoviesItems from "./components/MoviesItems";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const searchParams = new URLSearchParams(document.location.search);

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") || 1);
  const [currentSearchValue, setCurrentSearchValue] = useState(
    searchParams.get("search") || "man"
  );

  useEffect(() => {
    fetchServerMovie(currentSearchValue, currentPage);
  }, [currentPage, currentSearchValue]);

  const searchMovies = (searchValue) => {
    setLoading(true);
    setCurrentPage(1);
    setCurrentSearchValue(searchValue);
  };

  const onClickBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const fetchServerMovie = (searchValue, page) => {
    let setSearchValue = searchValue;
    const url = urlBuilder(setSearchValue, page);
    axios
      .get(url)
      .then((response) => {
        const jsonResponse = response.data;
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <Header />
      <Search search={searchMovies} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <MoviesItems key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
      <Pages onClickBack={onClickBack} onClickNext={onClickNext} />
    </div>
  );
}

function urlBuilder(searchValue, page) {
  return `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=4a3b711b`;
}

export default App;
