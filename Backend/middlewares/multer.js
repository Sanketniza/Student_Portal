import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory as buffers

export const singleUpload = multer({ storage }).single("file");
