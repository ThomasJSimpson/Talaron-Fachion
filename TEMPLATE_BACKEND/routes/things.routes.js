const express = require('express');
const ctrl = require('../controllers/things.controller');
const router = express.Router();

router.post('/', ctrl.createThing);
router.get('/', ctrl.getAllThings);
router.get('/:id', ctrl.getThingById);
router.put('/:id', ctrl.updateThing);
router.delete('/:id', ctrl.deleteThing);

module.exports = router;
