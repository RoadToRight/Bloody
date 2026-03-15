import Joi from "joi";
import ErrorHandler from "./errorMiddleware.js";

export const validateProduct = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        variants: Joi.array().items(Joi.string()).optional(),
        rating: Joi.number().min(0).max(5).optional(),
        productDetails: Joi.object().required(),
        specifications: Joi.object().required(),
        socialLinks: Joi.object().optional(),
        tags: Joi.array().items(Joi.string()).optional(),
        properties: Joi.object().optional(),
        software: Joi.object().required(),
        handle: Joi.string().required(),
        deleteImages: Joi.array().items(Joi.string()).optional()
    });

    const { error } = schema.validate(req.body);
    if (error) return next(new ErrorHandler(error.details[0].message, 400));
    next();
};