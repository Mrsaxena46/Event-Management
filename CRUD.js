const express = require('express');
const Event = require('./models/Event');
const auth = require('./middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const event = new Event({ ...req.body, createdBy: req.user.userId });
  await event.save();
  res.status(201).send(event);
});

router.get('/', async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

module.exports = router;