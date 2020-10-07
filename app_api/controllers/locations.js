const mongoose = require("mongoose");
const Loc = mongoose.model("Location");

const locationsReadOne = (req, res) => {
  Loc.findById(req.params.locationid).exec((err, location) => {
    if (!location) {
      return res
        .status(404)
        .json({ message: "location not found", name: "2018250001 - 강명조" });
    } else if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(location);
  });
};

// placeholder 함수 --> 아무기능도 하지 않음
const locationsListByDistance = (req, res) => {};
const locationsCreate = (req, res) => {};
const locationsUpdateOne = (req, res) => {};
const locationsDeleteOne = (req, res) => {};

/* 테스트용
const test = (req, res) => {
  Loc.find({},(err, location) => {
    console.log(location);
    res.send('test');
  })
}
*/

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne,
  // test
};
