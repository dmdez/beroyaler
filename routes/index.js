var express = require('express');
var router = express.Router();
var image = require('../controllers/image');
var request = require('request');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/image/:id', function(req, res) {
  image.get(req.params.id).then(function(image) {
    var attachment = req.query.attachment ? "attachment; " : "";
    res.setHeader("content-disposition", attachment + "filename=beroyaler.jpg");
    request(image.url).pipe(res);
  }).catch(function() {
    res.send('Image not found');
  }).done();
});

router.get('/profile/:id', function(req, res) {
  var image_id = req.params.id;
  var image_path = '/image/' + image_id;
  var fullImageUrl = req.protocol + '://' + req.get('host') + image_path;
  res.render('image', {
    og_image: fullImageUrl,
    image_path: image_path
  });
});

router.get('/signature', function(req, res) {
  var cloudinary = require('cloudinary');
  res.json({
    api_key: cloudinary.config().api_key,
    api_url: cloudinary.utils.api_url("upload"),
    signature: cloudinary.utils.api_sign_request(req.query, cloudinary.config().api_secret)
  });
});

module.exports = router;
