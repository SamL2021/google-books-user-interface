import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles["hero-section"]}>
            <h1 className={styles["hero-section_title"]}>
                Google Books Search
            </h1>
        </div>
    );
};

export default Header;
