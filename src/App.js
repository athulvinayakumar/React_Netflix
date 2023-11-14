
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';

import requests from './requests';

function App() {
  return (
    <div >
      {/* <h1 style={{ color: "red" }}>Netflix</h1> */}
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests. fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
    
  ); 
}

export default App;
