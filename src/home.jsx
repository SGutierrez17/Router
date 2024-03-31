import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Inicio</h1>
            <p>Page of Home</p>
            <nav>
                <ul>
                    <li><Link to="/about">Acerca de</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                    <li><Link to="/profile">Perfil</Link></li>
                </ul>
            </nav>
        </div>
    )
}
