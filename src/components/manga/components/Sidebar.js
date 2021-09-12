import React from 'react'

function Sidebar({topManga}) {
    
    return (
        <aside>
            
            <h2 className="navhead">Top Mangas</h2>
            <div className="topItems">
            {topManga.map(manga=>(manga.title.length < 15 ? 
            <div key={manga.mal_id} className='top-name'>
                    {manga.title}
            </div>: 
            <div key={manga.mal_id} title={manga.title}className='top-name'> 
                    {manga.title.slice(0,12)}...
            </div>))}
            </div>
        
        </aside>
    )
}

export default Sidebar;