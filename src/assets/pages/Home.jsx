import React from 'react'
import TrackCard from '../components/TrackCard'

const mockTracks = [
    { id: 1, title: 'Sunset Drive', artist: 'Kodigo', duration: '3:24' },
    { id: 2, title: 'Nightfall', artist: 'Luna', duration: '4:02' },
    { id: 3, title: 'Retro Beat', artist: 'Pixel', duration: '2:45' },
    { id: 4, title: 'Ocean Eyes', artist: 'Wave', duration: '3:10' },
]

export default function Home() {
    const handlePlay = (track) => {
        console.log('Reproducir:', track)
        // aquí podrías enviar el track a un Player central
        alert(`Play: ${track.title} - ${track.artist}`)
    }

    return (
        <section>
            <div className="mb-4">
                <h1 className="display-6">Bienvenido a Kodigo Music</h1>
                <p className="text-muted">Interfaz inspirada en Spotify / Deezer / Apple Music — totalmente responsive.</p>
            </div>

            <div className="row g-3">
                {mockTracks.map(t => (
                    <div className="col-12 col-sm-6 col-lg-3" key={t.id}>
                        <TrackCard track={t} onPlay={handlePlay} />
                    </div>
                ))}
            </div>
        </section>
    )
}
