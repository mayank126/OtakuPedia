import {useState,useEffect} from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './styles/css/anime.css';
import Navbar from '../navbar/Navbar';
function Anime() {
  const [topAnime,setTopAnime]=useState([]);
  const [anime,setAnime]=useState([]);
  const[search,setSearch]=useState('');
  const [notFound,setNotFound]=useState(false);
  const fetchTop= async()=>{
    const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity').then(res=>res.json());
    setTopAnime(temp.top.slice(0,5));

  }
  const fetchAnime= async()=>{
    setNotFound(false);
    setAnime([]);
    const temp= await fetch(`https://api.jikan.moe/v3/search/anime?q=${search.toLowerCase()}&order_by=title&sort=asc&limit=10`).then(res=>res.json());
    if(temp.type==='BadResponseException')
      setNotFound(true);
    else
      setAnime(temp.results);

  }
  useEffect(() =>{
    fetchTop();
  },[])
  const handleSearch= e=>{
    e.preventDefault();
    fetchAnime(search);
  }
  
  return (
    <>
    <Navbar selected="anime"/>
    <div className="db" >

      <header>
        <h1>
          The<strong>Anime</strong>Database
        </h1>
      </header>

      <div className="container"> 
        <Sidebar topAnime={topAnime} />
        <Main notFound={notFound} handleSearch={handleSearch} search={search} setSearch={setSearch} anime={anime}/>
      </div>
        
    </div>
    </>
  );
}

export default Anime
