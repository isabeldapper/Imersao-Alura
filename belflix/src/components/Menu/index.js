import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './style.css'
import Button from '../Button/index';

function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='BelFlix Logo'/>
            </a>

            <Button as='a' className='ButtonLink' href='/'>
                Novo vídeo
            </Button>
        </nav>

    );
}
export default Menu;
