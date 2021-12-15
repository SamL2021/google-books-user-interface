import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SearchBar from "./Components/SearchBar/SearchBar";
import BookContainer from "./Containers/BookContainer/BookContainer";
import { useState } from "react";

function App() {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div className="App">
            <Header />
            <SearchBar resultsCallback={setSearchResults} />
            <BookContainer results={searchResults} />
            <Footer />
        </div>
    );
}

export default App;
