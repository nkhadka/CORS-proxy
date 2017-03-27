const ex = require('express')
const request = require('request')

const app = ex()
// const BASE_URL = 'https://bcvguwpzrwpcxxq4w-mock.stoplight-proxy.io'
// const BASE_URL = 'https://bluesage-api.bluesageusa.com'
const BASE_URL = 'https://homebridge-dev.bluesageusa.com'
// const BASE_URL = 'http://btech-dev2.bluesageusa.com:8081'
// const BASE_URL = 'https://bluesage-dev.bluesageusa.com'
//
console.log('CORSPROXY started')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use('/', function (req, res) {
  try {
    const url = BASE_URL + req.url
    console.log(req.url.split('access_token')[0])
    req.url !== '/' && req.pipe(request(url)).pipe(res)
  } catch (e) {console.log('error', e)}
})

app.listen(process.env.PORT || 3030)
