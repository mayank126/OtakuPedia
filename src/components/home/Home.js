import React from 'react'
import './styles/css/home.css';
import Navbar from '../navbar/Navbar';
function Home() {
    return (
        <>
        <Navbar selected="home"/>
        <div className="home">
            <header >
                <h1>Otaku<strong>Pedia</strong></h1>
            </header>
            <p>
                    Oii! If you are an otaku this is the site for you.
                    This site will provide you data about any anime 
                    or manga that exists!!
            </p>
            <p>
                    This site has two parts the anime database and the manga database.
                
            </p>
            <p>
                    I hope you enjoy them both!!!
            </p>

        </div>
        </>
    )
}

export default Home
