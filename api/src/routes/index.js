const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendfile('api/src/public/hello.html')
})

module.exports = router;
