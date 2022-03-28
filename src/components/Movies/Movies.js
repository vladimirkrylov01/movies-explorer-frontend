import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './../SearchForm/SearchForm';
import MoviesCardsList from '../MoviesCardsList/MoviesCardsList';
import Footer from '../Footer/Footer';

function Movies({isShortMovieButton, isSearched, loggedIn, isLoading, cards, handleSubmit, isShortMovie, handleSaveMovie, savedMovies, deleteMovie}) {
  return (
    <>
      <div>
        <section className='movies'>
          <Header loggedIn={loggedIn}/>
          <SearchForm
                 cards={cards}
                 isShortMovieButton={isShortMovieButton}
                 isLoading={isLoading}
                 handleSubmit={handleSubmit}
                 isShortMovie={isShortMovie} />
          <MoviesCardsList
          isSearched={isSearched}
          isLoading={isLoading}
          cards={cards}
          handleSaveMovie={handleSaveMovie}
          savedMovies={savedMovies}
          deleteMovie={deleteMovie}
           />
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Movies;