const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
const port = 3000
app.get('/about', function (req, res) {
  res.render('about')
})
app.get('/contact', function (req, res) {
  res.render('contact')
})
app.get('/portfolio', function (req, res) {
  res.render('portfolio')
})
app.get('/', function (req, res) {
  res.render('index')
})
app.listen(port, function () {
  console.log('listening on http://localhost:3000')
})