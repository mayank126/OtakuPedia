import React  from 'react'
import Card from './Card'
function Main(props) {
    const content = <>
                    <header className="heading">Top Results For Your Search</header>
                    <div className="item-list">
                    {  props.anime.map((a)=><Card anime={a} key={a.mal_id}/>)}
                    </div>
                    </>;
    const err=<div className='err'>Sorry!! We can't find what you're looking for!!</div>
    
    return (
        <div className="main">
            <form onSubmit={props.handleSearch}>
                <input 
                    type="search" 
                    value={props.search} 
                    required 
                    placeholder="Search for animes..." 
                    onChange={e=>props.setSearch(e.target.value)}/>
            </form>
            
            {  
                props.notFound? err: props.anime.length?content:<></>
            }
            

        </div>
    )
}
export default Main;