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
const fetchTop= async()=>{
    const temp = await fetch('https://api.jikan.moe/v3/top/manga/1/manga').then(res=>res.json());
    setTopManga(temp.top.slice(0,5));

}
const fetchManga= async()=>{
    setNotFound(false);
    setManga([]);
    const temp= await fetch(`https://api.jikan.moe/v3/search/manga?q=${search.toLowerCase()}&order_by=title&sort=asc&limit=10`).then(res=>res.json());
    
    if(temp.type==='BadResponseException')
    { 
        setNotFound(true);
    }
    else
    setManga(temp.results);

  }
  useEffect(() =>{
    fetchTop();
  },[])
  const handleSearch= e=>{
    e.preventDefault();
    fetchManga(search);
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
