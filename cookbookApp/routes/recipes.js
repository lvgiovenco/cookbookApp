var express = require('express');
var router = express.Router();

/* GET recipes index page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Recipes App' });
});

/* GET bread recipes page. */
router.get('/bread', function(req, res, next) {
  res.render('recipes', { title: 'Bread Recipes' });
});

/* POST A  bread recipe */
router.post('/submitRecipe', function(req, res, next) {
  res.render('thankYou', { recipeType: 'Bread Recipe' });
});

/* GET upload a recipe */
router.get('/submitRecipe', function(req, res, next) {
  res.render('submitRecipe', { recipeType: 'Bread Recipe' });
});

module.exports = router;