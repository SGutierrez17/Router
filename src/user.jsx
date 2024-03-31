import React from 'react'

import { useParams } from 'react-router-dom';

const users = {
    '1234': ['Sergio Gutierrez', ' - Creador'],
    '4321': ['Paula Gutierrez', ' - Revisor']
};

export default function User() {
const { id } = useParams();

const userName = users[id] || 'Usuario no encontrado';

    return (
        <div>
            <h2>User: {userName}</h2>
        </div>
    )
}
