const getDataGoogleBooks = async (currentQuery, callback) => {
    // const url = "https://www.googleapis.com/books/v1/volumes?q=travel";

    const url = `https://www.googleapis.com/books/v1/volumes?q=${currentQuery}`;
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
            preview: book.previewLink,
        };
        console.log(result);

        //  {
        //      /* { if (thumbnail = "" {
        //     <img
        //         src="../../../src/Assets/css/img/thumbnail-404.png"
        //         alt="404"
        //     />
        // } else {  */
        //  }

        //  let thumbnail = "";
        //  if (item.volumeInfo.imageLinks) {
        //      thumbnail = item.volumeInfo.imageLinks.thumbnail;
        //  }
        return result;
    });
    callback(results);
};

export default getDataGoogleBooks;
