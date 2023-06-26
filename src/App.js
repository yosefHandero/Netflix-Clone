import React from "react"
import "./App.css";
import Banner from "./Banner";
import Footer from "./Footer";
import Nav from "./Nav";
import requests from "./requests";
import Row from "./Row";


function App() {
  return (
    <div className="App">
    

      <Banner />
      <Row title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fecthActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
  <Nav/>
    </div>
  );
}

export default App;
