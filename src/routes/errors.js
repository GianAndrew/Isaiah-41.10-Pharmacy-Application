const notFound = (req, res) => {
  try {
    return res.render('404.ejs', { url: req.originalUrl });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = notFound;
