import axios from "axios";

export const getBooks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/book");
    if (response.status === 200) {
      return response.data; // return the array of books
    } else {
      console.error("Failed to fetch books", response.status);
      return [];
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
