const { faker } = require("@faker-js/faker");

const userList = [
  {
    id: 1,
    login: "admin",
    password: "admin",
    email: "Admin@yandex.ru",
  },
  {
    id: 2,
    login: "trueBookFan",
    password: 123,
    email: "John@yandex.ru",
  },
];

const bookInfo = [
  {
    name: "Atomic Habits",
    img: "atomic-habits-james-clear.jpg",
    author: "James Clear",
    genre: "Anthology",
  },
  {
    name: "Flowers for Algernon",
    img: "flowers-for-algernon-daniel-keyes.jpg",
    author: "Daniel Keyes",
    genre: "Science Fiction",
  },
  {
    name: "Dracula",
    img: "dracula-bram-stoker.jpg",
    author: "Bram Stoker",
    genre: "Classic",
  },
  {
    name: "Later",
    img: "later-stephen-king.jpg",
    author: "Stephen King",
    genre: "Horror",
  },
  {
    name: "After",
    img: "after-book-1-anna-todd.jpg",
    author: "Anna Told",
    genre: "Drama",
  },
  {
    name: "Dreamcatcher",
    img: "dreamcatcher-stephen-king.jpg",
    author: "Stephen King",
    genre: "Mystery",
  },
  {
    name: "Essentialism",
    img: "essentialism-greg-mckeown.jpg",
    author: "Greg Mckeown",
    genre: "Anthology",
  },
  {
    name: "Fight club",
    img: "fight-club-chuck-palahniuk.jpg",
    author: "Chuck Palahniuk",
    genre: "Thriller",
  },
  {
    name: "HarryPotter and the sorcerer's stone",
    img: "harry-potter-1-harry-potter-and-the-sorcerer-s-stone-j-k-rowling.jpg",
    author: "J. K. Rowling",
    genre: "Fantasy",
  },
  {
    name: "HarryPotter and the goblet of fire",
    img: "harry-potter-4-harry-potter-and-the-goblet-of-fire-j-k-rowling.jpg",
    author: "J. K. Rowling",
    genre: "Fantasy",
  },
  {
    name: "Homo-deus. A brief history of tomorrow",
    img: "homo-deus-a-brief-history-of-tomorrow-yuval-noah-harari.jpg",
    author: "Yuval Noah Harari",
    genre: "Mythology",
  },
  {
    name: "Monday starts on saturday",
    img: "monday-starts-on-saturday-arkady-and-boris-strugatsky.jpg",
    author: "Arkady and Boris Strugatsky",
    genre: "Anthology",
  },
  {
    name: "Murder on the links",
    img: "murder-on-the-links-agatha-christie.jpg",
    author: "Agatha Christie",
    genre: "Crime",
  },
  {
    name: "Theatre",
    img: "theatre-william-somerset-maugham.jpg",
    author: "William Somerset Maugham",
    genre: "Classic",
  },
  {
    name: "The Catcher in the rye",
    img: "the-catcher-in-the-rye-jerome-david-salinger.jpg",
    author: "Jerome David Salinger",
    genre: "Classic",
  },
  {
    name: "The Hobbit",
    img: "the-hobbit-j-r-r-tolkien.jpg",
    author: "J. R. R. Tolkien",
    genre: "Fantasy",
  },
  {
    name: "The invisible life of addie ",
    img: "the-invisible-life-of-addie-larue-v-e-schwab.jpg",
    author: "Larue V. E. Schwab",
    genre: "Science Fiction",
  },
  {
    name: "The Call of Cthulhu",
    img: "the-call-of-cthulhu-h-p-lovecraft.jpg",
    author: "H. P. Lovecraft",
    genre: "Horror",
  },
  {
    name: "Treasure island",
    img: "treasure-island-robert-louis-stevenson.jpg",
    author: "Robert Louis Stevenson",
    genre: "Action",
  },
  {
    name: "The cruel prince",
    img: "the-folk-of-the-air-1-the-cruel-prince-holly-black.jpg",
    author: "Holly Black",
    genre: "Fantasy",
  },
  {
    name: "Dune",
    img: "dune-frank-herbert.jpg",
    author: "Frank Herbert",
    genre: "Science Fiction",
  },
  {
    name: "Murder on the orient express",
    img: "murder-on-the-orient-express-agatha-christie.jpg",
    author: "Agatha Christie",
    genre: "Crime",
  },
  {
    name: "The gunslinger",
    img: "the-gunslinger-stephen-king.jpg",
    author: "Stephen King",
    genre: "Fantasy",
  },
];

const genres = [
  "Action",
  "Anthology",
  "Classic",
  "Comic",
  "Crime",
  "Drama",
  "Fable",
  "FairyTale",
  "HistoricalFiction",
  "Fantasy",
  "Horror",
  "Humor",
  "Mystery",
  "Mythology",
  "Romance",
  "ScienceFiction",
  "ShortStory",
  "Thriller",
];

const bookList = [...Array(100)].map((_, i) => ({
  id: i + 1,
  name: bookInfo[i]?.name || faker.word.words({ count: { min: 1, max: 5 } }),
  year: faker.date
    .between({
      from: "1970-01-01T00:00:00.000Z",
      to: "2024-01-01T00:00:00.000Z",
    })
    .getFullYear(),
  genre:
    bookInfo[i]?.genre || genres[Math.floor(Math.random() * genres.length)],
  author: bookInfo[i]?.author || faker.person.fullName(),
  img: bookInfo[i]?.img || "testImg.jpg",
  description: faker.lorem.paragraphs({ min: 1, max: 5 }, "\n"),
  editors: [...Array(Math.floor(Math.random() * 6))]
    .map(() => faker.person.fullName())
    .join(", "),
  language: "Standart English (USA & UK)",
  paperback: faker.word.words({ count: { min: 3, max: 8 } }),
}));

const popularList = { id: 1, bookID: [...Array(6).keys()] };
module.exports = { userList, bookList, popularList };
