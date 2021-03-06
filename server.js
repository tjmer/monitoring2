const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')
let rollbar = new Rollbar({
    accessToken: '34aa899f56da4e588230b8bb767a3041',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express()

app.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

const port = process.env.PORT || 4545
app.listen(port, ()=>console.log(`Up on ${port}`))