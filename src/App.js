import Rows from "./Components/Rows";
import request from "./request";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Rows
        isOriginals
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Rows title="TRENDING NOW" fetchUrl={request.fetchTrending} />
      <Rows title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <Rows title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
      <Rows title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies} />
      <Rows title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
      <Rows title="DOCUMENTARIES" fetchUrl={request.fetchDocumantaries} />
    </div>
  );
}

export default App;
