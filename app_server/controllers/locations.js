const Location = require("../../app_api/models/locations");
const request = require("request");
const { response } = require("express");

const apiOptions = {
  server: "http://localhost:3000",
};

if (process.env.NODE_ENV === "production") {
  apiOptions.server = "https://loc8rv2-2018250001.herokuapp.com";
}

const requestOptions = {
  url: "http://yourapi.com/api/path",
  method: "GET",
  json: {},
  qs: {
    offset: 20,
  },
};

request(requestOptions, (err, response, body) => {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    console.log(body);
  } else {
    console.log(response.statusCode);
  }
});
const homelist = (req, res) => {
  // renderHomepage(req,res);
  const path = "/api/locations";
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: "GET",
    json: {},
    qs: {
      lng: 127.263022,
      lat: 37.0087091,
      maxDistance: 200000,
    },
  };
  request(requestOptions, (err, { statusCode }, body) => {
    let data = [];
    if (statusCode === 200 && body.length) {
      data = body.map((item) => {
        item.distance = formatDistance(item.distance);
        return item;
      });
    }
    renderHomepage(req, res, data);
  });
};

const renderHomepage = (req, res, responseBody) => {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No places found nearby";
    }
  }

  res.render("locations-list", {
    title: "Loc8r - find a place to work with wifi",
    pageHeader: {
      title: "Loc8r",
      strapLine: "Find places to work with wifi near you!",
    },
    sidebar:
      "Looking for wifi and a seat? Loc8r helps you find places \
      to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: responseBody,
    message,
    // [
    //   {
    //     name: "Starcups",
    //     address: "경기도 안성시 안성2동 비룡 5길 18",
    //     rating: 3,
    //     facilities: ["Hot drinks", "Food", "Premium wifi"],
    //     distance: "200m",
    //   },
    //   {
    //     name: "Cafe Hero",
    //     address: "경기도 안성시 당왕동 번지 1층 551-4",
    //     rating: 4,
    //     facilities: ["Hot drinks", "Food", "Premium wifi"],
    //     distance: "67m",
    //   },
    //   {
    //     name: "Burger Queen",
    //     address: "서울특별시 관악구 봉천동 남부순환로 1934",
    //     rating: 2,
    //     facilities: ["Food", "Premium wifi"],
    //     distance: "66.3km",
    //   },
    //   {
    //     name: "카페 디플로르",
    //     address: "경기도 안성시 안성2동 비룡 5길 19",
    //     rating: 5,
    //     facilities: ["Food", "Premium wifi", "Bingsoo"],
    //     distance: "230m",
    //   },
    //   {
    //     name: "신의한술",
    //     address: "경기도 안성시 비룡 3길 12 1층",
    //     rating: 3,
    //     facilities: ["Food", "Premium wifi", "Rum", "Beer"],
    //     distance: "10m",
    //   },
    //   {
    //     name: "안성 스타벅스 DT점",
    //     address: "서울특별시 관악구 봉천동 남부순환로 1934",
    //     rating: 4,
    //     facilities: ["Food", "Premium wifi, Cake"],
    //     distance: "900m",
    //   },
    // ],
  });
};

const formatDistance = (distance) => {
  let thisDistance = 0;
  let unit = "m";
  if (distance > 1000) {
    thisDistance = parseFloat(distance / 1000).toFixed(1);
    unit = "km";
  } else {
    thisDistance = Math.floor(distance);
  }
  return thisDistance + unit;
};

const renderDetailPage = (req, res, location) => {
  console.log(" ****** " +location+" *******" )
  res.render("location-info", {
    title: location.name,
    pageHeader: {
      title: location.name,
    },
    sidebar: {
      context:
        "is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.",
      callToAction:
        "If you've been and you like it - or if you don't - please leave a review to help other people just like you.",
    },
    location: location,
    // {
    //   name: "Starcups",
    //   address: "경기도 안성시 안성2동 비룡 5길 18",
    //   rating: 3,
    //   facilities: ["Hot drinks", "Food", "Premium wifi"],
    //   coords: { lat: 37.012924, lng: 127.260911 },
    //   openingTimes: [
    //     {
    //       days: "Monday - Friday",
    //       opening: "7:00am",
    //       closing: "7:00pm",
    //       closed: false,
    //     },
    //     {
    //       days: "Saturday",
    //       opening: "8:00am",
    //       closing: "5:00pm",
    //       closed: false,
    //     },
    //     {
    //       days: "Sunday",
    //       closed: true,
    //     },
    //   ],
    //   reviews: [
    //     {
    //       author: "Simon Holmes",
    //       rating: 5,
    //       timestamp: "16 July 2013",
    //       reviewText:
    //         "What a great place. I can't say enough good things about it.",
    //     },
    //     {
    //       author: "Charlie Chaplin",
    //       rating: 3,
    //       timestamp: "16 June 2013",
    //       reviewText:
    //         "It was okay. Coffee wasn't great, but the wifi was fast.",
    //     },
    //   ],
    // },
  });
};
const locationInfo = (req, res) => {
  const path = `/api/locations/${req.params.locationid}`;
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: "GET",
    json: {},
  };
  request(requestOptions, (err, {statusCode}, body) => {
    const data = body;
    if(statusCode === 200) {
    data.coords = {
      lng: body.coords[0],
      lat: body.coords[1],
    };
    renderDetailPage(req, res, data);
  } else {
    showError(req, res, statusCode)
  }
  });
};

const showError = (req, res, status) => {
  let title = "";
  let content = "";
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear, Looks like you can't find this page. Sorry";
  } else {
    title = `${status}, something's gone wrong`;
    content = "Something, somewhere, has gone just a little bit wrong";
  }
  res.status(status);
  res.render("generic-text", {
    title,
    content,
  });
};

const addReview = (req, res) => {
  res.render("location-review-form", {
    title: "Review Starcups on Loc8r",
    pageHeader: { title: "Review Starcups" },
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview,
};
