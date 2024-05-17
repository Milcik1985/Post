import Joi from "joi";

const movieValidationSchema = Joi.object({
  imageUrl: Joi.string().required(),
  title: Joi.string().required(),
  genre: Joi.string().required(),
  rating: Joi.number().required(),
});

export default movieValidationSchema;
