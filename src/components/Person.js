import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>I am {person.name}. I am {person.age} years old. I have the skill of {person.skill}</h1>
        </div>
    )
}

export default Person
