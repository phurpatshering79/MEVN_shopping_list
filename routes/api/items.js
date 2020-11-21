const express = require('express')
const router = express.Router()

//using the item db
const Item = require('../../models/Items')

// @route  GET api/items
// @desc   GET All items
// @access Public
router.get('/', (req, res) => {
  Item.find().then((items) => res.json(items))
})

// @route  POST api/items
// @desc   CREATE an item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  })
  newItem.save().then((item) => res.json(item))
})

// @route  DELETE api/items/:id
// @desc   DELETE an item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.send('Delete Success')))
    .catch(() => res.send('Error deleting'))
})

module.exports = router
