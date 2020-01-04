const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res){
    Product.find({}, function(err, foundProducts) {
        return res.json(foundProducts)
    })
})

router.get('/:productId', function(req, res){
    const productId = req.params.productId
    Product.findById(productId, function(err, foundProduct) {
        if(err) {
            return res.status(422).json({errors: [{title: 'product error', detail: 'product not found'}]})
        }
        return res.json(foundProduct)
    })
})

module.exports = router