/* GET hompage */
const about = (req, res) => {
    res.render('generic-text', {title : 'About by 2018250001 강명조'})
};

module.exports ={
    about,
};