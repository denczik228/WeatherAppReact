import React from 'react'
import './Header.css' 
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <div className='header'>
            <div className="logo">My Weather App</div>
            <div className="buttons">
                <Link to='/'>
                    <Button label="Home" />
                </Link>
                <Link to='/favorites'>
                    <Button label="Favorites" />
                </Link>
            </div>
        </div>
    )
}
