const pool = require('./database')

const getSensordata=(req,res)=>{
    const data =[]
pool.query('select * from sensordata',(err,result)=>{
    if (err){
        throw err;
    }
    result.rows.map((result)=>{
       data.push(result.value)
    })
    res.status(200).send(data)

})

}

const postSensordata = (req,res)=>{
    pool.query(`insert into sensordata values (${req.body.value},${req.body.time})`,(err,result)=>{
        if(err){
            throw err;
        }
        console.log(result)
        res.status(201).send('data pushed')
    })
}
module.exports ={getSensordata,postSensordata}
