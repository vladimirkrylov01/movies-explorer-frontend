import React from 'react';
import './Portfolio.css';
import Arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__section'>
        <nav className='portfolio-list'>
          <h3 className='portfolio-list__heading'>Портфолио</h3>
          <li className='portfolio-list__item'>
            <a className='portfolio-list__link' href='https://how-to-learn-nine-chi.vercel.app' target='_blank' rel='noopener noreferrer'>
              <p className='portfolio-list__item_text'>Статичный сайт</p>
              <img className='portfolio-list__item_pic' src={Arrow} alt='изображение стрелки' />
            </a>
          </li>
          <li className='portfolio-list__item'>
            <a className='portfolio-list__link' href='https://russian-travel-ten.vercel.app' target='_blank' rel='noopener noreferrer'>
              <p className='portfolio-list__item_text'>Адаптивный сайт</p>
              <img className='portfolio-list__item_pic' src={Arrow} alt='изображение стрелки' />
            </a>
          </li>
          <li className='portfolio-list__item'>
            <a className='portfolio-list__link' href='https://krylov.students.nomoredomains.work' target='_blank' rel='noopener noreferrer'>
              <p className='portfolio-list__item_text'>Одностраничное приложение</p>
              <img className='portfolio-list__item_pic' src={Arrow} alt='изображение стрелки' />
            </a>
          </li>
        </nav>
      </div>
    </section>
  );
}

export default Portfolio;
