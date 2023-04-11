import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import TopBanner from './Banner';
import Bacon from './Podcasts';
import MovieList from './Movies';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="Banner" element={<TopBanner />} />
          <Route path="Podcasts" element={<Bacon />} />
          <Route path="Movies" element={<MovieList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
