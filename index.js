const ex = require('express')
const request = require('request')

const app = ex()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/', function (req, res) {
  try {
    const url = 'https://bluesage-dev.bluesageusa.com'+ req.url
    req.pipe(request(url)).pipe(res)
    console.log(req.url.slice(0,20))
  } catch (e) {console.log('error', e)}
})

app.listen(process.env.PORT || 3030)
