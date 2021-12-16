import styles from "./SearchBar.module.scss";
import { useState } from "react";
import Button from "../Button";
import getDataGoogleBooks from "../../Assets/data/googleData";

const SearchBar = ({ resultsCallback }) => {
    const [currentQuery, setCurrentQuery] = useState("");

    // created a state named 'currentQuery' which saves the data from the search input on every occurance of the change event.

    // console.log("input: " + currentQuery);

    const handleChange = (e) => setCurrentQuery(e.target.value);

    // The handleChange method takes the event object as the arguement and sets the current value of the form to the currentQuery state using setcurrentQuery method provided by React.useState method.

    return (
        <div className={styles["wrap"]}>
            <div className={styles["search"]}>
                <input
                    type="text"
                    value={currentQuery}
                    className={styles["searchTerm"]}
                    placeholder="Enter text here..."
                    onChange={handleChange}
                />
                {/* When we call the function to search for books (getdatGoogleBooks), we pass the currentQuery(keyword) and call back function(from useState) pass everything as
                parameters while calling the components to pass the data */}
                <Button
                    handleClick={() => {
                        getDataGoogleBooks(currentQuery, resultsCallback);
                    }}
                    label="search"
                ></Button>
            </div>
        </div>
    );
};

export default SearchBar;
