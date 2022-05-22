import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div >

      <Navbar></Navbar>


      <Routes>


        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>


      </Routes>

    </div>
  );
}

export default App;
