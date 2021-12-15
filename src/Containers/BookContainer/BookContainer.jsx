import React from "react";
import BookCard from "../../Components/BookCard";
import getDataGoogleBooks from "../../Assets/data/googleData";
// import data from "../../Assets/data/data";

const BookContainer = ({ results }) => {
    const bookCards = results.map((book, index) => {
        //     console.log(results);
        // const bookCards = data.map((book, index) => {
        return (
            <BookCard
                key={index}
                thumbnail={book.image}
                title={book.title}
                authors={book.authors}
                description={book.description}
                preview={book.preview}
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
