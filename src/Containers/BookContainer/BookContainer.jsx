import React from "react";
import BookCard from "../../Components/BookCard";
import getDataGoogleBooks from "../../Assets/data/googleData";
import data from "../../Assets/data/data";

const BookContainer = ({ results }) => {
    const bookCards = results.map((book, index) => {
        console.log(results);
        // const bookCards = data.map((index) => {
        return (
            <BookCard
                key={index}
                // thumbnail={book.index.thumbnail}
                // title={book.index.title}
                // authors={book.index.authors}
                // description={book.index.description}
            />
        );
    });

    return (
        <>
            <div>{bookCards}</div>
        </>
    );
};

export default BookContainer;
