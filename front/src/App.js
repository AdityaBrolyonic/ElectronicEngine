
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home'
import Registration from './Components/Registration';
import Login from './Components/Login';
import Addpro from "./Components/Addpro";
import ContactUs from './Components/ContactUs';
import ShowProduct from './Components/ShowProduct';
import Collections from './Components/Collections';
import { useState, useEffect } from 'react';
import ClockLoader from "react-spinners/ClockLoader";
import "./App.css"
import  Axios  from 'axios';

function App() {
 const [ loading, setLoading] = useState(false);
 const [loginStatus, setLoginStatus] = useState(false);
 const [loggedIn, setLoggedIn] = useState(false);

  useEffect( () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  useEffect(() => {
    Axios.get("http://localhost:3001/userLogin").then((response) => {
      if(response.data.loggedIn === true)
    { setLoginStatus(response.data.user[0].U_Name);
      setLoggedIn(true);
    }
    })
  }, [])

  const userLogout = () => {
    setLoggedIn(false);
  };

  return (
    <>
{
  loading ?

  <div className="App" >
  <ClockLoader 
  color="rgb(250, 190, 24)"
  loading={loading}
  size={150}/>
  </div>
  :
    <Router>
    <Header loggedIn={loggedIn} onLogout={userLogout} name={loginStatus}/>
    <Routes>
    <Route path='/' exec element={<Home />}></Route>
    <Route path="/Addpro" exec element={<Addpro />} /> 
    <Route path="/Registration" exec element={<Registration />} /> 
    <Route path="/Collection" exec element={<Collections />} /> 
    <Route path="/ShowProduct" exec element={<ShowProduct />} /> 
    <Route path='/Contact' exec element={<ContactUs/>}/>
    <Route path='/Login' exec element={<Login/>}/>
  </Routes>
    <Footer />
   </Router>
}
  </>);
}

export default App;
