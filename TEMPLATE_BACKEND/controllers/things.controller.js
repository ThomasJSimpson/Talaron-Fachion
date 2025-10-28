const Thing = require('../models/thing');

exports.createThing = async (req, res) => {
  try {
    const thing = await Thing.create(req.body);
    return res.status(201).json(thing);
  } catch (err) {
    return res.status(400).json({ error: 'Bad Request', details: err.message });
  }
};

exports.getAllThings = async (_req, res) => {
  try {
    const items = await Thing.find().sort({ createdAt: -1 });
    return res.status(200).json(items);
  } catch (err) {
    return res.status(500).json({ error: 'Server Error', details: err.message });
  }
};

exports.getThingById = async (req, res) => {
  try {
    const item = await Thing.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not Found' });
    return res.status(200).json(item);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid ID', details: err.message });
  }
};

exports.updateThing = async (req, res) => {
  try {
    const item = await Thing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!item) {
      return res.status(404).json({ error: 'Not Found' });
    }

    return res.status(200).json(item);
  } catch (err) {
    return res.status(400).json({ error: 'Invalid Data', details: err.message });
  }
};

exports.deleteThing = async (req, res) => {
  try {
    const item = await Thing.findByIdAndDelete(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Not Found' });
    }

    return res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    return res.status(400).json({ error: 'Invalid ID', details: err.message });
  }
};
