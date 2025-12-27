const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    status: 'UP',
    timestamp: new Date()
  });
});

module.exports = router;