import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter'
import JobSearch from './components/JobSearch/JobSearch'
import {Routes, Route, Link, BrowserRouter } from 'react-router-dom';



const App = () => {
  return (   
    <BrowserRouter>
      <div className= 'app-jobored'>
          <Header />
          <Filter />
          <JobSearch />
          <Routes>
            <Route path='/filter' element= {<Filter/>} />
            <Route path='/jobsearch' element= {<JobSearch/>} />
          </Routes>
      </div>
    </BrowserRouter>
     
  );
}


export default App;
