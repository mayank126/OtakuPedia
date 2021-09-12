import React from 'react'

function Card({manga}) {
    
    return (
        <div className="card-container">

        <div className="card">
            <div className="front" >
            <img src={manga.image_url} alt={manga.title}/>
            </div>
            <div className="back">
                <div className="card-info">Type : {manga.type} </div>
                <div className="card-info">Chapters : {manga.chapters}</div>
                <div className="card-info">Volumes : {manga.volumes}</div>
                <div className="card-info">Status: {manga.publishing? "Ongoing": "Completed"}</div>
            </div>
        </div>
            
            <header >
            {manga.title}
            </header>
        </div>
    )
}
export default Card;