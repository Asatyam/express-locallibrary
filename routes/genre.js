const express = require('express');
const router = express.Router();
const genre_controller = require('../controllers/genreController');


router.get('/create', genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/create', genre_controller.genre_create_post);

// GET request to delete Genre.
router.get('/:id/delete', genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post('/:id/delete', genre_controller.genre_delete_post);

// GET request to update Genre.
router.get('/:id/update', genre_controller.genre_update_get);

// POST request to update Genre.
router.post('/:id/update', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/:id', genre_controller.genre_detail);


module.exports = router;