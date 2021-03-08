import React from 'react'

function Inline() {
    const heading = {
        fontSize: '72px',
        color: 'blue',
        fontStyle: 'italic'
    }
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 style={heading}>Inline</h1>
            
        </div>
    )
}

export default Inline
