import {useState,useEffect} from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './styles/css/mangadb.css';
import Navbar from '../navbar/Navbar';

function Manga() {
const [topManga,setTopManga]=useState([]);
const [manga,setManga]=useState([]);
const[search,setSearch]=useState('');
const [notFound,setNotFound]=useState(false);
const [keyword,setKeyword]=useState('');

  useEffect(() =>{
    const controller = new AbortController();
    fetch('https://api.jikan.moe/v3/top/manga/1/manga',{signal : controller.signal})
    .then(res=>res.json())
    .then(data=>setTopManga(data.top.slice(0,5)));
    return ()=>controller.abort();
  },[])

  useEffect(() =>{
    if(keyword!=='')
    {
      setNotFound(false);
      setManga([]);
      const controller=new AbortController();
      fetch(`https://api.jikan.moe/v3/search/manga?q=${keyword.toLowerCase()}&order_by=title&sort=asc&limit=10`,{signal:controller.signal})
      .then(res=>res.json())
      .then(data=>{
        if(data.type==='BadResponseException')
          setNotFound(true);
        else
          setManga(data.results);
      });
      return ()=>controller.abort();
    }
  },[keyword]);

  const handleSearch= e=>{
    e.preventDefault();
    setKeyword(search);
  }
  
  return (
    <>
    <Navbar selected="manga"/>
    <div className="db">

      <header >
        <h1>
          The<strong>Manga</strong>Database
        </h1>
      </header>

      <div className="container"> 
        <Sidebar topManga={topManga} />
        <Main notFound={notFound} handleSearch={handleSearch} search={search} setSearch={setSearch} manga={manga}/>
      </div>
        
    </div>
    </>
  );
}

export default Manga
