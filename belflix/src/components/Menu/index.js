import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './style.css'

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='BelFlix Logo'/>
            </a>

            <a className='ButtonLink' href='/'>
                Novo vídeo
            </a>
        </nav>

    );
}
export default Menu;
