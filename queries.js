const pool = require('./database')

const getSensordata=(req,res)=>{
    const data =[]
pool.query('select * from sensordata',(err,result)=>{
    if (err){
        throw err;
    }
<<<<<<< HEAD
    console.log(result.rows, result.rows.vlaue)
    res.status(200).send(result.rows)
=======
    result.rows.map((result)=>{
       data.push(result.value)
    })
    res.status(200).send(data)
>>>>>>> 3759af73953d125a4e8d2e1130eca0942095531c
})

}

const postSensordata = (req,res)=>{
    pool.query(`insert into sensordata values (${req.body.value})`,(err,result)=>{
        if(err){
            throw err;
        }
        console.log(result)
        res.status(201).send('data pushed')
    })
}
module.exports ={getSensordata,postSensordata}