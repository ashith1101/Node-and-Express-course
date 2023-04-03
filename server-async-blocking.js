const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Home page")
    }
    if(req.url==='/about'){
        res.end("About page")

        //blocking code(sync code ex for look) here will effect all other page also
    }
    res.end("Error Page")
})

server.listen(5000,()=>{
    console.log('Server listening on port:5000....')
})