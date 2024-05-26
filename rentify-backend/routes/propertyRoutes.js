const express = require('express');
const { createProperty, getProperties, getProperty, updateProperty, deleteProperty, likeProperty } = require('../controllers/propertyController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createProperty);
router.get('/', getProperties);
router.get('/:id', getProperty);
router.put('/:id', auth, updateProperty);
router.delete('/:id', auth, deleteProperty);
router.put('/like/:id', auth, likeProperty);

module.exports = router;
