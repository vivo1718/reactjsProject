import axios from "axios";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Col, Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, Row, UncontrolledDropdown } from 'reactstrap';
import './App.css';
import Business from './compo/Business';
import Science from './compo/Science';
import Sports from './compo/Sports';
function App() {
  
  //  for(var i=0;i<1;i++){
  //   newsapi();
  const[news,setNews] = useState([]);
  useEffect(()=>{
    const loadNews = async()=>{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=8c09ae939dc14d01947f836fe0f2c8e6");
      setNews(response.data.articles);
    };
    loadNews();
  },[]);
   console.log("news",news)
  return (
    <div>

<div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      <h4>CardShorts</h4>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/sports">
            Sports
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/science">
            Science
          </NavLink>
         
        </NavItem>
        
      </Nav>
         </Collapse>
  </Navbar>
</div>
    
<Router><div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      
      <div className='container'>
        <h4 style={{fontWeight:'bold',color:'#fff'}}>CardShorts</h4>
        <h4 className='text-gray-500 text-bold' >All Your news are available on the Cards.To View Entire News of the Topic Click On Read More</h4>
        { <div className="px-6 pt-4 pb-2">
          <Row className='row'><span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-bold text-gray-700 mr-2 mb-3">#Sports</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-bold text-gray-700 mr-2 mb-3">Science</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-bold text-gray-700 mr-2 mb-3" >Health</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-bold text-gray-700 mr-2 mb-3" >Entertainment</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-bold text-gray-700 mr-2 mb-3" >General</span>


          </Row>
        </div> 
        }

    </div>
      {
        news && news.map((item,index)=>{
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={item.urlToImage} alt="Image loading.."/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.title}</div>
          <p className="text-gray-700 text-base">
            {item.description}
          </p>
        </div>
        <div className='container1'>
          <a  className='font-bold text-xl'  href={item.url}>ReadMore</a>
</div>
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div> */}
      </div>
      
          );
        })
      }
     

    </div>
    <Routes>
    <Route path='/sports' element={<Sports/>} exact/>
    <Route path='/science' element={<Science/>} exact/>
    <Route path='/business' element={<Business/>} exact/>

    </Routes>
    
    </Router>
    </div>
  );
}

export default App;
