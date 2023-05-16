const express = require('express');
const router = express.Router();

// Require controller modules.
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookinstanceController');

const authorRouter = require('./author');
const bookRouter = require('./book');
const genreRouter = require('./genre');
const bookinstanceRouter = require('./bookinstance');
/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', book_controller.index);
router.use('/book',bookRouter);


// GET request for list of all Book items.
router.get('/books', book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.use('/author',authorRouter);
router.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).


// GET request for list of all Genre.
router.use('/genre', genreRouter);
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).

router.use('/bookinstance',bookinstanceRouter);
// GET request for list of all BookInstance.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;
