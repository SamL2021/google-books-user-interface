const getDataGoogleBooks = async (callback, query) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=harry%20potter";

    // const getDataGoogleBooks = async (query) => {
    // const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    //Fetch response data from url
    const response = await fetch(url);
    //process response data into json
    const json = await response.json();

    // map over volumeInfo to extract information and create new array
    // console.log(json.items);
    let bookInfo = json.items.map((book) => book.volumeInfo);

    // console.log(bookInfo);

    let results = bookInfo.map((book) => {
        const result = {
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.imageLinks.thumbnail,
        };
        return result;
    });
    callback(results);
};

// getDataGoogleBooks();

export default getDataGoogleBooks;