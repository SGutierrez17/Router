import React from 'react';

import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <h2>Acerca de</h2>
            <p>Page of About</p>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    )
}
