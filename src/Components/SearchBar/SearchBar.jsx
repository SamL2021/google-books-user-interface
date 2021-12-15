import styles from "./SearchBar.module.scss";
import { useState } from "react";
import Button from "../Button";
import getDataGoogleBooks from "../../Assets/data/googleData";

const SearchBar = ({ query, resultsCallback }) => {
    const [currentQuery, setCurrentQuery] = useState("");

    console.log("input: " + currentQuery);
    // console.log("query" + query);

    const handleInput = (e) => setCurrentQuery(e.target.value);
    // const handleClick = () => {
    //     // getDataGoogleBooks();
    // };

    return (
        <div className={styles["wrap"]}>
            <div className={styles["search"]}>
                <input
                    type="text"
                    value={currentQuery}
                    className={styles["searchTerm"]}
                    placeholder="Enter text here..."
                    onInput={handleInput}
                />

                <Button
                    handleClick={() => {
                        getDataGoogleBooks(resultsCallback);
                    }}
                    label="search"
                ></Button>
            </div>
        </div>
    );
};

export default SearchBar;
