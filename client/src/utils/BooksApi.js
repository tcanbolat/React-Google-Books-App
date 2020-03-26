import axios from "axios";

export default {
  BooksApi: function() {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q={harry%20potter}"
    );
  }
};
