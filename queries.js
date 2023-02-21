const pool = require('./database')

const getSensordata=(req,res)=>{
pool.query('select * from sensordata',(err,result)=>{
    if (err){
        throw err;
    }
    res.status(200).send(result.rows.value)
})

}

const postSensordata = (req,res)=>{
    pool.query(`insert into sensordata values (${req.body.value})`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(201).send(result.rows)
    })
}
module.exports ={getSensordata,postSensordata}