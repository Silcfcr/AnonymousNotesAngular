const express = require('express');
const { APIController } = require('./../controllers/apiController');
const APIRouter = express.Router();

APIRouter
    .route('/api')
    .get(APIController.getAll)
    .post(APIController.addOne);

// APIRouter
//     .get('/:id', APIController.getOne);

// APIRouter
//     .delete('/:id', APIController.deleteOne);

// APIRouter
//     .put('/:id', APIController.updateOne);

module.exports = { APIRouter };