import React from 'react'

const ScoreBoard = (props) => {
    console.log('ScoreBoard', props)
    const {strike, ball} = props
    return (
        <div>
            <h2>Balls: {ball}</h2>            
            <h2>Strikes: {strike}</h2>
        </div>
    )
}

export default ScoreBoard