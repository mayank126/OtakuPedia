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
  const [keyword,setKeyword]=useState('');

  useEffect(() =>{
    const controller = new AbortController();
    fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity',{signal : controller.signal})
    .then(res=>res.json())
    .then(data=>setTopAnime(data.top.slice(0,5)));
    return ()=>controller.abort();
  },[])
  useEffect( ()=>{
    if(keyword!=='')
    {
      setNotFound(false);
      setAnime([]);
      const controller = new AbortController();
      fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword.toLowerCase()}&order_by=title&sort=asc&limit=10`,{signal : controller.signal})
      .then(res=>res.json())
      .then(data=>{ 
        if(data.type==='BadResponseException')
          setNotFound(true);
        else
            setAnime(data.results);
      });
      return ()=>controller.abort();
    }
  },[keyword])

  const handleSearch= e=>{
    e.preventDefault();
    setKeyword(search);
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
