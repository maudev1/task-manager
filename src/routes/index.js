const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.sendfile('./views/index.html')
  res.render('./public/')
})

module.exports = router;
