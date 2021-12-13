import styles from "./SearchBar.module.scss";

const SearchBar = () => {
    return (
        <div className={styles["wrap"]}>
            <div className={styles["search"]}>
                <input
                    type="text"
                    className={styles["searchTerm"]}
                    placeholder="Enter text here..."
                />
                <button type="submit" className={styles["searchButton"]}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
