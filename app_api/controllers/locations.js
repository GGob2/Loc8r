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


const locationsListByDistance = async (req, res) => {
  const lng = parseFloat(req.query.lng);
  const lat = parseFloat(req.query.lat);
  const near = {
    type: "Point",
    coordinates: [lng, lat],
  };
  const geoOptions = {
    distanceField: "distance.calculated",
    spherical: true,
    maxDistance: 20000,
  };
  if (!lng || !lat) {
    return res
      .status(404)
      .json({ message: "lng and lat query parameters are required" });
  }
  try {
    const results = await Loc.aggregate([
      {
        $geoNear: {
          near,
          ...geoOptions,
        },
      },
    ]);

    const locations = results.map((result) => {
      return {
        _id: result._id,
        name: result.name,
        address: result.address,
        rating: result.rating,
        facilities: result.facilities,
        distance: `${result.distance.calculated.toFixed()}m`,
      };
    });
    res.status(200).json(locations);
  } catch (err) {
    res, status(404).json(err);
  }
};


// placeholder 함수 --> 아무기능도 하지 않음
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
