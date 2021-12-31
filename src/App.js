import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Layout from "./components/Layout/Layout"

import { Counter } from './features/counter/Counter';
import './App.css';
import MoviePage from './Pages/MoviePage';
import HomePage from './Pages/HomePage';
import SeriesPage from "./Pages/SeriesPage"
import Header from './components/Layout/Header';
import WatchListPage from './Pages/WatchListPage';
import LoginPage from './Pages/LoginPage';



function App() {
  return (
       <div className='App'>
       <Header/>
        <Routes>
         <Route path ='/' element ={<LoginPage/>}/>
         <Route path ='/Home' element ={<HomePage/>}/>
         <Route path ='/WatchList' element={<WatchListPage/>}/>
         <Route path ="/Movie" element={<MoviePage/>}/>
         <Route path ="/Series" element={<SeriesPage/>}/>
         
       </Routes>
       
       </div>
  

    
  );
}

export default App;
