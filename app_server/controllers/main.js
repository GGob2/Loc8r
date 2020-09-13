/* GET hompage */
const index = (req, res) => {
    res.render('index', {title : 'Express by 2018250001 강명조'})
};

module.exports ={
    index
};