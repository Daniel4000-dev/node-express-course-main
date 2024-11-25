const express = require("express");
const {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

// create express router
const router = express.Router();

// all routes that are related to books only
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;