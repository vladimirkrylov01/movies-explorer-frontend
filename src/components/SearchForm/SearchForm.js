import React from 'react';
import './SearchForm.css';
import SearchIcon from '../../images/search_icon.svg';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import Preloader from '../Preloader/Preloader';

function SearchForm(props) {
  const [isShortMovie, setIsShortMovie] = React.useState(props.isShortMovieButton);
  const [isShowError, setIsShowError] = React.useState(false);

  function handlePick() {
    props.isShortMovie(!isShortMovie, props.isSaved);
    setIsShortMovie(!isShortMovie);
  }

  const {values, handleChange, errors, isValid} = useFormWithValidation({
    keyWord: '',
  })

  function handleSubmit(e) {
    e.preventDefault();
    if (errors.keyWord) {
      setIsShowError(true);
      return
    } else {
      setIsShowError(false);
    }
    if (isValid) {
      props.handleSubmit(values.keyWord, props.isSaved);
    }
  }

  return (
    <>
    <section className='search'>
      <div className='search__container'>
        <form onSubmit={handleSubmit} className='search__form' noValidate>
          <div className='search__input-block'>
          <input className='search__input' type='text' name='keyWord'
                   value={values.keyWord || ''} id='search' onChange={handleChange} placeholder='Фильм'
                   autoComplete='off' minLength='1' maxLength='200' required/>
            {isShowError ? (<p className='search__input_error'>Нужно ввести ключевое слово</p>) : null}
            <button className='search__button' type='submit'><img src={SearchIcon} alt='иконка кнопки поиска'/></button>
          </div>        
        </form>
        <div className='search__short'>
            <p className='search__short_title'>Короткометражки</p>
            <div onClick={handlePick}
            className={`search__short_button ${!isShortMovie ? '' : '_isChoosenBackground'}`}/*{`search__short_button ${isEmptyInput ? '_disabled': ''}`}*/ >
              <div className={`search__short_disk ${isShortMovie ? '_isChoosenButton' : ''}`}>
              </div>
            </div>
          </div>
    
      </div>
    </section>
    {props.isLoading ? <Preloader /> : null}
    </>
  );
};

export default SearchForm; 