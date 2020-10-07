const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const locationsReadOne = (req, res) => {
    Loc
        .findById(req.params.locationid)
        .exec((err, location)=> {
            console.log("data 찾음" + location)
            res
                .status(200)
                .json(location);
        });
};

// placeholder 함수 --> 아무기능도 하지 않음
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