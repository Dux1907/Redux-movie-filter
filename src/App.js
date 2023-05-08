import './App.scss';
import {Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/:id' element={<MovieDetail />}></Route>
        <Route path = '*' element = {<PageNotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
