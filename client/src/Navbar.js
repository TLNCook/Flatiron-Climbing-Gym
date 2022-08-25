import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from "react-router-dom";
import Links from "./Links"
import BrowseReviews from "./BrowseReviews"

function Navbar ({ loggedInClimberId, isLoggedIn, setIsLoggedIn }) {
    const history = useNavigate();

    function handleLogout (e) {
        sessionStorage.setItem("loggedIn", false)
        sessionStorage.setItem("loggedInClimberId", null)
        setIsLoggedIn(false);
        history("/Login");
    };

    const renderLogout = isLoggedIn ? <Button id="newitem" className="ui logout" variant="dark" type="submit"
        onClick={ handleLogout } > Logout </Button> : null

    return (
        <div>
            <div className="navbar">
                <div>
                    <NavLink className="navlink" to="/browse-reviews" element={ <BrowseReviews /> }> Reviews & Images </NavLink>
                    <NavLink className="navlink" to="/Links" element={ <Links /> }> Links/Information </NavLink>
                </div>
                    <div className="climberLink">
                        <NavLink className="navlink" to={`/climbers/${loggedInClimberId}`} elemnet={ <BrowseReviews /> }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-image-alt" viewBox="0 0 16 16">
                            <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z"/>
                        </svg>
                        </NavLink>
                    </div>
                    <div className="logoutButton">
                        <Form onSubmit={ handleLogout }>
                            { renderLogout }
                        </Form>
                    </div>    
            </div>
        </div>    
     );
};

export default Navbar