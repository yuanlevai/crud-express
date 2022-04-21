const product = require("../models/productsModel");

// melihat data product
const get = async (req, res) => {
    try {
        const products = await product.get();
        if(products.length !== 0){
            res.status(201).json({products : products})
        }else{
            res.status(404).json({message : "Data not found"})
        }
    } catch (error) {
        res.status(401).json({message : error});
    }
}

// melihat data product berdasarkan id
const getById = async (req, res) => {
    try {
        const productId = req.params.id;
        const productById = await product.get(productId);
        if (productById.length !==0) {
            res.status(201).json({product : productById})
        }else {
            res.status(404).json({message : `Data with id ${productId} not found`})
        }
    } catch (error) {
        res.status(401).json({message : error});
    }
}

// create data product
const create = async (req, res) => {
    try {
        const productData = req.body;
        const insertData = await product.create(productData)
        .then(row => {
            res.status(201).json({
                product : productData,
                message : "Insert success"
            })
        })
        .catch( err => {
            res.status(400).json({ message : err });
        })
    } catch (error) {
        res.status(500).json({message : error}); 
    }
}

// update data product
const update = async (req, res) => {
    try {
        const productId = req.params.id;
        const productById = await product.get(productId);
        const productData = req.body
        if (productById.length !== 0) {
            const update = await product.update(productData, productId)
            .then(row => {
                res.status(201).json({
                    message : `product with id${productId} success to update`
                })
            })
            .catch( err => {
                res.status(400).json({ message : err });
            })
        }else{
            res.status(404).json({
                message : `Product with id ${productId} not found`
            })
        }
    } catch (error) {
        res.status(500).json({message : error}); 
    }
}

const removed = async (req, res) => {
    try {
        const productId = req.params.id;
        const productById = await product.get(productId);

        if (productById.length !==0) {
            const removed = await product.remove(productId)
            .then(row => {
                res.status(201).json({
                    message : `product with id${productId} success to delete`
                })
            })
            .catch( err => {
                res.status(400).json({ message : err });
            })
        }else{
            res.status(404).json({
                message : `Product with id ${productId} not found`
            })
        }
    } catch (error) {
        res.status(500).json({ message : error });
    }
}
module.exports = {
    get,
    getById,
    create,
    update,
    removed
}