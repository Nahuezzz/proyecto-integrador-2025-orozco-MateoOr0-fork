const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Producto A', price: 1000 },
    { id: 2, name: 'Producto B', price: 2000 },
    { id: 3, name: 'Producto C', price: 3000 }
  ])
})

module.exports = router
