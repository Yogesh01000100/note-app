const express = require('express');
const { createNote, getNotes } = require('../controllers/noteController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/create', auth, createNote);
router.get('/get-note', auth, getNotes);

module.exports = router;
