import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header  from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import FooterComp from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpadatePost from './pages/Updatepost';
import Postpage from './pages/Postpage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';

export default function App() {
  return (
   <BrowserRouter >
   <ScrollToTop/>
   <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/search' element={<Search/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/update-post/:postId' element={<UpadatePost/>}/>
        </Route>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/post/:postSlug' element={<Postpage/>}/>
        

      </Routes>
      <FooterComp/>
   </BrowserRouter>
  )
}
