const homelist = (req, res) => {
    res.render('index', {title : 'Home by 2018250001 강명조'});
};

const locationInfo = (req, res) => {
    res.render('index', {title : 'Location Info Home by 2018250001 강명조'});
};

const addReview = (req, res) => {
    res.render('index', {title : 'Add review by 2018250001 강명조'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};