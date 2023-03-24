import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  let [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('Response.data from client GET:', response.data);
      galleryList(response.data);
      console.log('galleryList:', galleryList);
    }).catch((err) => {
      console.log('Error on client GET:', err);
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
