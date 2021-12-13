import styles from "./BookCard.module.scss";

// This file is the actual component which can be used as a template and passed props

// How to display image from URL?

// const bookData = {
// thumbnail: (
//     <a href="http://books.google.com/books/content?id=1RdNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
// ),
//     title: "Billion Dollar Whale",
//     authors: "Tom Wright and Bradley Hope",
//     description:
//         'Named a Best Book of 2018 by the Financial Times and Fortune, this "thrilling" (Bill Gates) New York Times bestseller exposes how a "modern Gatsby" swindled over $5 billion with the aid of Goldman Sachs in "the heist of the century" (Axios). Now a #1 international bestseller, Billion Dollar Whale is "an epic tale of white-collar crime on a global scale" (Publishers Weekly), revealing how a young social climber from Malaysia pulled off one of the biggest heists in history. In 2009, a chubby, mild-mannered graduate of the University of Pennsylvania\'s Wharton School of Business named Jho Low set in motion a fraud of unprecedented gall and magnitude--one that would come to symbolize the next great threat to the global financial system. Over a decade, Low, with the aid of Goldman Sachs and others, siphoned billions of dollars from an investment fund--right under the nose of global financial industry watchdogs. Low used the money to finance elections, purchase luxury real estate, throw champagne-drenched parties, and even to finance Hollywood films like The Wolf of Wall Street. By early 2019, with his yacht and private jet reportedly seized by authorities and facing criminal charges in Malaysia and in the United States, Low had become an international fugitive, even as the U.S. Department of Justice continued its investigation. Billion Dollar Whale has joined the ranks of Liar\'s Poker, Den of Thieves, and Bad Blood as a classic harrowing parable of hubris and greed in the financial world.',
// };

const BookCard = ({ thumbnail, authors, title, description }) => {
    return (
        <div className={styles["grid-container"]}>
            <div className={styles["grid-item"]}>
                <img src={thumbnail} alt="thumbnail" />
                <p>
                    <strong>Title:</strong> {title}
                </p>
                <p>
                    <strong>Author(s):</strong> {authors}
                </p>
                <p>
                    <strong>Description: </strong>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BookCard;
