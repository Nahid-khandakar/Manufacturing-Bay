import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Blog from './pages/Blog/Blog';
import Error404 from './pages/Error404/Error404';
import Home from './pages/Home/Home';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Purchase from './pages/Purchase/Purchase';
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

        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<Error404></Error404>}></Route>



      </Routes>

    </div>
  );
}

export default App;
