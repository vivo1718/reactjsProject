import React from 'react'
import { Button } from 'reactstrap';
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    BarsItems,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./Navbarelement";
import Loader from 'react-loader-spinner';
import { useEffect,useState } from 'react';

function Navbaritems() {
    
    return (
        <>
           <Nav>
           <NavLogo to ="/" style={{fontFamily: 'Poppins '}}>
                CardShots
           </NavLogo>
           
            <Bars/>
            
            <NavMenu>
            {/* <Button>Slider</Button> */}
            <div>
  
</div>
                <NavLink to="/business" activeStyle style={{fontFamily: 'Poppins '}}>
                    Business

                </NavLink>
                
                <NavLink to="/science" activeStyle style={{fontFamily: 'Poppins '}}>
                    Science
                </NavLink>
                <NavLink to="/sports" activeStyle style={{fontFamily: 'Poppins '}}>
                    Sports
                </NavLink>
                
            </NavMenu> 
           </Nav> 
        </>
    
    )
}

export default Navbaritems

