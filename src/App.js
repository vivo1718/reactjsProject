import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button, Col, Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, Row, UncontrolledDropdown } from 'reactstrap';
import './App.css';
import Business from './compo/Business';
import Science from './compo/Science';
import Sports from './compo/Sports';
import Navbaritems from "./compo/Navbaritem";
import Loader from "react-loader-spinner";
import General from "./compo/General";
function App() {
  
  //  for(var i=0;i<1;i++){
  //   newsapi();
  const[news,setNews] = useState([]);
  const[loading,setLoading] = useState(false);

  useEffect(()=>{
    const loadNews = async()=>{
      loading = true;
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=8c09ae939dc14d01947f836fe0f2c8e6").then(res=>{
        setLoading(true);

      });
      setNews(response.data.articles);
    };
    loadNews();
  },[]);
   console.log("news",news)
  return (
  

      
        <Router>
      <Navbaritems />
      <Routes>
        <Route path="/" exact element={<General/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/science" element={<Science/>} />
        <Route path="/business" element={<Business/>} />

        {/* <Route path="/signin" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
  */}
      </Routes> 
    </Router>

  );
}

export default App;
