import Book from "../model/book.model.js";

export const getBooks = async (req, res) => {
  try {
    const book = await Book.find();
    console.log(book);
    res.status(200).json(book);
  } catch (error) {
    console.log("error", error);
    res.send(500).json(error);
  }
};
