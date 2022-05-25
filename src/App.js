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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrder from './pages/Dashboard/MyOrder';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import RequireAuth from './pages/Authentication/RequireAuth'
import Footer from './pages/Shared/Footer';

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


        <Route path='dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>

        </Route>


        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='*' element={<Error404></Error404>}></Route>



      </Routes>

      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
