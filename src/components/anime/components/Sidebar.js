import React from 'react'

function Sidebar({topAnime}) {
    
    return (
        <aside>
            
            <h2 className="navhead">Top Animes</h2>
            <div className="topItems">
                {topAnime.map(anime=>(anime.title.length < 15 ? 
                <div key={anime.mal_id} className='top-name'>
                        {anime.title}
                </div>: 
                <div key={anime.mal_id} title={anime.title} className='top-name'> 
                        {anime.title.slice(0,12)}...
                </div>))}
            </div>
        
        </aside>
    )
}

export default Sidebar;