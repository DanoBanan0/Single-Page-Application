import React from 'react'

export default function TrackCard({ track, onPlay }) {
    return (
        <div className="card bg-secondary bg-opacity-10 text-dark">
            <div className="card-body d-flex flex-column">
                <div className="mb-3" style={{ height: 120, background: '#e9ecef', borderRadius: 8, display: 'flex', alignItems: 'end', padding: 12 }}>
                    <div>
                        <h5 className="card-title mb-0">{track.title}</h5>
                        <small className="text-muted">{track.artist}</small>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <small className="text-muted">{track.duration}</small>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => onPlay?.(track)}>
                        Play
                    </button>
                </div>
            </div>
        </div>
    )
}
