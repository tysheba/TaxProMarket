import axios from "axios";

export default {
  // Gets all books
  getPros: function() {
    return axios.get("/api/taxpros");
  },
  // Gets the book with the given id
  getPro: function(id) {
    return axios.get("/api/taxpros/" + id);
  },
  // Deletes the book with the given id
  updatePro: function(id) {
    return axios.put("/api/taxpros/" + id);
  },
  // Saves a book to the database
  savePro: function(proData) {
    return axios.post("/api/taxpros", proData);
  }
};
