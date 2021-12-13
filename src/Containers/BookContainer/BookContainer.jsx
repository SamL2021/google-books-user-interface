import React from "react";
import BookCard from "../../Components/BookCard";
import data from "./../../Assets/data/data";
import styles from "./BookContainer.module.scss";

const BookContainer = () => {
    const bookCards = data.map((bookCard, index) => {
        return (
            <BookCard
                key={index}
                thumbnail={bookCard.thumbnail}
                title={bookCard.title}
                authors={bookCard.authors}
                description={bookCard.description}

                // thumbnail={thumbnail}
                // title={item.volumeInfo.title}
                // authors={item.volumeInfo.authors}
                // description={item.volumeInfo.description}
            />
        );
    });

    return (
        <>
            <div className={styles["menu-container"]}>
                {bookCards}
                {/* <BookCard
                    title={data[0].title}
                    description={data[0].description}
                    authors={data[0].description}
                />
                <BookCard
                    title={data[1].title}
                    description={data[1].description}
                    authors={data[1].description}
                />
                <BookCard
                    title={data[2].title}
                    description={data[2].description}
                    authors={data[2].description}
                /> */}
            </div>
        </>
    );
};

export default BookContainer;
