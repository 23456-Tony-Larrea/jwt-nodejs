import multer from 'multer';
import path from 'path';
import fs from 'fs';

const createDir = (dir) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, { recursive: true }, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(process.cwd(), '/src/public/uploads/');
    createDir(dir).then(() => {
      // Dir has been created or it already exists
      cb(null, dir);
    }).catch((error) => {
      // An error occurred while creating the dir
      cb(error, null);
    });
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|pdf|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error('Error: Images Only and PDF!'));
  }
};

export const upload = multer({
  storage,
  limits: { fileSize: 8000000 },
  fileFilter,
}).single('image');