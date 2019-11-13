const Router = require('express-promise-router');
const {
  postGif, deleteGif, commentGif, getGifbyId,
} = require('../controllers');
const { auth, multerUploads } = require('../middleware');
const { cloudinary } = require('../config');

const router = new Router();

router.post('/gifs', auth, cloudinary, multerUploads, postGif);
router.post('/gifs/:id/comment', auth, commentGif);
router.delete('/gifs/:id', auth, deleteGif);
router.get('/gifs/:id', auth, getGifbyId);

module.exports = router;
