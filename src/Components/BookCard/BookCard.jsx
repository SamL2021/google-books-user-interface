import styles from "./BookCard.module.scss";

// This file is the component which can be used as a template and passed props

const BookCard = ({ thumbnail, authors, title, description, preview }) => {
    return (
        <div className={styles["grid-container"]}>
            <div className={styles["grid-item"]}>
                <img src={thumbnail} alt="thumbnail" />
                <p>
                    <strong>Title:</strong> {title}
                </p>
                <p>
                    <strong>Author:</strong> {authors}
                </p>
                <p>
                    <strong>Description: </strong>
                    {description}
                </p>
                <p>
                    <strong>More information: </strong>
                    <a href={preview}>here</a>
                </p>
            </div>
        </div>
    );
};

export default BookCard;
