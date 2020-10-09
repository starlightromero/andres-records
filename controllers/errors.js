exports.get404 = (req, res) => {
  const context = {
    title: 'Page Not Found'
  }
  res.render('404', { ...context })
}
