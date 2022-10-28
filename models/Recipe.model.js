import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const recipeSchema = new Schema({
  title: { type: String, unique, require },
  level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
  ingredients: [String],
  cuisine: { type: String, require },
  dishType: {
    type: String, enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other']
  },
  image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg' },
  duration: { type: Number, min: 0 },
  creator: String,
  created: { type: Date, default: 'Today' }
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe;
