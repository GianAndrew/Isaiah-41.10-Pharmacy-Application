const getPage = (req, res) => {
  return res.render('dashboard.ejs');
};

module.exports = {
  getPage,
};
