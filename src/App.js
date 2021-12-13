import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SearchBar from "./Components/SearchBar/SearchBar";
import BookContainer from "./Containers/BookContainer/BookContainer";

function App() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <BookContainer />
            <Footer />
        </div>
    );
}

export default App;
