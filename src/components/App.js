import './App.css';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './home/Home';
import Search from './search/Search';
import List from './list/List';
import About from './about/About';

function App() {

  return (
    <header className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/list/:data" element={<List />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </header >
  );
  
}

export default App;
