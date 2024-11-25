const Book = require('../models/book');

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        if(allBooks?.length > 0) {
            res.status(200).json({
                success: true,
                mwessage: 'List of books fetched successfully',
                data: allBooks
            })
        } else {
            res.ststus(404).json({
                success: false,
                mesage: 'No books found in collection'
            })
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again'
        })
    }
};

const getSingleBook = async (req, res) => {
    try {
        const getCurrentBookByID = req.params.id;
        const bookDetailsByID = await Book.findById(getCurrentBookByID);

        if(!bookDetailsByID) {
            return res.status(404).json({
                success: false,
                message: 'Book with the current ID is not found! Please try with another ID'
            });
        };

        res.status(200).json({
            success: true,
            message: bookDetailsByID 
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again'
        })
    }
};

const addBook = async (req, res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData);
        if(newlyCreatedBook) {
            res.status(200).json({
                success: true,
                message: 'Book added successfully',
                data: newlyCreatedBook,
            });
        }

    } catch(e) {
        console.log(e);
    }
};

const updateBook = async (req, res) => {
    try {
        const updatedBookFormData = req.body;
        const getCurrentBookId = req.params.id;
        const updatedBook = await Book.findByIdAndUpdate(
            getCurrentBookId,
            updatedBookFormData,
            {
                new: true,
            });

            if(!updatedBook) {
                res.status(404).json({
                    success: false,
                    message: "Book is not found with this ID"
                });
            }

            res.status(200).json({
                success: true,
                message: "Book updated successfully",
                data: updatedBook
            })
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again',
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const getCurrentBookID = req.params.id
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

        if(!deletedBook) {
            res.status(404).json({
                success: false,
                message: 'Book is not found'
            });
        };

        res.status(200).json({
            success: true,
            message: 'Book deleted successfully'
        })
    } catch(e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Something went wrong! Please try again',
        });
    }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};
