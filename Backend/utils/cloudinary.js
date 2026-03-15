import cloudinary from "cloudinary";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const uploadImage = async (filePath, folder = process.env.CLOUDINARY_FOLDER) => {
  try {
    const result = await cloudinary.v2.uploader.upload(filePath, { folder });
    if (filePath) {
      fs.unlinkSync(filePath)
    }
    return { public_id: result.public_id, url: result.secure_url };
  } catch (error) {
    next(new ErrorHandler("Image upload failed", 400))
  }
};

export const deleteImage = async (publicId) => {
  try {
    const result = await cloudinary.v2.uploader.destroy(publicId);
    return result;
  } catch (error) {
    next(new ErrorHandler("Image deletion failed", 400))
  }
};