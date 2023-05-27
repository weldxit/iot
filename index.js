const { json } = require('express')
const express = require('express')
const db =require('./queries')
const cors = require('cors')

const app = express()
app.use(json())
app.use(cors())

app.listen(4000,()=>{
console.log("i am running")
})
app.get('/getdata',db. getSensordata)
app.post('/sensor_data',db.postSensordata)
