import React from 'react'

function Card({anime}) {
    
    return (
        <div className="card-container">

        <div className="card">
            <div className="front" >
            <img src={anime.image_url} alt={anime.title}/>
            </div>
            <div className="back">
                <div className="card-info">Type : {anime.type} </div>
                <div className="card-info">Episodes : {anime.episodes}</div>
                <div className="card-info">Status: {anime.airing? "Ongoing": "Completed"}</div>
            </div>
        </div>
            
            <header >
            {anime.title}
            </header>
        </div>
    )
}
export default Card;