const express = require('express')

const router = express.Router()

router.get('/add_product', (req, res, next) => {
	res.send('<h1>Add product</h1>')
})

module.exports = router