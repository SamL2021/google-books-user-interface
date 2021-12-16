import defaultImg from "../css/img/default-book.jpg";
const errorImg = defaultImg;

const getDataGoogleBooks = async (currentQuery, callback) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${currentQuery}`;
    const response = await fetch(url);
    //process response data into json
    const json = await response.json();

    // map over volumeInfo to extract information and create new array
    let bookInfo = json.items.map((book) => book.volumeInfo);

    let results = bookInfo.map((book) => {
        const result = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            image:
                book.imageLinks === undefined
                    ? `${errorImg}`
                    : `${book.imageLinks.thumbnail}`,
            preview: book.previewLink,
        };
        // console.log(result);

        return result;
    });
    callback(results);
};

export default getDataGoogleBooks;
