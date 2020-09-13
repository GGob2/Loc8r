const index = (req, res) => {
a  res.render("index", {
    title: "Express by 2018250001 강명조",
  });
};

module.exports = {
  index,
};
