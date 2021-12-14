import styles from "./SearchBar.module.scss";
import { useState } from "react";
import Button from "../Button";

const SearchBar = ({ queries }) => {
    const [currentQuery, setCurrentQuery] = useState("");
    console.log("input: " + currentQuery);

    return (
        <div className={styles["wrap"]}>
            <div className={styles["search"]}>
                <input
                    type="text"
                    value={currentQuery}
                    className={styles["searchTerm"]}
                    placeholder="Enter text here..."
                    onInput={(e) => setCurrentQuery(e.target.value)}
                />

                <Button
                    label="Search"
                    type="submit"
                    clickHandler={() => {
                        //Need to modify clickHandler
                        setCurrentQuery(queries);
                    }}
                ></Button>
            </div>
        </div>
    );
};

export default SearchBar;
