import React from 'react';

import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <h2>Contacto</h2>
            <p>Page of Contact</p>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Acerca de</Link></li>
                </ul>
            </nav>
        </div>
    )
}
