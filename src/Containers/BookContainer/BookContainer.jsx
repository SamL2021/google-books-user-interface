import React from "react";
import BookCard from "../../Components/BookCard";
import data from "./../../Assets/data/data";

const BookContainer = () => {
    const getDataGoogleBooks = async () => {
        const url =
            "https://www.googleapis.com/books/v1/volumes?q={ currentQuery }&maxResults=20";
        const response = await fetch(url);
        const json = await response.json();

        let bookInfo = json.items.map((book) => book.volumeInfo);
        let resultsArray = [];

        bookInfo.map((book) => {
            const result = {
                title: book.title,
                authors: book.authors,
                description: book.description,
                image: book.imageLinks.thumbnail,
            };
            resultsArray.push(result);
        });
        console.log(resultsArray);
    };

    getDataGoogleBooks();

    const bookCards = data.map((book, index) => {
        return (
            // <BookCard
            // key={index}
            //   thumbnail={thumbnail}
            //   title={item.volumeInfo.title}
            //   authors={item.volumeInfo.authors}
            //   publisher={item.volumeInfo.publisher}
            //   description={item.volumeInfo.description}
            // />

            <BookCard
                key={index}
                thumbnail={book.thumbnail}
                title={book.title}
                authors={book.authors}
                description={book.description}
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
