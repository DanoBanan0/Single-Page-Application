import React, { useRef, useState, useEffect } from 'react'

export default function Player({ src }) {
    const audioRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        audioRef.current = new Audio(src)
        audioRef.current.addEventListener('ended', () => setPlaying(false))
        return () => {
            audioRef.current.pause()
            audioRef.current = null
        }
    }, [src])

    const toggle = () => {
        if (!audioRef.current) return
        if (playing) {
            audioRef.current.pause()
            setPlaying(false)
        } else {
            audioRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className="d-flex align-items-center gap-2">
            <button className="btn btn-sm btn-outline-light" onClick={toggle}>
                {playing ? 'Pausa' : 'Play'}
            </button>
            <small className="text-muted">Player simple</small>
        </div>
    )
}
