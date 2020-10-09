exports.get404 = (req, res) => {
  const context = {
    title: 'Page Not Found'
  }
  res.render('errors/404', { ...context })
}
