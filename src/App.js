import getImages from './service/api'
import './App.css';
import SearchHeader from './components/SearchHeader';
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await getImages(term);
    setImages(result);
  }

  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/>
      <ImageList imagesPlaceholder = {images}/>
    </div>
  );
}

export default App;
