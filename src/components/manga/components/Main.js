import React  from 'react'
import Card from './Card'
function Main(props) {
    const content = <>
                    <div className=" heading ">Top Results For Your Search</div>
                    <div className="item-list">
                    {  props.manga.map((m)=><Card manga={m} key={m.mal_id}/>)}
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
                    placeholder="Search for manga..." 
                    onChange={e=>props.setSearch(e.target.value)}/>
            </form>
            
            {  
                props.notFound? err: props.manga.length?content:<></>
            }
            

        </div>
    )
}
export default Main;