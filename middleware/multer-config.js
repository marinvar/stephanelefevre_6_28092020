const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/bmp': 'bmp',
  'image/gif': 'gif',
  'image/tiff': 'tif'
};

/**
 * middleware permitting image files in the app and encoding image names
 */
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    /* const name = file.originalname.split(' ').join('_'); */
    const extension = MIME_TYPES[file.mimetype];
    callback(null, file.fieldname + Date.now() + '.' + extension);
  }
});

module.exports = multer({ storage }).single('image');