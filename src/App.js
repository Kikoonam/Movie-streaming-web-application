import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import { Counter } from './features/counter/Counter';
import './App.css';
import MoviePage from './Pages/MoviePage';
import HomePage from './Pages/HomePage';
import SeriesPage from './Pages/SeriesPage';

import WatchListPage from './Pages/WatchListPage';
import LoginPage from './Pages/LoginPage';
import Header from './components/Layout/Header';
import Detail from './components/Detail';
import Profile from './Pages/ProfilePage';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/Home' element={<HomePage />} />
                <Route path='/WatchList' element={<WatchListPage />} />
                <Route path='/Profile' element={<Profile />} />
                <Route path='/Movie' element={<MoviePage />} />
                <Route path='/Series' element={<SeriesPage />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
