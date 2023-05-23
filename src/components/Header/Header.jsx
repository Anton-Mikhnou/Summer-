import React from 'react';
import s from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () =>{
    return( <header className= {s.header}>
      <div className={s.container}>
      <span className={s.logo}>
        <div className={s.picture}>
          <div className = {s.ellipse1}> 
          </div>
          <div className = {s.ellipse2}> 
          </div>
        </div>
        <span className= {s.heading}>Jobored</span>
      </span>
    
      <ul>
        <li><Link to="jobsearch" className = {s.link}>Поиск вакансий</Link></li>
        <li><Link to="filter"className = {s.link}>Избранное</Link></li>
      </ul>
      </div>

    
  </header>)
}

export default Header;