const Router = require('express-promise-router');
const {
  postGif, deleteGif, commentGif, getGifbyId, flagGif, flagComment,
} = require('../controllers');
const { auth, multerUploads } = require('../middleware');
const { cloudinary } = require('../config');

const router = new Router();

router.post('/gifs', auth, cloudinary, multerUploads, postGif);
router.post('/gifs/:id/comment', auth, commentGif);
router.delete('/gifs/:id', auth, deleteGif);
router.get('/gifs/:id', auth, getGifbyId);
router.post('/gifs/:id/flag', auth, flagGif);
router.post('/gifs/:id/comment/:commentId/flag', auth, flagComment);

module.exports = router;
