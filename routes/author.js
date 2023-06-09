const express = require('express');
const router = express.Router()
const author_controller = require('../controllers/authorController');


router.get('/create', author_controller.author_create_get);

// POST request for creating Author.
router.post('/create', author_controller.author_create_post);

// GET request to delete Author.
router.get('/:id/delete', author_controller.author_delete_get);

// POST request to delete Author.
router.post('/:id/delete', author_controller.author_delete_post);

// GET request to update Author.
router.get('/:id/update', author_controller.author_update_get);

// POST request to update Author.
router.post('/:id/update', author_controller.author_update_post);

// GET request for one Author.
router.get('/:id', author_controller.author_detail);

module.exports = router;