import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Banner';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner title="Derek's React Website" />
      <MovieList />
    </div>
  );
}

export default App;
