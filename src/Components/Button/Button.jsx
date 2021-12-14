import React from "react";
import styles from "./Button.module.scss";

// Button Label
// Button callback <- on click handler

const Button = ({ clickHandler, label }) => {
    return (
        <>
            <button className={styles["searchButton"]} onClick={clickHandler}>
                {label}
            </button>
        </>
    );
};

export default Button;
