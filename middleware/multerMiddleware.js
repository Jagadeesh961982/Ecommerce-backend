import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Create 'uploads' directory if it doesn't exist
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination(req, file, cb) {
        //console.log(req.body, file);
        cb(null, uploadDir);
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

export const upload=multer({
    storage:storage,

})

