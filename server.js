const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')
let rollbar = new Rollbar({
    accessToken: '8d54a6407af34ad48410126d8e5e4e3b',
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