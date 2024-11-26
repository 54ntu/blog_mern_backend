const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const imagename = Date.now() + file.originalname;
    cb(null, imagename);
  },
});

const upload = multer({ storage: storage });

module.exports = {
  upload,
};
