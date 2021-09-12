import Anime from "./components/anime/Anime";
import Home from "./components/home/Home";
import Manga from "./components/manga/Manga";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  
  return (
    <Router>
    <div >
  
    <Switch>
      <Route path="/"  exact component={Home}/>
      <Route path="/anime"component={Anime} /> 
      <Route path="/manga" component={Manga}/> 
    </Switch>
    </div>
    </Router>
  );
}

export default App;
