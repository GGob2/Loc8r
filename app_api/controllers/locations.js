const mongoose = require('mongoose');
const Loc = mongoose.model('Location');


// placeholder 함수 --> 아무기능도 하지 않음
const locationsReadOne = (req, res) => {
    res
        .status(200)
        .json({"status" : "success"});
};

const locationsListByDistance = (req, res) => {};
const locationsCreate = (req, res) => {};
const locationsUpdateOne = (req, res) => {};
const locationsDeleteOne = (req, res) => {};


module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
};