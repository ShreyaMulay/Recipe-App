const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload'); // Import the multer middleware

// Create a new recipe
/*router.post('/', auth, async (req, res) => {
  const { title, description, ingredients } = req.body;

  try {
    const newRecipe = new Recipe({ title, description, ingredients, user: req.user.id });
    const recipe = await newRecipe.save();
    res.json(recipe);
  } catch (err) {
    console.log(err)

    res.status(500).send('Server error');
  }
});*/
// Upload a Recipe with video and thumbnail
router.post('/', upload.fields([{ name: 'video' }, { name: 'thumbnail' }]), async (req, res) => {
  const { title, description, ingredients } = req.body;

  // Get the paths of the uploaded files
  const videoUrl = req.files.video[0].path; // Get video path
  const thumbnailUrl = req.files.thumbnail[0].path; // Get thumbnail path
  const userid= req.body.userid;

  // console.log(title)
  // console.log(description)
  // console.log(description)
  // console.log("videoUrl",videoUrl)
  // console.log("thumbnailUrl",thumbnailUrl)
  // console.log("requser",req.user.id)

  try {
    const recipe = new Recipe({
      title,
      description,
      ingredients,
      videoUrl,
      thumbnailUrl,
      user: userid,
    });

    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    console.error("err",err); // Log the error for debugging
    res.status(500).json({ msg: 'Server error' });
  }
});


// Get all recipes
/*router.get('/', auth, async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user.id });
    res.json(recipes);
  } catch (err) {
    res.status(500).send('Server error');
  }
});*/
// Get all recipes
router.get('/', auth, async (req, res) => {
  try {
    // Fetch all recipes from the database, not restricted by user
    const recipes = await Recipe.find().populate('user', 'firstname lastname');  // Populates user data (optional)
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// router.get('/', auth, async (req, res) => {
//   const { userId } = req.query; 

//   console.log(req.body);
//   try {
//     let recipes;
//     // If userId is provided, fetch recipes for that user; otherwise, fetch all recipes
//     if (userId) {
//       recipes = await Recipe.find({ user: userId }).populate('user', 'firstname lastname');
//     } else {
//       recipes = await Recipe.find().populate('user', 'firstname lastname');
//     }
//     res.json(recipes);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });



// Update a recipe
router.put('/:id', auth, async (req, res) => {
  const { title, description, ingredients } = req.body;
  
  try {
    let recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

    if (recipe.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    recipe = await Recipe.findByIdAndUpdate(req.params.id, { $set: { title, description, ingredients } }, { new: true });
    res.json(recipe);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete a recipe
router.delete('/:id', auth, async (req, res) => {
  try {
    let recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

    if (recipe.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    await Recipe.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Recipe removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
