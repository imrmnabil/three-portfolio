import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
    const progess = useProgress();
    return (
        <Html as='div'
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <span className='canvas-loader'/>
            <p style={{ fontSize: 14, color: '#f1f1f1', fontWeight: 800, marginTop: 40 }}>
                {progess.progress != 0  ?   `${ progess.progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    )
}

export default CanvasLoader
