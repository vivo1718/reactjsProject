import React from 'react'
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./Navbarelement";
function Navbaritems() {
    return (
        <>
           <Nav>
           <NavLogo to ="/" >
                CardShots
           </NavLogo>
            <Bars />

            <NavMenu>
                
                <NavLink to="/business" activeStyle>
                    Business
                </NavLink>
                <NavLink to="/science" activeStyle>
                    Science
                </NavLink>
                <NavLink to="/sports" activeStyle>
                    Sports
                </NavLink>
                
            </NavMenu> 
           </Nav> 
        </>
    
    )
}

export default Navbaritems
