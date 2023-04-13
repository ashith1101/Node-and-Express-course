const express = require('express')
const app = express()
const logger =require('./logger')
const authorize =require('./authorize')
const morgan=require('morgan')
// app.use([logger,authorize])

app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about',(req, res) => {
  res.send('About')
})
app.get('/api/product', (req, res) => {
    console.log(req.user)
    res.send('Product')
  })

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})