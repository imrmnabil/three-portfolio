import React from 'react'

const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam &&
                <span className='relative w-3 h-3 flex'>
                    <span className='btn-ping'/>
                    <span className='btn-ping_dot'/>
                </span>
            }
            {name}
        </button>
    )
}

export default Button
