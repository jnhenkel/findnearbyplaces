import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import apiAccess from '../communication/APIAccess';
import { NULL } from 'mysql/lib/protocol/constants/types';

const NavigationBar = (props) => {
    let navigate = useNavigate();

    let logoutHandler = () => {
        apiAccess.logout()
            .then(x => {
                props.userLoggedIn(NULL);
                navigate('/index');
            })
            .catch(e => {
                console.log(e);
                alert('error logging out');
            })
    }

    return (
        <div className='navigation'>
            <nav className='navbar navbar-expand bg-dark'>
                <div className='container-fluid'>
                    <ul id='navBar' className='navbar-nav ml-auto' >
                        {
                            props.user && props.user != NULL ?
                                <>
                                    <li className='nav-item mx-2'>
                                        <NavLink className='nav-link' to='/index'>
                                            Signed in as: {props.user}
                                        </NavLink>
                                    </li>
                                    <li className='nav-item mx-2'>
                                        <NavLink className='nav-link' to='/logout' onClick={logoutHandler}>
                                            logout
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className='nav-item mx-2'>
                                        <NavLink className='nav-link' to='/search'>
                                            search
                                        </NavLink>
                                    </li>
                                    <li className='nav-item mx-2'>
                                        <NavLink className='nav-link' to='/login'>
                                            login
                                        </NavLink>
                                    </li>
                                    <li className='nav-item mx-2'>
                                        <NavLink className='nav-link' to='/register'>
                                            register
                                        </NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>

        </div>

    )
};

export default NavigationBar;