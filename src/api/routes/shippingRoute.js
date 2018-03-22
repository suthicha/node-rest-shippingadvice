const express = require('express');
const router = express.Router();
const shippingController = require('../controllers/shippingController');
const checkAuth = require('../middleware/check-auth');

router.get('/:refno', checkAuth, shippingController.find);
router.get('/:fromdate/:todate', checkAuth, shippingController.select);
router.put('/', checkAuth, shippingController.insert);
router.patch('/', checkAuth, shippingController.update);
router.delete('/:trxno/:userId', checkAuth, shippingController.delete);

module.exports = router;
