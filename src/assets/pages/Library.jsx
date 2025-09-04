import React, { useState, useEffect } from 'react'

const sample = [
    { id: 1, name: 'Sunset Drive' },
    { id: 2, name: 'Nightfall' },
    { id: 3, name: 'Retro Beat' },
]

export default function Library() {
    const [favorites, setFavorites] = useState(() => {
        try {
            const raw = localStorage.getItem('kodigo_favs')
            return raw ? JSON.parse(raw) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('kodigo_favs', JSON.stringify(favorites))
    }, [favorites])

    const toggleFav = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
    }

    return (
        <section>
            <h2 className="h4 mb-3">Mi Biblioteca</h2>
            <ul className="list-group">
                {sample.map(s => (
                    <li key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {s.name}
                        <button className={`btn btn-sm ${favorites.includes(s.id) ? 'btn-danger' : 'btn-outline-primary'}`} onClick={() => toggleFav(s.id)}>
                            {favorites.includes(s.id) ? 'Quitar' : 'Favorito'}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
