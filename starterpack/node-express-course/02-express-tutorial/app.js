const express=require('express')

const app = express()
const path= require('path')

app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

// app.get('/styles.css',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/styles.css'))
// })

// app.get('/logo.svg',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/logo.svg'))
// })

// app.get('/browser-app.js',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/browser-app.js'))
// })

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})


app.listen(5000,()=>{
    console.log('server listening to port 5000...')
})