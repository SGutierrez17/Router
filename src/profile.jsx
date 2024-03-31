import React from 'react';

import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <div>
            <h2>Profile</h2>
            <p>Page of Profile</p>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
        </div>
        
    )
}
