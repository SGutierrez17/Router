import React from 'react';

import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Acerca de</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/profile">Perfil</Link></li>
            </ul>
        </nav>
    )
}
