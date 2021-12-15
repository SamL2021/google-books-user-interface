import React from "react";
import styles from "./Button.module.scss";

// Button Label = search
// Button callback <- handleClick

const Button = ({ handleClick, label }) => {
    return (
        <>
            <button className={styles["searchButton"]} onClick={handleClick}>
                {label}
            </button>
        </>
    );
};

export default Button;
